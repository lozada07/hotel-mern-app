import { Request, Response } from "express";
import { errorHandler } from "../utils/errorHandler";
import { response } from "../utils/response";
import { cloudinaryUpload } from "../config/cloudinary";
import { AccommodationType, BookingType, SearchType } from "../types";
import Accommodation from "../models/accommodationModel";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string);

export const createAccommodation = errorHandler(
  async (req: Request, res: Response) => {
    const imageFiles = req.files as Express.Multer.File[];
    const newAccommodation: AccommodationType = req.body;

    const imagesUrls = await uploadImages(imageFiles);

    newAccommodation.imagesUrl = imagesUrls;

    newAccommodation.user_id = req.user_id;

    const accommodation = new Accommodation(newAccommodation);

    await accommodation.save();

    return response({
      res: res,
      status: 201,
      message: "Successful accommodation",
    });
  }
);

export const getAllAccommodation = errorHandler(
  async (req: Request, res: Response) => {
    const accommodations = await Accommodation.find();

    return response({
      res: res,
      status: 200,
      message: "Successful",
      data: accommodations,
    });
  }
);

export const getAccommodation = errorHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const accommodation = await Accommodation.findById(id).populate(
      "user_id",
      "firstName lastName"
    );

    if (!accommodation)
      return response({
        res: res,
        status: 404,
        message: "Something went wrong",
        error: true,
      });

    return response({
      res: res,
      status: 200,
      message: "Successful",
      data: accommodation,
    });
  }
);
export const getUserAccommodations = errorHandler(
  async (req: Request, res: Response) => {
    const userId = req.user_id;
    const accommodation = await Accommodation.find({ user_id: userId });

    if (!accommodation || accommodation.length === 0) {
      return response({
        res: res,
        status: 404,
        message: "Accommodations not found for the provided user_id",
        error: true,
      });
    }

    return response({
      res: res,
      status: 200,
      message: "Successful",
      data: accommodation,
    });
  }
);

export const getUserReservations = errorHandler(
  async (req: Request, res: Response) => {
    const userId = req.user_id;
    const accommodations = await Accommodation.find({
      "bookings.userId": userId,
    });

    if (!accommodations || accommodations.length === 0) {
      return response({
        res: res,
        status: 404,
        message: "Accommodations not found for the provided user_id",
        error: true,
      });
    }

    return response({
      res: res,
      status: 200,
      message: "Successful",
      data: accommodations,
    });
  }
);

export const searchAccommodations = async (req: Request, res: Response) => {
  const query = filtersSearchQuery(req.query);

  let sortOptions = {};
  switch (req.query.sortOptions) {
    case "higherRating":
      sortOptions = { starRating: -1 };
      break;
    case "lowerRating":
      sortOptions = { starRating: 1 };
      break;
    case "higherPrice":
      sortOptions = { price: -1 };
      break;
    case "lowerPrice":
      sortOptions = { price: 1 };
      break;
  }

  const pageSize = 5;
  const pageNumber = parseInt(req.query.page ? req.query.page.toString() : "1");
  const skip = (pageNumber - 1) * pageSize;

  const accommodation = await Accommodation.find(query)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);

  const total = await Accommodation.countDocuments(query);

  const response = {
    total: total,
    data: accommodation,
    pagination: {
      total,
      page: pageNumber,
      pages: Math.ceil(total / pageSize),
    },
  };

  res.json(response);
};

// !TODO: Function
const filtersSearchQuery = (query: SearchType) => {
  let filters: any = {};

  if (query.site) {
    filters.$or = [
      { city: new RegExp(query.site, "i") },
      { country: new RegExp(query.site, "i") },
    ];
  }

  if (query.adultCount) {
    filters.adultCount = {
      $gte: parseInt(query.adultCount),
    };
  }

  if (query.childrenCount) {
    filters.childrenCount = {
      $gte: parseInt(query.childrenCount),
    };
  }

  if (query.bathroomCount) {
    filters.bathroomCount = {
      $gte: parseInt(query.bathroomCount),
    };
  }

  if (query.price) {
    filters.price = {
      $gte: parseInt(query.price),
    };
  }

  if (query.guestCount) {
    filters.$expr = {
      $gte: [
        { $add: ["$adultCount", "$childrenCount"] },
        parseInt(query.guestCount),
      ],
    };
  }

  if (query.bedroomCount) {
    filters.bedroomCount = {
      $gte: parseInt(query.bedroomCount),
    };
  }

  if (query.facilities) {
    filters.facilities = {
      $all: Array.isArray(query.facilities)
        ? query.facilities
        : [query.facilities],
    };
  }

  if (query.types) {
    filters.type = {
      $in: Array.isArray(query.types) ? query.types : [query.types],
    };
  }

  if (query.starRating) {
    const starRatings = Array.isArray(query.starRating)
      ? query.starRating.map((star: string) => parseInt(star))
      : parseInt(query.starRating);

    filters.starRating = { $in: starRatings };
  }

  return filters;
};

async function uploadImages(imageFiles: Express.Multer.File[]) {
  const uploadPromises = imageFiles.map(async (image) => {
    const b64 = Buffer.from(image.buffer).toString("base64");
    let dataURI = "data:" + image.mimetype + ";base64," + b64;
    const res = await cloudinaryUpload(dataURI);
    let newUrl = res.url.replace("/upload/", "/upload/q_20/");
    return newUrl;
  });

  const imageUrls = await Promise.all(uploadPromises);
  return imageUrls;
}

export const AccommodationBookingPaymentIntent = async (
  req: Request,
  res: Response
) => {
  const { numberOfNights } = req.body;
  const hotelId = req.params.id;

  const hotel = await Accommodation.findById(hotelId);
  if (!hotel) {
    return res.status(400).json({ message: "Hotel not found" });
  }

  const totalCost = hotel.price * numberOfNights;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalCost * 100,
    currency: "gbp",
    metadata: {
      hotelId,
      userId: req.user_id,
    },
  });
  if (!paymentIntent.client_secret) {
    return res.status(500).json({ message: "Error creating payment intent" });
  }

  const response = {
    paymentIntentId: paymentIntent.id,
    clientSecret: paymentIntent.client_secret.toString(),
    totalCost,
  };

  res.send(response);
};

export const AccommodationBooking = async (req: Request, res: Response) => {
  try {
    const paymentIntentId = req.body.paymentIntentId;

    const paymentIntent = await stripe.paymentIntents.retrieve(
      paymentIntentId as string
    );

    if (!paymentIntent) {
      return res.status(400).json({ message: "payment intent not found" });
    }

    if (
      paymentIntent.metadata.hotelId !== req.params.hotelId ||
      paymentIntent.metadata.userId !== req.user_id
    ) {
      return res.status(400).json({ message: "payment intent mismatch" });
    }

    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({
        message: `payment intent not succeeded. Status:`,
      });
    }

    const newBooking: BookingType = {
      ...req.body,
      userId: req.user_id,
    };

    const hotel = await Accommodation.findOneAndUpdate(
      { _id: req.params.hotelId },
      {
        $push: { bookings: newBooking },
      }
    );

    if (!hotel) {
      return res.status(400).json({ message: "hotel not found" });
    }

    await hotel.save();
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something Hello wrong" });
  }
};
