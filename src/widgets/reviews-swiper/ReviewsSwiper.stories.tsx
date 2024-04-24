import type { Meta, StoryObj } from '@storybook/vue3'
import { ReviewsSwiper, type ReviewsSwiperProps } from '.'

const list = [
  {
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
  {
    author: 'Lubin',
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
  {
    author: 'Ann',
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
  {
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
  {
    author: 'Lubin',
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
  {
    author: 'Ann',
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
  {
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
  {
    author: 'Lubin',
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
  {
    author: 'Ann',
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
]

export default {
  title: 'Widgets/ReviewsSwiper',
  component: ReviewsSwiper,

  args: {
    list,
  },

  argTypes: {
    list: { table: { disable: true } },
  },
} satisfies Meta<ReviewsSwiperProps>

type Story = StoryObj<ReviewsSwiperProps>

export const Default: Story = { name: 'ReviewsSwiper' }
