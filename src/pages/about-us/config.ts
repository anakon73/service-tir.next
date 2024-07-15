import { fakerUK as f } from '@faker-js/faker'

import type { Advantage } from '@/shared/types'
import { makeReviewMock } from '@/shared/api/review/mock'

import men1 from './assets/men1.jpg'
import men2 from './assets/men2.jpg'
import men3 from './assets/men3.jpg'
import men4 from './assets/men4.jpg'
import men5 from './assets/men5.jpg'
import men6 from './assets/men6.jpg'

function makeAdvantageMock(): Advantage {
  return {
    name: f.lorem.words({ min: 1, max: 3 }),
    description: f.lorem.words({ min: 15, max: 23 }),
    image: f.internet.emoji({ types: ['object'] }),
  }
}

export const advantages = Array.from({ length: 8 }, () => makeAdvantageMock())

export const reviews = Array.from({ length: 6 }, () => makeReviewMock())

export const workers = [
  {
    image: men1,
    name: 'Дмитро Евременко',
    jobTitle: 'Електрик',
  },
  {
    image: men2,
    name: 'Микола Заварев',
    jobTitle: 'Майстер по ходовій',
  },
  {
    image: men3,
    name: 'Олександр Симонов',
    jobTitle: 'Моторист',
  },
  {
    image: men4,
    name: 'Максим Захаров',
    jobTitle: 'Електрик',
  },
  {
    image: men5,
    name: 'Дмитро Лисюк',
    jobTitle: 'Моторист',
  },
  {
    image: men6,
    name: 'Володимир Матвієнко',
    jobTitle: 'Майстер по ходовій',
  },
]
