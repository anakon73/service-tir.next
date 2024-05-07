import type { Meta, StoryObj } from '@storybook/vue3'
import { ServicePriceListItem } from '.'

export default {
  title: 'Widgets/ServicePriceList/ServicePriceListItem',
  component: ServicePriceListItem,
  parameters: { layout: 'fullscreen' },

  args: {
    name: 'Заміна поршнів на двигунах Scania R-Series 4x2 2016 DC13 146',
    duration: { min: 2, max: 3 },
    price: 25500,
    secondary: false,
  },
} satisfies Meta<typeof ServicePriceListItem>

type Story = StoryObj<typeof ServicePriceListItem>

export const Default: Story = { }

export const Secondary: Story = { args: { secondary: true } }
