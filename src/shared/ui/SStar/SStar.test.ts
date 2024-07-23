import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import { SStar } from '.'

describe('sStar', () => {
  it('should render component not active', () => {
    const wrapper = mount(SStar)

    expect(wrapper.find('[data-slot="icon"]').exists()).toBeTruthy()
  })

  it('should render component active', () => {
    const wrapper = mount(SStar, { props: { active: true } })

    expect(wrapper.element.classList.contains('opacity-100')).toBeTruthy()
  })
})
