import { createApp } from 'vue'

import { worker } from './providers/browser'
import App from './App.vue'
import './styles/index.css'

worker.start()

export const app = createApp(App)
