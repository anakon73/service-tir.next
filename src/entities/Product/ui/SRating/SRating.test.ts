import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { SRating } from '.'

describe('SRating', () => {
  const rating = {
    quantity: 127,
    rate: 4.8,
  }

  test('Should render component', () => {
    const wrapper = mount(SRating, { props: { rating } })

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })

  test('Should render component with quantity', () => {
    const wrapper = mount(SRating, { props: { rating, quantity: true } })

    expect(wrapper.find('[aria-label="quantity"]').exists()).toBeTruthy()
  })
})
