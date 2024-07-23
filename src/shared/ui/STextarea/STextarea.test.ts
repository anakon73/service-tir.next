import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { STextarea } from '.'

describe('sTextarea', () => {
  it('should render component', () => {
    const wrapper = mount(STextarea)

    expect(wrapper.element instanceof HTMLTextAreaElement).toBeTruthy()
  })

  it('should add placeholder to textarea', () => {
    const wrapper = mount(STextarea, { props: { placeholder: 'Write text...' } })

    expect(wrapper.find('[placeholder="Write text..."]'))
  })
})
