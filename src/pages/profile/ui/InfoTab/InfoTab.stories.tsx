import type { Meta, StoryObj } from '@storybook/vue3'
import { InfoTab } from '.'

const meta = {
  title: 'Pages/ProfilePage/UI/InfoTab',
  component: InfoTab,
} satisfies Meta<typeof InfoTab>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'InfoTab' }
