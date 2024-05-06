import type { Meta, StoryObj } from '@storybook/vue3'
import { ProductPage } from '.'

export default {
  title: 'Pages/ProductPage',
  component: ProductPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof ProductPage>

type Story = StoryObj<typeof ProductPage>

export const Default: Story = { name: 'ProductPage' }
