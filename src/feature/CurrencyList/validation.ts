"use client"

import { z } from "zod"

export const currencyCreateSchema = z.object({
  currency_name: z.string().min(1, {
    message: "Название валюты должно быть заполнено",
  }),
  currency_code: z.string()
})
