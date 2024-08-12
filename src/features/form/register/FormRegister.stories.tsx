import type { Meta, StoryObj } from '@storybook/vue3'
import { FormRegister } from '.'

const meta = {
  title: 'Features/Form/Register',
  component: FormRegister,
} satisfies Meta<typeof FormRegister>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'Register' }
