import type { Meta, StoryObj } from '@storybook/vue3'
import { SArticleCard } from '.'

export default {
  title: 'Entities/Article/UI/SArticleCard',
  component: SArticleCard,

  args: {
    id: 1,
    createdAt: new Date('September 1, 2023'),
    name: 'Як відбувається ремонт двигунів?',
    description: 'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    previewImage: 'https://i0.wp.com/allproservicenter.com/wp-content/uploads/2021/02/engine-repair-300x200-1.jpg?resize=270%2C180&ssl=1',
  },

  argTypes: {
    createdAt: { control: 'date' },
  },
} satisfies Meta<typeof SArticleCard>

type Story = StoryObj<typeof SArticleCard>

export const Default: Story = { name: 'SArticleCard' }
