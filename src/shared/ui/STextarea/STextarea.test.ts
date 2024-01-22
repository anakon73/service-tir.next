import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import { STextarea } from '.'

describe('STextarea', () => {
  test('Should render component', () => {
    const wrapper = mount(STextarea)

    expect(wrapper.element instanceof HTMLTextAreaElement).toBeTruthy()
  })

  test('Should add placeholder to textarea', () => {
    const wrapper = mount(STextarea, { props: { placeholder: 'Write text...' } })

    expect(wrapper.find('[placeholder="Write text..."]'))
  })
})
