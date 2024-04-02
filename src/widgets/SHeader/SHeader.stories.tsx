import type { Meta, StoryObj } from '@storybook/vue3'
import { SHeader } from '.'

export default {
  title: 'Widgets/SHeader',
  component: SHeader,

  parameters: {
    layout: 'fullscreen',
  },

  args: {
    logged: false,
  },

  argTypes: {
    logged: { control: 'boolean' },
  },
} satisfies Meta<typeof SHeader>

type Story = StoryObj<typeof SHeader>

export const Default: Story = { name: 'SHeader' }
