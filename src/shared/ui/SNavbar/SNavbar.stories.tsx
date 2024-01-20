import type { Meta, StoryObj } from '@storybook/vue3'

import { SNavbar } from '.'

export default {
  title: 'Shared/UI/SNavbar',
  component: SNavbar,
} satisfies Meta<typeof SNavbar>

type Story = StoryObj<typeof SNavbar>

export const Default: Story = {
  render: () => () => (
    <div class="w-[1440px]">
      <SNavbar />
    </div>
  ),
}
