import type { Meta, StoryObj } from '@storybook/vue3'
import { SArticleCard } from '.'

export default {
  title: 'Entities/Article/UI/SArticleCard',
  component: SArticleCard,

  args: {
    date: new Date('September 1, 2023'),
    name: 'Як відбувається ремонт двигунів?',
    description:
      // eslint-disable-next-line max-len
      'Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?',
    image:
      // eslint-disable-next-line max-len
      'https://i0.wp.com/allproservicenter.com/wp-content/uploads/2021/02/engine-repair-300x200-1.jpg?resize=270%2C180&ssl=1',
  },

  argTypes: {
    date: { control: 'date' },
    name: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
  },
} satisfies Meta<typeof SArticleCard>

type Story = StoryObj<typeof SArticleCard>

export const Default: Story = { name: 'SArticleCard' }
