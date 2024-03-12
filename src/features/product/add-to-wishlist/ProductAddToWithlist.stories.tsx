import type { Meta, StoryObj } from '@storybook/vue3'

import {
  ProductAddToWishlist,
  type ProductAddToWishlistEmits,
  type ProductAddToWishlistProps,
} from '.'

export default {
  title: 'Features/Product/AddToWishlist',
  component: ProductAddToWishlist,
  tags: ['autodocs'],

  args: { liked: false },

  argTypes: {
    liked: { control: 'boolean' },

    like: { table: { disable: true } },
  },
} satisfies Meta<ProductAddToWishlistProps & ProductAddToWishlistEmits>

type Story = StoryObj<ProductAddToWishlistProps & ProductAddToWishlistEmits>

export const NotLiked: Story = {}

export const Liked: Story = { args: { liked: true } }
