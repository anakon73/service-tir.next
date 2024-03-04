import type { Meta, StoryObj } from '@storybook/vue3'
import { SSearchItem, type SSearchItemProps } from '.'

const meta = {
  title: 'Entities/Product/UI/SSearchItem',
  component: SSearchItem,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<SSearchItemProps>

export default meta

type Story = StoryObj<SSearchItemProps>

export const Default: Story = {
  name: 'SSearchItem',
  args: {
    id: 6422889,
    image: `
    https://e7.pngegg.com/pngimages/856/952/png-clipart-
fuel-tank-diesel-fuel-storage-tank-petroleum-truck-rectangle-truck.png`,
    name: 'Паливний бак Scania',
    price: 2200,
    rate: {
      quantity: 127,
      rate: 4.8,
    },
  },
}
