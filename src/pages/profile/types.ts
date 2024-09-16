import type { ArrayToUnion } from '@/shared/lib/styles'

export const Tabs = ['main', 'info', 'favorite', 'orders'] as const

export type Tabs = ArrayToUnion<typeof Tabs>
