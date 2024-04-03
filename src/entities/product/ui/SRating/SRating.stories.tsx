import type { Meta, StoryObj } from '@storybook/vue3'

import { SRating } from '.'

export default {
  title: 'Entities/Product/UI/SRating',
  component: SRating,
  tags: ['autodocs'],

  argTypes: {
    quantity: { type: 'boolean' },
  },

  args: {
    quantity: false,
    rating: {
      quantity: 127,
      rate: 4.8,
    },
  },
} satisfies Meta<typeof SRating>

type Story = StoryObj<typeof SRating>

export const Default: Story = {}

export const WithQuantity: Story = { args: { quantity: true } }
