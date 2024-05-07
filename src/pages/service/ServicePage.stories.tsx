import type { Meta, StoryObj } from '@storybook/vue3'
import { ServicePage } from '.'

export default {
  title: 'Pages/ServicePage',
  component: ServicePage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ServicePage>

type Story = StoryObj<typeof ServicePage>

export const Default: Story = { name: 'ServicePage' }
