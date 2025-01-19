"use client";

import { z } from "zod";

export const SupplierSchema = z.object({
  titleEn: z.string({ message: "Title in English is required" }).min(3, {
    message: "Title in English must be at least 3 characters",
  }),
  titleAr: z.string({ message: "Title in Arabic is required" }).min(3, {
    message: "Title in Arabic must be at least 3 characters",
  }),
  image: z.instanceof(File, { message: "Image is required" }),
});
