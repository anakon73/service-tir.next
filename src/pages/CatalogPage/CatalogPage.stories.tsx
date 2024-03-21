import type { Meta, StoryObj } from '@storybook/vue3'
import { CatalogPage } from '.'

export default {
  title: 'Pages/CatalogPage',
  component: CatalogPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof CatalogPage>

type Story = StoryObj<typeof CatalogPage>

export const Default: Story = { name: 'CatalogPage' }
