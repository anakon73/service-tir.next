import type { Meta, StoryObj } from '@storybook/vue3'
import { SNavbar } from '.'

export default {
  title: 'Shared/UI/SNavbar',
  component: SNavbar,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SNavbar>

type Story = StoryObj<typeof SNavbar>

export const Default: Story = { name: 'SNavbar' }
