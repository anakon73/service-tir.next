import type { Meta, StoryObj } from '@storybook/vue3'

import { Categories } from './types'
import { ServiceCategory } from '.'

export default {
  title: 'Features/Service/Category',
  component: ServiceCategory,

  args: {
    selectedCategory: 'TIR Сервіс',
  },

  argTypes: {
    selectedCategory: { control: 'select', options: Categories },

    // @ts-expect-error sb types
    changeCategory: { table: { disable: true } },
  },
} satisfies Meta<typeof ServiceCategory>

type Story = StoryObj<typeof ServiceCategory>

export const Default: Story = { name: 'Category' }
