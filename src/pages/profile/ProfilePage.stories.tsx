import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ProfilePage } from '.'

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ProfilePage>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'ProfilePage' }
