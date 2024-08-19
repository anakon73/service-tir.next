import type { Meta, StoryObj } from '@storybook/vue3'
import { ContactsPage } from '.'
import DefaultLayout from '../layouts/DefaultLayout.vue'

export default {
  title: 'Pages/ContactsPage',
  component: ContactsPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ContactsPage>

type Story = StoryObj<typeof ContactsPage>

export const Default: Story = { name: 'ContactsPage' }
