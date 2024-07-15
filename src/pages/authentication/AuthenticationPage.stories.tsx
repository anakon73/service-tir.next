import type { Meta, StoryObj } from '@storybook/vue3'
import { AuthenticationPage } from '.'

export default {
  title: 'Pages/AuthenticationPage',
  component: AuthenticationPage,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AuthenticationPage>

type Story = StoryObj<typeof AuthenticationPage>

export const Default: Story = { name: 'AuthenticationPage' }
