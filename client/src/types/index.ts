import { ZodType } from "zod";

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type PropsResetPassword = {
  password: string;
  confirmPassword: string;
};

export type PropsResetPasswordData = {
  data: PropsResetPassword;
  token: string;
};

// Accommodation Types

export type PropsMultiStepForm = {
  currentStepIndex: number;
  step: React.ReactElement;
  schema: ZodType;
  stepIndex: number[];

  isFirstStep: boolean;
  isLastStep: boolean;
  direction: number;
  next: () => void;
  back: () => void;
};

export type AccommodationFormData = {
  _id?: string;
  user_id?: UserType;
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  price: number;
  starRating: number;
  adultCount: number;
  childrenCount: number;
  bathroomCount: number;
  bedroomCount: number;
  createdAt: string;
  facilities: string[];
  images?: FileList | File[];
  imagesUrl?: string[];
};
export type PaymentIntentResponse = {
  paymentIntentId: string;
  clientSecret: string;
  totalCost: number;
};

export type BookingType = {
  _id: string;
  adultCount: number;
  childCount: number;
  checkIn: Date;
  checkOut: Date;
  totalPrice: number;
  paymentIntentId: string;
};

export type PaymentFormProps = {
  paymentIntent: PaymentIntentResponse;
  reservation: BookingType;
};
