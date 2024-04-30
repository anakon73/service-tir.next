import type { z } from 'zod'
import type { AnyObject } from '@/shared/lib/utils'

export type ValidationSchema<T extends AnyObject> = {
  [K in keyof T]: z.ZodType<T[K]>
}
