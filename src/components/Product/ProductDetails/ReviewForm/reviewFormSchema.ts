import { z } from "zod";

import { DEFAULT_VALIDATION_MESSAGES } from "@/shared/constants/defaultValidationMessages";

export const reviewFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .regex(/^[\p{L} ,.'-]+$/u, {
      message: "Field contains unsupported characters",
    }),
  email: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .email(DEFAULT_VALIDATION_MESSAGES.email),
  headline: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .max(50, "Characters maximum amount is 50"),
  content: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .max(400, "Characters maximum amount is 400"),
  rating: z.number().refine((value) => value !== 0, {
    message: "Product must be rated",
  }),
});
