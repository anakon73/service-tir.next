import type { Meta, StoryObj } from '@storybook/vue3'

import {
  AddToWishlist,
  type AddToWishlistEmits,
  type AddToWishlistProps,
} from '.'

export default {
  title: 'Features/Product/AddToWishlist',
  component: AddToWishlist,
  tags: ['autodocs'],

  args: { liked: false },

  argTypes: {
    liked: { control: 'boolean' },

    like: { table: { disable: true } },
  },
} satisfies Meta<AddToWishlistProps & AddToWishlistEmits>

type Story = StoryObj<typeof AddToWishlist>

export const NotLiked: Story = {}

export const Liked: Story = { args: { liked: true } }
