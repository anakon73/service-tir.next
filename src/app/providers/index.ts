import type { App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import { worker } from './browser'

export function applyProviders(app: App) {
  app.use(VueQueryPlugin)
}

export function applyAppOnlyProviders() {
  worker.start({
    onUnhandledRequest: 'bypass',
  })
}
