import type { Meta, StoryObj } from '@storybook/vue3'
import { ReviewCard } from '.'

export default {
  title: 'Widgets/ReviewCard',
  component: ReviewCard,

  args: {
    author: 'Ann Lubin',
    comment: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
      ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet
      etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac
      nunc libero urna, feugiat. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam
      lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
      Ullamcorper risus tempor, ac nunc libero urna, feugiat.
    `,
    productName: 'Диск гальмівний Scania',
    rate: {
      quantity: 127,
      rate: 4.7,
    },
  },
} satisfies Meta<typeof ReviewCard>

type Story = StoryObj<typeof ReviewCard>

export const Default: Story = { name: 'ReviewCard' }
