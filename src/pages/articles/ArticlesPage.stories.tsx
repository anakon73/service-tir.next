import type { Meta, StoryObj } from '@storybook/vue3'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { ArticlesPage } from '.'

const meta = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
  parameters: { layout: 'fullscreen', LayoutComponent: DefaultLayout },
} satisfies Meta<typeof ArticlesPage>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'ArticlesPage' }
