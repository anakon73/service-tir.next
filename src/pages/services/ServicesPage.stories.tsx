import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ServicesPage } from '.'

export default {
  title: 'Pages/ServicesPage',
  component: ServicesPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ServicesPage>

type Story = StoryObj<typeof ServicesPage>

export const Default: Story = { name: 'ServicesPage' }
