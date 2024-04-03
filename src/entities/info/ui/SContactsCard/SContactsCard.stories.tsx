import type { Meta, StoryObj } from '@storybook/vue3'
import { SContactsCard } from '.'

export default {
  title: 'Entities/Info/UI/SContactsCard',
  component: SContactsCard,
} satisfies Meta<typeof SContactsCard>

type Story = StoryObj<typeof SContactsCard>

export const Default: Story = { name: 'SContactsCard' }
