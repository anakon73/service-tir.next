export interface Rating {
  rate: number
  quantity: number
}

export type Specs = {
  name: string
  value: string
}[]

export interface Review {
  rate: Rating
  author: string
  productName: string
  comment: string
}

export interface Product {
  code: number
  name: string
  description: string
  discount: boolean
  rate: Rating
  image: string
  price: number
  priceWithDiscount: number | null
  specs: Specs
  similarProducts: Omit<
    Product,
'specs' | 'similarProducts' | 'fullDescription' | 'images' | 'reviews' | 'quantity'
  >[]
  fullDescription: string
  images: string[]
  reviews: Review[]
  quantity: number
}

export interface Advantage {
  name: string
  description: string
  image: string
}

export interface SearchItem {
  name: string
  image: string
  rate: Rating
  id: number
  price: number
}

export interface Article {
  id: number
  date: Date
  name: string
  description: string
  previewImage: string
  paragraphs: {
    image: string
    text: string[]
  }[]
  similarArticles: Omit<Article, 'paragraphs' | 'similarArticles'>[]
}

export type Price = {
  name: string
  duration: {
    min: number | null
    max: number | null
  }
  price: number
}

export interface Service {
  id: number
  name: string
  description: string
  fullDescription: string
  image: string
  category:
    'TIR Сервіс'
    | 'Віділ запчастин'
    | 'Мотор сервіс'
    | 'Турбо сервіс'
    | 'Металообробка'
    | 'Мийка, шиномонтаж'
    | 'Вантажні перевезення'
    | 'Стоянка TIR'
    | 'Тех. огляд'
  prices: Price[]
}

export type CartItem = {
  productCode: number
  count: number
}

export interface Order {
  code: number
  date: Date
  fullPrice: number
  products: Product[]
}

export interface User {
  name: string
  email: string
  password: string
  likedProducts: number[]
  orders: Order[]
  cart: CartItem[]
}
