import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ArticlesPage } from '.'

export default {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ArticlesPage>

type Story = StoryObj<typeof ArticlesPage>

export const Default: Story = { name: 'ArticlesPage' }
