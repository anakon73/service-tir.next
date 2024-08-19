import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ProductPage } from '.'

export default {
  title: 'Pages/ProductPage',
  component: ProductPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ProductPage>

type Story = StoryObj<typeof ProductPage>

export const Default: Story = { name: 'ProductPage' }
