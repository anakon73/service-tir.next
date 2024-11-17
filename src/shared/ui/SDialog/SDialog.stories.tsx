import type { Meta, StoryObj } from '@storybook/vue3'

import { Size } from './types'
import { SDialog, type SDialogProps } from '.'

export default {
  title: 'Shared/UI/SDialog',
  component: SDialog,
  parameters: { layout: 'fullscreen' },

  args: {
    open: true,
    size: 'md',

    default: () => (
      <div class="px-10 text-2xl font-medium">Dialog Window</div>
    ),
  },

  argTypes: {
    size: { control: 'select', options: Size },

    default: { table: { disable: true } },
    class: { table: { disable: true } },
    // @ts-expect-error sb types
    close: { table: { disable: true } },
  },
} satisfies Meta<SDialogProps & typeof SDialog>

type Story = StoryObj

export const Default: Story = { name: 'SDialog' }
