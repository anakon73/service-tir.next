import type { Meta, StoryObj } from '@storybook/vue3'
import { ArticlesPage } from '.'

export default {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ArticlesPage>

type Story = StoryObj<typeof ArticlesPage>

export const Default: Story = { name: 'ArticlesPage' }
