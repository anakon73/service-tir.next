import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { SRating } from '.'

describe('sRating', () => {
  it('should render component', () => {
    const wrapper = mount(SRating, { props: { rate: 4 } })

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })

  it('should render component with quantity', () => {
    const wrapper = mount(SRating, { props: { rate: 4, quantity: 15 } })

    expect(wrapper.find('[aria-label="quantity"]').exists()).toBeTruthy()
  })
})
