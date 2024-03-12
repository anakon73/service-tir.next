import type { Meta, StoryObj } from '@storybook/vue3'

import { ProductCard, type ProductCardProps } from '.'

const meta = {
  title: 'Widgets/ProductCard',
  component: ProductCard,
} satisfies Meta<ProductCardProps>

export default meta

type Story = StoryObj<ProductCardProps>

export const Default: Story = {
  name: 'ProductCard',
  args: {
    name: 'Распредвал для Scania',
    description: `
        Это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице
        с начала XVI века.
      `,
    discount: true,
    image: 'https://images.prom.ua/4665477938_w640_h640_raspredval-scania-1270.jpg',
    price: 2200,
    rate: {
      quantity: 127,
      rate: 4.8,
    },
    priceWithDiscount: 2000,
  },
}
