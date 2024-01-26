import type { Meta, StoryObj } from '@storybook/vue3'

import { AddToWishlist } from '.'

export default {
  title: 'Features/Product/AddToWishlist',
  component: AddToWishlist,
  tags: ['autodocs'],

  args: { liked: false },

  argTypes: {
    liked: { control: 'boolean' },

    // @ts-expect-error sb types
    like: { table: { disable: true } },
  },
} satisfies Meta<typeof AddToWishlist>

type Story = StoryObj<typeof AddToWishlist>

export const NotLiked: Story = {}

export const Liked: Story = { args: { liked: true } }
