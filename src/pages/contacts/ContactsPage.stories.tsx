import type { Meta, StoryObj } from '@storybook/vue3'
import { ContactsPage } from '.'

export default {
  title: 'Pages/ContactsPage',
  component: ContactsPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ContactsPage>

type Story = StoryObj<typeof ContactsPage>

export const Default: Story = { name: 'ContactsPage' }
