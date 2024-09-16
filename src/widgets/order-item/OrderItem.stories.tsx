import type { Meta, StoryObj } from '@storybook/vue3'
import { makeProductMock } from '@/shared/api/product/mock'
import { OrderItem, type OrderItemProps } from '.'

const product = makeProductMock()

const meta = {
  title: 'Widgets/OrderItem',
  component: OrderItem,
  args: {
    ...product,
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<OrderItemProps>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'OrderItem' }
