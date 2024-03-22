import { setup, type Preview } from "@storybook/vue3";
import { mswDecorator , initialize } from 'msw-storybook-addon'

import { applyProviders } from '@/app/providers'
import { handlers } from '@/shared/api/handlers'

import '@/app/styles/index.css';

initialize({
  onUnhandledRequest: 'bypass'
})

setup((app) => {
  applyProviders(app)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    msw: { handlers }
  },
  decorators: [mswDecorator],
};

export default preview;
