import type { ArrayToUnion } from '@/shared/lib/styles'

export const Size = ['base', 'lg'] as const
export type Size = ArrayToUnion<typeof Size>

export const Variant =
['primary', 'light', 'white', 'link', 'link-white'] as const
export type Variant = ArrayToUnion<typeof Variant>
