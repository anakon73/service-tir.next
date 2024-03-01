import type { Meta, StoryObj } from '@storybook/vue3'
import { ContactsCard } from '.'

export default {
  title: 'Widgets/ContactsCard',
  component: ContactsCard,
} satisfies Meta<typeof ContactsCard>

type Story = StoryObj<typeof ContactsCard>

export const Default: Story = { name: 'ContactsCard' }
