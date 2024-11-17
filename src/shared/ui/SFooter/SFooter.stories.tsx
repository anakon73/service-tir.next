import type { Meta, StoryObj } from '@storybook/vue3'
import { SFooter } from '.'

export default {
  title: 'Shared/UI/SFooter',
  component: SFooter,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SFooter>

type Story = StoryObj<typeof SFooter>

export const Default: Story = { name: 'SFooter' }
