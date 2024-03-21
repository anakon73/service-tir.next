import type { Meta, StoryObj } from '@storybook/vue3'
import {
  ProductPagination,
  type ProductPaginationEmits,
  type ProductPaginationProps,
} from '.'

export default {
  title: 'Features/Product/ProductPagination',
  component: ProductPagination,

  args: {
    length: 33,
    selectedPage: 1,
    itemsPerPage: 18,
  },

  argTypes: {
    length: { control: 'number' },
    selectedPage: { control: 'number' },
    itemsPerPage: { control: 'number' },

    changePage: { table: { disable: true } },
  },
} satisfies Meta<ProductPaginationProps & ProductPaginationEmits>

type Story = StoryObj<ProductPaginationProps & ProductPaginationEmits>

export const Default: Story = { name: 'ProductPagination' }
