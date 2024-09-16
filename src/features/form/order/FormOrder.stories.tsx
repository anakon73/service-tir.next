import type { Meta, StoryObj } from '@storybook/vue3'
import { FormOrder } from '.'

const meta = {
  title: 'Features/Form/Order',
  component: FormOrder,
} satisfies Meta<typeof FormOrder>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'FormOrder' }
