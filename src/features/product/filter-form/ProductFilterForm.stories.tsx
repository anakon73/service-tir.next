import type { Meta, StoryObj } from '@storybook/vue3'
import {
  ProductFilterForm,
  type ProductFilterFormEmits,
  type ProductFilterFormProps,
} from '.'

export default {
  title: 'Features/Product/FilterForm',
  component: ProductFilterForm,

  parameters: {
    layout: 'fullscreen',
  },

  args: { show: false },

  argTypes: {
    show: { control: 'boolean' },

    close: { table: { disable: true } },
  },
} satisfies Meta<ProductFilterFormEmits & ProductFilterFormProps>

type Story = StoryObj<ProductFilterFormEmits & ProductFilterFormProps>

export const Default: Story = { name: 'FilterForm' }
