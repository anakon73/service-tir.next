import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { SNavbar } from '.'

describe('SNavbar', () => {
  test('Should render component', () => {
    const wrapper = mount(SNavbar)

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })
})
