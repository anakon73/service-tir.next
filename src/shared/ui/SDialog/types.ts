import type { ArrayToUnion } from '@/shared/lib/styles'

export const Size = ['md', 'lg'] as const

export type Size = ArrayToUnion<typeof Size>
