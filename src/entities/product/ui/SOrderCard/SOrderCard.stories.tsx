import type { Meta, StoryObj } from '@storybook/vue3'
import { SOrderCard, type SOrderCardProps } from '.'
import { makeProductMock } from '@/shared/api/product/mock'

const meta = {
  title: 'Entities/Product/UI/SOrderCard',
  component: SOrderCard,
  args: {
    code: 21312312312,
    date: new Date(),
    fullPrice: 312312312,
    products: [makeProductMock(), makeProductMock(), makeProductMock()],
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<SOrderCardProps>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'SOrderCard' }
