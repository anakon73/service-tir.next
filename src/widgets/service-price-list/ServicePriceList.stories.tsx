import type { z } from 'zod'
import type { Meta, StoryObj } from '@storybook/vue3'

import type { PriceSchema } from '@/shared/api/service'
import { ServicePriceList } from '.'

const prices: z.infer<typeof PriceSchema>[] = [
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 25500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 20500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 10 },
    price: 15500,
  },
  {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 32500,
  },
  {
    name: 'Капітальний ремонт двигуна Scania R-Series 4x2 2016 DC16 115',
    duration: { min: null, max: 5 },
    price: 25500,
  },
  {
    name: 'Ремонт двигуна Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 3, max: null },
    price: 65500,
  },
]

export default {
  title: 'Widgets/ServicePriceList',
  component: ServicePriceList,
  parameters: { layout: 'fullscreen' },
  args: { items: prices },
} satisfies Meta<typeof ServicePriceList>

type Story = StoryObj<typeof ServicePriceList>

export const Default: Story = { name: 'ServicePriceList' }
