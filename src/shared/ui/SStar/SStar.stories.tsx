import type { Meta, StoryObj } from '@storybook/vue3'

import { SStar } from '.'

export default {
  title: 'Shared/UI/SStar',
  component: SStar,
  tags: ['autodocs'],
} satisfies Meta<typeof SStar>

type Story = StoryObj<typeof SStar>

export const Active: Story = { args: { active: true } }

export const NonActive: Story = {}
