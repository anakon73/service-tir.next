import { cva } from 'cva'

import type { ClassRecord } from '@/shared/lib/styles'

import type { Size, Variant } from './types'

export const button = cva({
  base: 'whitespace-nowrap rounded-large font-bold transition-colors duration-300',
  variants: {
    size: {
      base: 'px-9 py-3 text-xs',
      lg: 'px-7 py-4 text-sm',
    } satisfies ClassRecord<Size>,
    variant: {
      'primary': 'bg-blue-600 text-white/100 hover:bg-blue-700 hover:text-zinc-100/100',
      'white': 'bg-white text-gray-900 hover:bg-zinc-100 hover:text-gray-950',
      'light': 'bg-gray-100 text-gray-900 hover:bg-gray-200 hover:text-gray-950',
      'link': 'text-white hover:text-zinc-100',
      'link-white': 'text-blue-600 hover:text-blue-800',
    } satisfies ClassRecord<Variant>,
    _content: {
      text: '',
      textAndIcon: 'flex items-center gap-1',
      icon: '',
    },
  },
})
