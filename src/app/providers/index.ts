import type { App } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { worker } from './browser'
import { router } from './router'

const pinia = createPinia()

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
  app.use(pinia)
}

export function applyAppOnlyProviders(app: App) {
  worker.start({
    onUnhandledRequest: 'bypass',
  })
  app.use(router)
}
