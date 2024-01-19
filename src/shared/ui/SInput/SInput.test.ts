import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { SInput } from '.'

describe('SInput', () => {
  test('Should render component', () => {
    const wrapper = mount(SInput)

    expect(wrapper.element instanceof HTMLInputElement).toBeTruthy()
  })
})
