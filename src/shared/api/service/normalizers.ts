import type { z } from 'zod'
import { objectPick } from '@antfu/utils'

import type { Service } from '@/shared/types'
import type { ServiceSchema } from './types'

export function normalizeService(
  service: z.infer<typeof ServiceSchema>,
): Service {
  return {
    ...objectPick(
      service,
      ['category', 'description', 'id', 'image', 'name', 'prices'],
    ),
    fullDescription: service.full_description,
  }
}
