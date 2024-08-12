import { z } from 'zod'
import type { ValidationSchema } from '@/shared/lib/validation'
import type { FormFields } from './types'

export function produceInitialValues(
  password?: FormFields,
): FormFields {
  return {
    password: password?.password ?? '',
    confirmPassword: password?.confirmPassword ?? '',
  }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = {
    password: z.string().min(8, 'Password should contain 8 or more letters'),
    confirmPassword: z.string(),
  }

  return z.object(fields).refine(({ password, confirmPassword }) => {
    return confirmPassword === password
  }, { path: ['confirmPassword'], message: 'Passwords must be same' })
}
