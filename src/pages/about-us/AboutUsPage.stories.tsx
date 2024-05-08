import type { Meta, StoryObj } from '@storybook/vue3'
import { AboutUsPage } from '.'

export default {
  title: 'Pages/AboutUsPage',
  component: AboutUsPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AboutUsPage>

type Story = StoryObj<typeof AboutUsPage>

export const Default: Story = { name: 'AboutUsPage' }
