import { z } from 'zod'

import type { User } from '@/shared/types'
import type { ValidationSchema } from '@/shared/lib/validation'

import type { FormFields } from './types'

export function produceInitialValues(user?: User): FormFields {
  return { email: user?.email ?? '' }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = { email: z.string().email() }

  return z.object(fields)
}
