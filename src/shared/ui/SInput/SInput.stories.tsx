import type { Meta, StoryObj } from '@storybook/vue3'

import { SInput } from '.'

export default {
  title: 'Shared/UI/SInput',
  component: SInput,
  tags: ['autodocs'],

  args: {
    label: '',
    small: false,
  },

  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<typeof SInput>

type Story = StoryObj<typeof SInput>

export const Default: Story = {}

export const WithLabel: Story = { args: { label: 'Label' } }

export const Small: Story = { args: { small: true } }
