import type { Meta, StoryObj } from '@storybook/vue3'
import { SPagination } from '.'

const meta = {
  title: 'Shared/UI/SPagination',
  component: SPagination,

  args: {
    total: 39,
    selectedPage: 1,
    itemsPerPage: 18,
  },
} satisfies Meta<typeof SPagination>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'SPagination' }
