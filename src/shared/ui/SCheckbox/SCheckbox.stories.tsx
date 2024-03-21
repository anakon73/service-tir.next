import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'

import {
  SCheckbox,
  type SCheckboxEmits,
  type SCheckboxProps,
  type SCheckboxSlots,
} from '.'

export default {
  title: 'Shared/UI/SCheckbox',
  // @ts-expect-error Storybook bug for generic components
  component: SCheckbox,
  tags: ['autodocs'],
  args: {
    modelValue: false,
    subCheckbox: false,
  },
  argTypes: {
    'modelValue': { control: 'boolean' },
    'subCheckbox': { control: 'boolean' },

    'id': { table: { disable: true } },
    'class': { table: { disable: true } },
    'rootClass': { table: { disable: true } },
    'value': { table: { disable: true } },

    'update:modelValue': { table: { disable: true } },

    'default': { control: 'text' },
  },
} satisfies Meta<SCheckboxProps<boolean, false> & SCheckboxEmits<false> & SCheckboxSlots>

type Story = StoryObj<typeof SCheckbox>

export const Default: Story = {}

export const SubCheckbox: Story = { args: { SubCheckbox: true } }

export const WithTitle: Story = {
  args: {
    default: 'Comments',
  },
}

export const ArrayModelValue: Story = {
  render: () => ({
    setup() {
      const plans = [
        { id: 'small', name: 'Small' },
        { id: 'medium', name: 'Medium' },
        { id: 'large', name: 'Large' },
      ] as const

      const selected = ref<typeof plans[number]['id'][]>([plans[0].id])

      return () => (
        <>
          <div class="mb-4 flex flex-col gap-3">
            {plans.map((plan) => (
              <SCheckbox
                  id={plan.id}
                  key={plan.id}
                  name="plan"
                  v-model={selected.value}
                  v-slots={{
                    default: () => plan.name,
                  }}
                  value={plan.id}
              />
            ))}
          </div>

          {selected.value.join(', ')}
        </>
      )
    },
  }),
}
