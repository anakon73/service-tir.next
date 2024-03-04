import type { Meta, StoryObj } from '@storybook/vue3'
import { ReviewCard } from '.'

export default {
  title: 'Widgets/ReviewCard',
  component: ReviewCard,
} satisfies Meta<typeof ReviewCard>

type Story = StoryObj<typeof ReviewCard>

export const Default: Story = { name: 'ReviewCard' }
