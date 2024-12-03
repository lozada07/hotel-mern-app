import mongoose from "mongoose";
import { AccommodationType, BookingType } from "../types";
import { v4 as uuidv4 } from "uuid";

const bookingSchema = new mongoose.Schema<BookingType>({
  _id: {
    type: String,
    default: uuidv4,
  },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  userId: { type: String, required: true },
  totalPrice: { type: Number, required: true },
});
const accommodationSchema = new mongoose.Schema<AccommodationType>(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    user_id: { type: String, ref: "User", required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    adultCount: { type: Number, required: true },
    childrenCount: { type: Number, required: true },
    bathroomCount: { type: Number, required: true },
    bedroomCount: { type: Number, required: true },
    facilities: [{ type: String, required: true }],
    price: { type: Number, required: true },
    starRating: { type: Number, required: true, min: 1, max: 5 },
    imagesUrl: [{ type: String, required: true }],
    bookings: [bookingSchema],
  },
  { timestamps: true }
);

const Accommodation = mongoose.model<AccommodationType>(
  "Accommodation",
  accommodationSchema
);
export default Accommodation;
