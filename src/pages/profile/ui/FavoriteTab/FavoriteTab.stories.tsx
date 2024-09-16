import type { Meta, StoryObj } from '@storybook/vue3'
import { FavoriteTab } from '.'

const meta = {
  title: 'Pages/ProfilePage/UI/FavoriteTab',
  component: FavoriteTab,
} satisfies Meta<typeof FavoriteTab>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'FavoriteTab' }
