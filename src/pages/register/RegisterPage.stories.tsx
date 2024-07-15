import type { Meta, StoryObj } from '@storybook/vue3'
import { RegisterPage } from '.'

export default {
  title: 'Pages/RegisterPage',
  component: RegisterPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof RegisterPage>

type Story = StoryObj<typeof RegisterPage>

export const Default: Story = { name: 'RegisterPage' }
