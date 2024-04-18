export interface Rating {
  rate: number
  quantity: number
}

export interface Product {
  name: string
  description: string
  discount: boolean
  rate: Rating
  image: string
  price: number
  priceWithDiscount: number | null
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
