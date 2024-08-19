import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { AboutUsPage } from '.'

export default {
  title: 'Pages/AboutUsPage',
  component: AboutUsPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof AboutUsPage>

type Story = StoryObj<typeof AboutUsPage>

export const Default: Story = { name: 'AboutUsPage' }
