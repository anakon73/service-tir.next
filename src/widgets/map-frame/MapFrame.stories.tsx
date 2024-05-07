import type { Meta, StoryObj } from '@storybook/vue3'
import { MapFrame } from '.'

export default {
  title: 'Widgets/MapFrame',
  component: MapFrame,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MapFrame>

type Story = StoryObj<typeof MapFrame>

export const Default: Story = { name: 'MapFrame' }
