import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { SNavbar } from '.'

describe('sNavbar', () => {
  it('should render component', () => {
    const wrapper = mount(SNavbar)

    expect(wrapper.element instanceof HTMLDivElement).toBeTruthy()
  })
})
