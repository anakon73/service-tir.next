import type { Meta, StoryObj } from '@storybook/vue3'
import { ResultsPage } from '.'

export default {
  title: 'Pages/ResultsPage',
  component: ResultsPage,

  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof ResultsPage>

type Story = StoryObj<typeof ResultsPage>

export const Default: Story = { name: 'ResultsPage' }
