import type { Meta, StoryObj } from '@storybook/vue3'
import { ArticleCard } from '.'

export default {
  title: 'Widgets/ArticleCard',
  component: ArticleCard,

  args: {
    date: new Date('September 1, 2023'),
    name: 'Як відбувається ремонт двигунів?',
    description:
      'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    image:
      'https://i0.wp.com/allproservicenter.com/wp-content/uploads/2021/02/engine-repair-300x200-1.jpg?resize=270%2C180&ssl=1',
  },

  argTypes: {
    date: { control: 'date' },
    name: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
  },
} satisfies Meta<typeof ArticleCard>

type Story = StoryObj<typeof ArticleCard>

export const Default: Story = { name: 'ArticleCard' }
