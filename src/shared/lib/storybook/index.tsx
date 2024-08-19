import type { Decorator } from '@storybook/vue3'
import type { FunctionalComponent } from 'vue'

export const layoutDecorator: Decorator = (
  Story,
  { parameters: { LayoutComponent } },
) => {
  const Layout = LayoutComponent
    ?? ((_, { slots }) => slots.default?.()) as FunctionalComponent

  return {
    render: () => (
      <Layout>
        {Story()}
      </Layout>
    ),
  }
}
