import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { AddToWishlist } from '.'

describe('AddToWishlist', () => {
  it('should render component', () => {
    const wrapper = mount(AddToWishlist, { attrs: { 'aria-label': 'WishlistButton' } })

    expect(wrapper.find('[aria-label="WishlistButton"]').exists()).toBeTruthy()
  })

  it('should emit like', () => {
    const wrapper = mount(AddToWishlist, { attrs: { 'aria-label': 'WishlistButton' } })

    wrapper.find('[aria-label="WishlistButton"]').trigger('click')

    expect(wrapper.emitted('like')).toBeTruthy()
  })
})
