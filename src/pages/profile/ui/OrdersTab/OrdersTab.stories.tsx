import type { Meta, StoryObj } from '@storybook/vue3'
import { OrdersTab } from '.'

const meta = {
  title: 'Pages/ProfilePage/UI/OrdersTab',
  component: OrdersTab,
} satisfies Meta<typeof OrdersTab>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'OrdersTab' }
