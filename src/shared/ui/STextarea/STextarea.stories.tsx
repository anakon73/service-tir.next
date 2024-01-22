import type { Meta, StoryObj } from '@storybook/vue3'

import { STextarea } from '.'

export default {
  title: 'Shared/UI/STextarea',
  component: STextarea,

  tags: ['autodocs'],
} satisfies Meta<typeof STextarea>

type Story = StoryObj<typeof STextarea>

export const Base: Story = {}

export const Large: Story = { args: { size: 'lg' } }

export const WithPlaceholder: Story = { args: { placeholder: 'Write text...' } }
