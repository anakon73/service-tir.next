import type { Meta, StoryObj } from '@storybook/vue3'
import { ReviewsPage } from '.'

export default {
  title: 'Pages/ReviewsPage',
  component: ReviewsPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ReviewsPage>

type Story = StoryObj<typeof ReviewsPage>

export const Default: Story = { name: 'ReviewsPage' }
