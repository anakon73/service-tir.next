import type { Meta, StoryObj } from '@storybook/vue3'
import { FormLogin } from '.'

const meta = {
  title: 'Features/Form/Login',
  component: FormLogin,
} satisfies Meta<typeof FormLogin>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'Login' }
