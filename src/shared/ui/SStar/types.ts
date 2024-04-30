import type { ArrayToUnion } from '@/shared/lib/styles'

export const Size = ['sm', 'lg'] as const

export type Size = ArrayToUnion<typeof Size>
