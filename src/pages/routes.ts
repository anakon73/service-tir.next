import type { RouteRecordInfo, RouteRecordRaw } from 'vue-router'
import { AppLayoutsEnum } from '@/shared/lib/router/types'

import { AboutUsPage } from './about-us'
import { ArticlesPage } from './articles'
import { AuthenticationPage } from './authentication'
import { BlogPage } from './blog'
import { CatalogPage } from './catalog'
import { ContactsPage } from './contacts'
import { HomePage } from './home'
import { ProductPage } from './product'
import { RegisterPage } from './register'
import { ResetPasswordPage } from './reset-password'
import { ResultsPage } from './results'
import { ReviewsPage } from './reviews'
import { ServicePage } from './service'
import { ServicesPage } from './services'
import { CartPage } from './cart'
import { ProfilePage } from './profile'
import { FavoriteTab, InfoTab, MainTab, OrdersTab } from './profile/ui'
import { OrderPage } from './order'

export const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'AboutUs',
    path: '/about-us',
    component: AboutUsPage,
  },
  {
    name: 'Articles',
    path: '/articles',
    component: ArticlesPage,
  },
  {
    name: 'Authentication',
    path: '/authentication',
    component: AuthenticationPage,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
  {
    name: 'Blog',
    path: '/blog/:id',
    component: BlogPage,
  },
  {
    name: 'Catalog',
    path: '/catalog',
    component: CatalogPage,
  },
  {
    name: 'Contacts',
    path: '/contacts',
    component: ContactsPage,
  },
  {
    name: 'Product',
    path: '/product/:code',
    component: ProductPage,
  },
  {
    name: 'Register',
    path: '/register',
    component: RegisterPage,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
  {
    name: 'ResetPassword',
    path: '/reset-password',
    component: ResetPasswordPage,
    meta: {
      layout: AppLayoutsEnum.auth,
    },
  },
  {
    name: 'Results',
    path: '/results',
    component: ResultsPage,
  },
  {
    name: 'Reviews',
    path: '/reviews',
    component: ReviewsPage,
  },
  {
    name: 'Service',
    path: '/service/:id',
    component: ServicePage,
  },
  {
    name: 'Services',
    path: '/services',
    component: ServicesPage,
  },
  {
    name: 'Cart',
    path: '/cart',
    component: CartPage,
  },
  {
    name: 'Order',
    path: '/order',
    component: OrderPage,
  },
  {
    name: 'Profile',
    path: '/profile',
    component: ProfilePage,
    children: [
      { name: 'ProfileMain', path: '/profile/main', component: MainTab },
      { name: 'ProfileInfo', path: '/profile/info', component: InfoTab },
      { name: 'ProfileFavorite', path: '/profile/favorite', component: FavoriteTab },
      { name: 'ProfileOrders', path: '/profile/orders', component: OrdersTab },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export interface RouteNamedMap {
  Home: RouteRecordInfo<'Home', '/'>
  AboutUs: RouteRecordInfo<'AboutUs', '/about-us'>
  Articles: RouteRecordInfo<'Articles', '/articles'>
  Authentication: RouteRecordInfo<'Authentication', '/authentication'>
  Blog: RouteRecordInfo<
    'Blog',
    '/blog/:id',
    { id: string | number }
  >
  Catalog: RouteRecordInfo<'Catalog', '/catalog'>
  Contacts: RouteRecordInfo<'Contacts', '/contacts'>
  Product: RouteRecordInfo<
    'Product',
    '/product/:code',
    { code: string | number }
  >
  Register: RouteRecordInfo<'Register', '/register'>
  ResetPassword: RouteRecordInfo<'ResetPassword', '/reset-password'>
  Results: RouteRecordInfo<'Results', '/results'>
  Reviews: RouteRecordInfo<'Reviews', '/reviews'>
  Service: RouteRecordInfo<
    'Service',
    '/service/:id',
    { id: string | number }
  >
  Services: RouteRecordInfo<'Services', '/services'>
  Cart: RouteRecordInfo<'Cart', '/cart'>
  Order: RouteRecordInfo<'Order', '/order'>
  Profile: RouteRecordInfo<'Profile', '/profile'>
  ProfileMain: RouteRecordInfo<'ProfileMain', '/profile'>
  ProfileInfo: RouteRecordInfo<'ProfileInfo', '/profile/info'>
  ProfileFavorite: RouteRecordInfo<'ProfileFavorite', '/profile/favorite'>
  ProfileOrders: RouteRecordInfo<'ProfileOrders', '/profile/orders'>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
