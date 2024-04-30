import type { Meta, StoryObj } from '@storybook/vue3'
import { ReviewCreate } from '.'

export default {
  title: 'Features/Review/Create',
  component: ReviewCreate,

  args: {
    open: true,
  },

  argTypes: {
    // @ts-expect-error sb-error
    close: { table: { disable: true } },
  },
} satisfies Meta<typeof ReviewCreate>

type Story = StoryObj<typeof ReviewCreate>

export const Default: Story = { name: 'Create' }
