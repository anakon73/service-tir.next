import type { Meta, StoryObj } from '@storybook/vue3'

import { SRating } from '.'

export default {
  title: 'Entities/Product/UI/SRating',
  component: SRating,
  tags: ['autodocs'],

  args: {
    rate: 4,
  },

  argTypes: {
    quantity: { type: 'number' },
  },
} satisfies Meta<typeof SRating>

type Story = StoryObj<typeof SRating>

export const Default: Story = {}

export const WithQuantity: Story = { args: { quantity: 15 } }
