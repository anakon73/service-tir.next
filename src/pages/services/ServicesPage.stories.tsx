import type { Meta, StoryObj } from '@storybook/vue3'
import { ServicesPage } from '.'

export default {
  title: 'Pages/ServicesPage',
  component: ServicesPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ServicesPage>

type Story = StoryObj<typeof ServicesPage>

export const Default: Story = { name: 'ServicesPage' }
