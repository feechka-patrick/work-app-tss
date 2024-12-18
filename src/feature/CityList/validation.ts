"use client"

import { z } from "zod"

export const cityCreateSchema = z.object({
  city_name: z.string().min(1, {
    message: "Название города должно быть заполнено",
  }),
  city_is_region: z.boolean(),
  city_code: z.string()
})
