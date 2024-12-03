import z from "zod";

export const HotelInformationSchema = z.object({
  name: z
    .string({ required_error: "This field is required" })
    .min(2, "name must be at least 2 characters"),
  city: z
    .string({ required_error: "This field is required" })
    .min(2, "city must be at least 2 characters"),
  country: z
    .string({ required_error: "This field is required" })
    .min(2, "country must be at least 2 characters"),
  description: z
    .string({ required_error: "This field is required" })
    .min(10, "description must be at least 10 characters"),
});

export const HotelTypeSchema = z.object({
  type: z
    .string({ required_error: "This field is required" })
    .min(2, "this field is required"),
});

export const HotelFacilitiesSchema = z.object({
  facilities: z
    .array(z.string({ required_error: "This field is required" }))
    .min(1, "facilities is required"),
});

export const HotelDetailSchema = z.object({
  price: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "price must be a number",
    }),
  starRating: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "starRating must be a number",
    }),
  adultCount: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "childrenCount must be a number",
    }),
  childrenCount: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "childrenCount must be a number",
    }),
  bathroomCount: z
    .string()
    .min(0, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "childrenCount must be a number",
    }),
  bedroomCount: z
    .string()
    .min(1, "this field is required")
    .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
      message: "childrenCount must be a number",
    }),
});
export const HotelUploadSchema = z.object({
  images: z
    .custom((value) => value instanceof FileList && value.length > 0, {
      message: "images is required",
    })
    .or(z.array(z.instanceof(File)).min(1, "Image is required")),
});
