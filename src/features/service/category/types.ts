import type { ArrayToUnion } from '@/shared/lib/styles'

export const Categories = [
  'TIR Сервіс',
  'Віділ запчастин',
  'Мотор сервіс',
  'Турбо сервіс',
  'Металообробка',
  'Мийка, шиномонтаж',
  'Вантажні перевезення',
  'Стоянка TIR',
  'Тех. огляд',
] as const
export type Categories = ArrayToUnion<typeof Categories>
