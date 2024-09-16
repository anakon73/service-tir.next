import type { Meta, StoryObj } from '@storybook/vue3'
import { SuccessfullyModal } from '.'

const meta = {
  title: 'Features/Form/Order/UI/SuccessfullyModal',
  component: SuccessfullyModal,
  args: {
    open: true,
  },
  argTypes: {
    // @ts-expect-error 123
    close: { table: { disable: true } },
  },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof SuccessfullyModal>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'SuccessfullyModal' }
