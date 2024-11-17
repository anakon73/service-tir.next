import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/pages/routes'
import { loadLayoutMiddleware } from '@/shared/lib/router'
import { useUserStore } from '@/entities/user'

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => {
    return {
      top: 0,
    }
  },
})

router.beforeEach((to, _from, next) => {
  const userStore = useUserStore()

  if (
    (
      to.name?.startsWith('Profile')
      || to.name === 'Cart'
      || to.name === 'Order'
    )
    && !userStore.user
  ) {
    next({ name: 'Register' })
  }
  else {
    next()
  }
})

router.beforeEach(loadLayoutMiddleware)
