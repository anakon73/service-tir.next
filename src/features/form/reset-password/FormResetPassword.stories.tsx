import type { Meta, StoryObj } from '@storybook/vue3'
import { FormResetPassword } from '.'

const meta = {
  title: 'Features/Form/ResetPassword',
  component: FormResetPassword,
} satisfies Meta<typeof FormResetPassword>

export default meta

export const Default: StoryObj<typeof FormResetPassword> = { name: 'ResetPassword' }
