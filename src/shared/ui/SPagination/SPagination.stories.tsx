import type { Meta, StoryObj } from '@storybook/vue3'
import {
  SPagination,
  type SPaginationEmits,
  type SPaginationProps,
} from '.'

export default {
  title: 'Shared/UI/SPagination',
  component: SPagination,

  args: {
    total: 39,
    selectedPage: 1,
    itemsPerPage: 18,
  },

  argTypes: {
    changePage: { table: { disable: true } },
  },
} satisfies Meta<SPaginationProps & SPaginationEmits>

type Story = StoryObj<SPaginationProps & SPaginationEmits>

export const Default: Story = { name: 'SPagination' }
