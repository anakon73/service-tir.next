import type { Tabs } from './types'

export const tabs: {
  name: string
  value: Tabs
  routeName: 'ProfileMain' | 'ProfileInfo' | 'ProfileFavorite' | 'ProfileOrders'
}[] = [
  {
    name: 'Головна',
    value: 'main',
    routeName: 'ProfileMain',
  },
  {
    name: 'Особисті данні',
    value: 'info',
    routeName: 'ProfileInfo',
  },
  {
    name: 'Обране',
    value: 'favorite',
    routeName: 'ProfileFavorite',
  },
  {
    name: 'Мої замовлення',
    value: 'orders',
    routeName: 'ProfileOrders',
  },
]
