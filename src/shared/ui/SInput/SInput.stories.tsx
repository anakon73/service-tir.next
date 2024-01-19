import type { Meta, StoryObj } from '@storybook/vue3'

import { SInput } from '.'

export default {
  title: 'Shared/UI/SInput',
  component: SInput,
  tags: ['autodocs'],

  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<typeof SInput>

type Story = StoryObj<typeof SInput>

export const Default: Story = {}
