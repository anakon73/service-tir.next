import type { Meta, StoryObj } from '@storybook/vue3'

import { Size } from './types'
import { SStar } from '.'

export default {
  title: 'Shared/UI/SStar',
  component: SStar,
  tags: ['autodocs'],

  args: {
    active: false,
    size: 'sm',
  },

  argTypes: {
    size: { control: 'select', options: Size },
  },
} satisfies Meta<typeof SStar>

type Story = StoryObj<typeof SStar>

export const NonActive: Story = {}

export const Active: Story = { args: { active: true } }

export const Large: Story = { args: { size: 'lg' } }
