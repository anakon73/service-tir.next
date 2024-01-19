import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { SButton } from '.'

describe('SButton', () => {
  test('to render button root element by default', () => {
    const wrapper = mount(SButton)

    expect(wrapper.element instanceof HTMLButtonElement).toBeTruthy()
  })

  test('`as` prop changes root element tag', () => {
    const wrapper = mount(SButton, { props: { as: 'a' } })

    expect(wrapper.element instanceof HTMLAnchorElement).toBeTruthy()
  })
})
