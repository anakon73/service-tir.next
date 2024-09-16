import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { CartPage } from '.'

const meta = {
  title: 'Pages/CartPage',
  component: CartPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof CartPage>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'CartPage' }
