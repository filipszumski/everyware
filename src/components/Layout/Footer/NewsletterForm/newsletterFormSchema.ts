import { z } from "zod";

import { DEFAULT_VALIDATION_MESSAGES } from "@/shared/constants/defaultValidationMessages";

export const newsletterFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, DEFAULT_VALIDATION_MESSAGES.required)
    .email(DEFAULT_VALIDATION_MESSAGES.email),
});
