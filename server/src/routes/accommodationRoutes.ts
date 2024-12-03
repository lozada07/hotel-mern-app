import { Router } from "express";

import { zodValidator } from "../middlewares/zodValidator";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { upload } from "../config/multer";
import {
  createAccommodation,
  getAccommodation,
  getAllAccommodation,
  searchAccommodations,
  AccommodationBookingPaymentIntent,
  AccommodationBooking,
  getUserAccommodations,
  getUserReservations,
} from "../controllers/accommodationController";
import { AccommodationSchema } from "../libs/zodSchemas/AccommodationSchema";

const router = Router();

router.get("/", getAllAccommodation);
router.get("/search", searchAccommodations);
router.get("/detail-accomodation/:id", getAccommodation);

// !TODO: Protected Routes
router.get("/user-accomodations", isAuthenticated, getUserAccommodations);
router.get("/user-reservations", isAuthenticated, getUserReservations);

router.post(
  "/",
  isAuthenticated,
  upload.array("images"),
  zodValidator(AccommodationSchema),
  createAccommodation
);
router.post("/:hotelId/bookings", isAuthenticated, AccommodationBooking);
router.post(
  "/:id/bookings/payment-intent",
  isAuthenticated,
  AccommodationBookingPaymentIntent
);

export default router;
