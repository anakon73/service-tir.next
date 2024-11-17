import { z } from 'zod'
import type { AnyObject } from '@/shared/lib/utils'

export type ValidationSchema<T extends AnyObject> = {
  [K in keyof T]: z.ZodType<T[K]>
}

export const dateValidation = z.preprocess(
  arg => (typeof arg === 'string' ? new Date(arg) : arg),
  z.date(),
) as z.ZodEffects<z.ZodDate, Date>

export function PaginatedResponseSchema<ItemType extends z.ZodTypeAny>(
  itemSchema: ItemType,
) {
  return z.object({
    data: z.array(itemSchema),
    current_page: z.number(),
    per_page: z.number(),
    total: z.number(),
    last_page: z.number(),
  })
}
