import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { ProductAddToWishlist } from '.'

describe('ProductAddToWishlist', () => {
  it('should render component', () => {
    const wrapper = mount(ProductAddToWishlist, { attrs: { 'aria-label': 'WishlistButton' } })

    expect(wrapper.find('[aria-label="WishlistButton"]').exists()).toBeTruthy()
  })

  it('should emit like', () => {
    const wrapper = mount(ProductAddToWishlist, { attrs: { 'aria-label': 'WishlistButton' } })

    wrapper.find('[aria-label="WishlistButton"]').trigger('click')

    expect(wrapper.emitted('like')).toBeTruthy()
  })
})
