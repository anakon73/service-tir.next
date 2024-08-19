import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ReviewsPage } from '.'

export default {
  title: 'Pages/ReviewsPage',
  component: ReviewsPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ReviewsPage>

type Story = StoryObj<typeof ReviewsPage>

export const Default: Story = { name: 'ReviewsPage' }
