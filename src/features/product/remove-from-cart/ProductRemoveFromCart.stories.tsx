import type { Meta, StoryObj } from '@storybook/vue3'
import { ProductRemoveFromCart } from '.'

const meta = {
  title: 'Features/Product/RemoveFromCart',
  component: ProductRemoveFromCart,
} satisfies Meta<typeof ProductRemoveFromCart>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'RemoveFromCart' }
