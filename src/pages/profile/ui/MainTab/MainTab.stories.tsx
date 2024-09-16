import type { Meta, StoryObj } from '@storybook/vue3'
import { MainTab } from '.'

const meta = {
  title: 'Pages/ProfilePage/UI/MainTab',
  component: MainTab,
} satisfies Meta<typeof MainTab>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'MainTab' }
