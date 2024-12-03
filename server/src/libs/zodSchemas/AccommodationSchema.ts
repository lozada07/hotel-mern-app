import z from "zod";

export const AccommodationSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .min(1, "name is required"),
  city: z
    .string({ required_error: "city is required" })
    .min(1, "city is required"),
  country: z
    .string({ required_error: "country is required" })
    .min(1, "country is required"),
  description: z
    .string({ required_error: "description is required" })
    .min(1, "description is required"),
  type: z
    .string({ required_error: "type is required" })
    .min(1, "type is required"),
  adultCount: z
    .string({ required_error: "adultCount is required" })
    .refine((value) => !isNaN(Number.parseInt(value)), {
      message: "adultCount must be a number",
    }),
  childrenCount: z
    .string({ required_error: "childrenCount is required" })
    .refine((value) => !isNaN(Number.parseInt(value)), {
      message: "childCount must be a number",
    }),
  bathroomCount: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "childrenCount must be a number",
    }),
  bedroomCount: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)), {
      message: "childrenCount must be a number",
    }),
  facilities: z
    .array(z.string({ required_error: "facilities is required" }))
    .min(1, "facilities is required"),
  price: z
    .string({ required_error: "price is required" })
    .refine((value) => !isNaN(Number.parseInt(value)), {
      message: "pricePerNight must be a number",
    }),
  starRating: z.string().refine((value) => !isNaN(Number.parseInt(value)), {
    message: "starRating must be a number",
  }),
});
