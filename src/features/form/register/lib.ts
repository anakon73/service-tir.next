import { z } from 'zod'

import type { User } from '@/shared/types'
import type { ValidationSchema } from '@/shared/lib/validation'

import type { FormFields } from './types'

export function produceInitialValues(user?: User): FormFields {
  return {
    name: user?.name ?? '',
    email: user?.email ?? '',
    password: user?.name ?? '',
  }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = {
    name: z.string().min(2, 'Name should contain 2 or more letters'),
    email: z.string().email(),
    password: z.string().min(8, 'Password should contain 8 or more letters'),
  }

  return z.object(fields)
}
