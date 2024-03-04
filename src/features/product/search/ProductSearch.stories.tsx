import type { Meta, StoryObj } from '@storybook/vue3'
import { ProductSearch } from '.'

const meta = {
  title: 'Features/Product/Search',
  component: ProductSearch,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<{ mobile: boolean }>

export default meta

type Story = StoryObj<{ mobile: boolean }>

export const Default: Story = {}

export const Mobile: Story = { args: { mobile: true } }
