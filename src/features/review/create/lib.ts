import { z } from 'zod'

import type { Review } from '@/shared/types'
import type { ValidationSchema } from '@/shared/lib/validation'

import type { FormFields } from './types'

export function produceInitialValues(
  review?: Review,
): FormFields {
  return {
    author: review?.author ?? '',
    comment: review?.comment ?? '',
  }
}

export function produceValidationSchema() {
  const fields: ValidationSchema<FormFields> = {
    author: z.string().min(2, 'Ім\'я повинна містити принаймі 2 літери'),
    comment:
    z.string().min(8, 'Відгук повиненин складатися принаймі з 8 літер'),
  }

  return z.object(fields)
}
