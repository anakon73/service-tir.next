import { type Preview, setup } from '@storybook/vue3'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import { applyProviders } from '@/app/providers'
import '@/app/styles/index.css'

import { handlers } from '@/shared/api/handlers'
import { layoutDecorator } from '@/shared/lib/storybook'

initialize({
  onUnhandledRequest: 'bypass',
})

setup((app) => {
  applyProviders(app)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    msw: { handlers },
  },
  decorators: [mswDecorator, layoutDecorator],
}

export default preview
