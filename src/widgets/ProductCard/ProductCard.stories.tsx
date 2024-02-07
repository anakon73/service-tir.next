import type { Meta, StoryObj } from '@storybook/vue3'
import type { ProductCardProps } from '.'
import { ProductCard } from '.'

const meta = {
  title: 'Widgets/ProductCard',
  component: ProductCard,
} satisfies Meta<ProductCardProps>

export default meta

type Story = StoryObj<ProductCardProps>

export const Default: Story = {
  args: {
    name: 'Распредвал для Scania',
    description: `
        Это текст-"рыба", часто используемый в печати и
        вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице
        с начала XVI века.
      `,
    discount: true,
    image: `
    https://e7.pngegg.com/pngimages/989/287/png-clipart-car-saab
-9-3-brake-pad-disc-brake-car-van-car-thumbnail.png
    `,
    price: 2200,
    rate: {
      quantity: 127,
      rate: 4.8,
    },
    priceWithDiscount: 2000,
  },
}
