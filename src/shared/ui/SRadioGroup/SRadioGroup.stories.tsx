import type { Meta, StoryObj } from '@storybook/vue3'
import { SRadioGroup, type SRadioGroupProps } from '.'

const deliveryOptions = [
  { label: 'Нова Пошта', value: 'novaposhta' },
  { label: 'Укр Пошта', value: 'ukrpost' },
  { label: 'Відправка по адресу', value: 'deliveryaddress' },
]

const meta = {
  title: 'Shared/UI/SRadioGroup',
  component: SRadioGroup,
  args: {
    options: deliveryOptions,
    name: 'SRadioGroup',
  },
} satisfies Meta<SRadioGroupProps>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'SRadioGroup' }
