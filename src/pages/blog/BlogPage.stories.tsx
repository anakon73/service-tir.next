import type { Meta, StoryObj } from '@storybook/vue3'
import { BlogPage } from '.'

export default {
  title: 'Pages/BlogPage',
  component: BlogPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BlogPage>

type Story = StoryObj<typeof BlogPage>

export const Default: Story = { name: 'BlogPage' }
