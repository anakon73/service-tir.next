import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ServicePage } from '.'

export default {
  title: 'Pages/ServicePage',
  component: ServicePage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ServicePage>

type Story = StoryObj<typeof ServicePage>

export const Default: Story = { name: 'ServicePage' }
