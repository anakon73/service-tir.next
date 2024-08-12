import type { Meta, StoryObj } from '@storybook/vue3'
import { NewPasswordStep } from '.'

const meta = {
  title: 'Features/Form/ResetPassword/ui/NewPasswordStep',
  component: NewPasswordStep,
} satisfies Meta<typeof NewPasswordStep>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'NewPasswordStep' }
