import { z } from 'zod'

import type { User } from '@/shared/types'
import type { ValidationSchema } from '@/shared/lib/validation'

import type { FormFields } from './types'

export function produceInitialValues(user?: User): FormFields {
  return {
    email: user?.email ?? '',
    password: user?.name ?? '',
  }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = {
    email: z.string().email(),
    password: z.string().min(8, 'Password should contain 8 or more letters'),
  }

  return z.object(fields)
}
