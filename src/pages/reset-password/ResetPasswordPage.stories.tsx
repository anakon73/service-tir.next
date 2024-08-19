import type { Meta, StoryObj } from '@storybook/vue3'
import AuthLayout from '../layouts/AuthLayout.vue'
import { ResetPasswordPage } from '.'

export default {
  title: 'Pages/ResetPasswordPage',
  component: ResetPasswordPage,
  parameters: { layout: 'fullscreen', LayoutComponent: AuthLayout },
} satisfies Meta<typeof ResetPasswordPage>

type Story = StoryObj<typeof ResetPasswordPage>

export const Default: Story = { name: 'ResetPasswordPage' }
