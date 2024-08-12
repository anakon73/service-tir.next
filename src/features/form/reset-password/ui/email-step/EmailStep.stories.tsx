import type { Meta, StoryObj } from '@storybook/vue3'
import { EmailStep } from '.'

const meta = {
  title: 'Features/Form/ResetPassword/ui/EmailStep',
  component: EmailStep,
} satisfies Meta<typeof EmailStep>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'EmailStep' }
