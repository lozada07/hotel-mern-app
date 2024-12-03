import { Types } from "mongoose";

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type AccommodationType = {
  _id: string;
  user_id: string;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  adultCount: number;
  childrenCount: number;
  bathroomCount: number;
  bedroomCount: number;
  facilities: string[];
  price: number;
  starRating: number;
  imagesUrl: string[];
  bookings: BookingType[];
};

export type SearchType = {
  site?: string;
  childrenCount?: string;
  adultCount?: string;
  bathroomCount?: string;
  bedroomCount?: string;
  price?: string;
  sortOptions?: string;
  guestCount?: string;
  starRating?: string[];
  facilities?: string[];
  types?: string[];
};

// export type BookingType = {
//   _id: string;

//   firstName: string;
//   lastName: string;
//   email: string;
//   adultCount: number;
//   childCount: number;
//   checkIn: Date;
//   checkOut: Date;
//   totalCost: number;
// };

export type BookingType = {
  _id: string;
  userId: string;
  adultCount: number;
  childCount: number;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
};
