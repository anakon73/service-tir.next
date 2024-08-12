/// <reference types="vite/client" />

import '@tanstack/vue-query'
import type { FetchError } from './shared/api/lib'

declare module '@tanstack/vue-query' {
  interface Register {
    defaultError: FetchError
  }
}
