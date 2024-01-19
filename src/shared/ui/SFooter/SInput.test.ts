import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { SFooter } from '.'

describe('SFooter', () => {
  test('Should render component', () => {
    const wrapper = mount(SFooter)

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })

  test('Should render logo', () => {
    const wrapper = mount(SFooter)

    expect(wrapper.find('[alt="service tir logo"]').exists()).toBeTruthy()
  })
})
