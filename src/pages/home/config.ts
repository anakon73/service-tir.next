import { fakerUK as f } from '@faker-js/faker'

import type { Advantage } from '@/shared/types'
import { makeReviewMock } from '@/shared/api/review/mock'

function makeAdvantageMock(): Advantage {
  return {
    name: f.lorem.words({ min: 1, max: 3 }),
    description: f.lorem.words({ min: 15, max: 23 }),
    image: f.internet.emoji({ types: ['object'] }),
  }
}

export const advantages = Array.from({ length: 8 }, () => makeAdvantageMock())

export const reviews = Array.from({ length: 6 }, () => makeReviewMock())
