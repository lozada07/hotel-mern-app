import { axiosConfig } from "../libs/axios/axiosConfig";
import { BookingType } from "../types";

export const createAccommodation = async (data: FormData) => {
  const res = await axiosConfig.post("/accommodation", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

export const getAllAccommodation = async () => {
  const res = await axiosConfig.get("/accommodation");
  return res.data;
};

export const getAccommodation = async (id?: string) => {
  const res = await axiosConfig.get(`/accommodation/detail-accomodation/${id}`);
  return res.data.data;
};

export const getUserAccommodations = async () => {
  const res = await axiosConfig.get(`/accommodation/user-accomodations`);
  return res.data.data;
};

export const getUserReservations = async () => {
  const res = await axiosConfig.get(`/accommodation/user-reservations`);
  return res.data.data;
};

export const searchAllAccommodations = async ({
  searchParams,
  pageParam,
}: {
  searchParams: any;
  pageParam: any;
}) => {
  const queryParams = new URLSearchParams();
  queryParams.append("site", searchParams.site || "");
  queryParams.append("adultCount", searchParams.adultCount || "");
  queryParams.append("childCount", searchParams.childrenCount || "");
  queryParams.append("bathroomCount", searchParams.bathroomCount || "");
  queryParams.append("bedroomCount", searchParams.bedroomCount || "");
  queryParams.append("guestCount", searchParams.guestCount || "");
  queryParams.append("price", searchParams.price || "");
  queryParams.append("sortOptions", searchParams.sortOptions);
  queryParams.append("page", pageParam);

  if (searchParams.starRating) {
    searchParams.starRating.forEach((rating: string) => {
      queryParams.append("starRating", rating);
    });
  }
  if (searchParams.types) {
    searchParams.types.map((type: string) => {
      queryParams.append("types", type);
    });
  }

  if (searchParams.facilities) {
    searchParams.facilities.map((facility: string) => {
      queryParams.append("facilities", facility);
    });
  }

  const { data } = await axiosConfig.get(
    `/accommodation/search?${queryParams}`
  );

  return {
    data: data.data,
    nextPage: pageParam > data.pagination.pages ? undefined : pageParam + 1,
    total: data.pagination.total,
  };
};

export const createPaymentIntent = async ({
  hotelId,
  numberOfNights,
}: {
  hotelId: string;
  numberOfNights: string;
}) => {
  const response = await axiosConfig.post(
    `/accommodation/${hotelId}/bookings/payment-intent`,
    {
      numberOfNights: numberOfNights,
    }
  );

  return response.data;
};

export const createRoomBooking = async (formData: BookingType) => {
  const response = await axiosConfig.post(
    `/accommodation/${formData._id}/bookings`,
    formData
  );

  return response.data;
};
