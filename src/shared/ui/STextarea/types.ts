import type { ArrayToUnion } from '@/shared/lib/styles'

export const Size = ['base', 'lg'] as const

export type Size = ArrayToUnion<typeof Size>
