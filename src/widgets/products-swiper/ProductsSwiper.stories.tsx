import type { Meta, StoryObj } from '@storybook/vue3'
import {
  ProductsSwiper,
  type ProductsSwiperProps,
  type ProductsSwiperSlots,
} from '.'

const list = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
]

export default {
  title: 'Widgets/ProductsSwiper',
  component: ProductsSwiper,

  args: {
    list,

    default: () => (
      <div class="font-jakarta text-4xl font-bold leading-extra-height">
        Схожі товари
      </div>
    ),
  },

  argTypes: {
    list: { table: { disable: true } },
    default: { table: { disable: true } },
  },
} satisfies Meta<ProductsSwiperProps & ProductsSwiperSlots>

type Story = StoryObj<ProductsSwiperProps & ProductsSwiperSlots>

export const Default: Story = { name: 'ProductsSwiper' }
