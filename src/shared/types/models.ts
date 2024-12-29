export interface Review {
  id: number
  createdAt: Date
  updatedAt: Date
  author: string
  product: {
    id: number
    name: string
  }
  comment: string
  rate: number
}

export type Rating = {
  rate: number
  quantity: number
}

export type Spec = {
  name: string
  value: string
}

export interface SimilarProduct {
  id: number
  code: number
  name: string
  description: string
  image: string
  price: number
  rate: Rating
  price_with_discount: number | null
}

export interface Product {
  id: number
  created_at: Date
  updated_at: Date
  code: number
  name: string
  description: string
  image: string
  price: number
  rate: Rating
  price_with_discount: number | null
  full_description: string
  specs: Spec[]
  reviews: Review[]
  similar_products: SimilarProduct[]
  images: string[]
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

export interface SimilarArticles {
  id: number
  name: string
  description: string
  previewImage: string
  createdAt: Date
  updatedAt: Date
}

export interface Article {
  id: number
  name: string
  description: string
  previewImage: string
  paragraphs: {
    image: string
    text: string[]
  }[]
  similarArticles: SimilarArticles[]
  createdAt: Date
  updatedAt: Date
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

export interface Pagination<T> {
  data: T[]
  currentPage: number
  perPage: number
  total: number
  lastPage: number
}
