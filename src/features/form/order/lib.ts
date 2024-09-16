import { z } from 'zod'
import type { ValidationSchema } from '@/shared/lib/validation'
import type { FormFields } from './types'

export function produceInitialValues(): FormFields {
  return {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    comment: '',
    delivery_method: 'nova_poshta',
    city: '',
    address: '',
    payment_method: 'cash',
  }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = {
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    phone: z.string()
      .regex(
        /^\+\d{9,}$/,
        'Phone number must start with + and contain at least 9 digits',
      ),
    email: z.string().email(),
    comment: z.string().optional(),
    delivery_method: z.enum(['nova_poshta', 'ukr_post', 'delivery_address']),
    city: z.string().min(2),
    address: z.string().min(2),
    payment_method: z.enum(['cash', 'card']),
  }

  return z.object(fields)
}
