import { app } from '@/shared/lib/app'
import { applyAppOnlyProviders, applyProviders } from './providers'
import './styles/index.css'

applyProviders(app)
applyAppOnlyProviders()
