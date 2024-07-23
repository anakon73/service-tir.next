import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { SInput } from '.'

describe('sInput', () => {
  it('should render component', () => {
    const wrapper = mount(SInput)

    expect(wrapper.element instanceof HTMLInputElement).toBeTruthy()
  })
})
