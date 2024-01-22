import { cva } from 'cva'

import type { ClassRecord } from '@/shared/lib/styles'

import type { Size } from './types'

export const textarea = cva({
  base: `
  w-full resize-none overflow-hidden border border-slate-300 bg-white
  p-4 text-sm font-medium leading-small text-slate-700
  placeholder:font-normal placeholder:text-gray-900/50
  `,
  variants: {
    size: {
      base: 'rounded-lg h-36 max-w-[370px]',
      lg: 'rounded-md h-32',
    } satisfies ClassRecord<Size>,
  },
})
