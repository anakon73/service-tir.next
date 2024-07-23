import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { SFooter } from '.'

describe('sFooter', () => {
  it('should render component', () => {
    const wrapper = mount(SFooter)

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })

  it('should render logo', () => {
    const wrapper = mount(SFooter)

    expect(wrapper.find('[alt="service tir logo"]').exists()).toBeTruthy()
  })
})
