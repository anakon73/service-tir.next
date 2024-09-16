import type { Meta, StoryObj } from '@storybook/vue3'
import { makeProductMock } from '@/shared/api/product/mock'
import { CartItem, type CartItemProps } from '.'

const product = makeProductMock()

const meta = {
  title: 'Widgets/CartItem',
  component: CartItem,
  args: {
    ...product,
    count: 1,
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<CartItemProps>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'CartItem' }
