import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { SRating } from '.'

describe('sRating', () => {
  const rating = {
    quantity: 127,
    rate: 4.8,
  }

  it('should render component', () => {
    const wrapper = mount(SRating, { props: { rating } })

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })

  it('should render component with quantity', () => {
    const wrapper = mount(SRating, { props: { rating, quantity: true } })

    expect(wrapper.find('[aria-label="quantity"]').exists()).toBeTruthy()
  })
})
