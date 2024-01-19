import type { Meta, StoryObj } from '@storybook/vue3'

import { SFooter } from '.'

export default {
  title: 'Shared/UI/SFooter',
  component: SFooter,
} satisfies Meta<typeof SFooter>

type Story = StoryObj<typeof SFooter>

export const Default: Story = {
  render: () => () => (
    <div class="w-[1440px]">
      <SFooter />
    </div>
  ),
}
