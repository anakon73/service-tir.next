import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { OrderPage } from '.'

const meta = {
  title: 'Pages/OrderPage',
  component: OrderPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof OrderPage>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'OrderPage' }
