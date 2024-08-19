import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { HomePage } from '.'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof HomePage>

type Story = StoryObj<typeof HomePage>

export const Default: Story = { name: 'HomePage' }
