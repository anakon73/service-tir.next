import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import { SStar } from '.'

describe('SStar', () => {
  test('Should render component not active', () => {
    const wrapper = mount(SStar)

    expect(wrapper.find('[data-slot="icon"]').exists()).toBeTruthy()
  })

  test('Should render component active', () => {
    const wrapper = mount(SStar, { props: { active: true } })

    expect(wrapper.element.classList.contains('opacity-100')).toBeTruthy()
  })
})
