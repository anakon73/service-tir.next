import type { Meta, StoryObj } from '@storybook/vue3'
import type { FunctionalComponent } from 'vue'
import { ArrowRightIcon } from '@heroicons/vue/20/solid'

import { Size, Variant } from './types'
import { SButton } from '.'

const text = 'Button text'

export default {
  title: 'Shared/UI/SButton',
  component: SButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: Variant },
    size: { control: 'select', options: Size },
    icon: { control: 'boolean' },

    class: { table: { disable: true } },
    as: { table: { disable: true } },
    type: { table: { disable: true } },
    default: { table: { disable: true } },
    append: { table: { disable: true } },
  },
  args: {
    variant: 'primary',
    size: 'base',
    icon: false,
    default: text,
  },
} satisfies Meta<typeof SButton>

type Story = StoryObj<typeof SButton>

export const Primary: Story = {}

export const Light: Story = { args: { variant: 'light' } }

export const White: Story = { args: { variant: 'white' } }

export const Link: Story = {
  render: () => () => (
    <div class="bg-slate-600 p-2">
      <SButton
          variant='link'
      >
        {text}
      </SButton>
    </div>
  ),
}

export const LinkWhite: Story = { args: { variant: 'link-white' } }

const ButtonsWrapper: FunctionalComponent = (_, { slots }) => (
  <div class="flex items-center justify-center gap-8 rounded-md bg-slate-200 p-1" >
    {slots.default?.()}
  </div>
)

export const BaseRow: Story = {
  render: () => () => (
    <ButtonsWrapper>
      {Variant.map((variant) => (
        <SButton
            key={variant}
            variant={variant}
        >
          {text}
        </SButton>
      ))}
    </ButtonsWrapper>
  ),
}

export const LargeRow: Story = {
  render: () => () => (
    <ButtonsWrapper>
      {Variant.map((variant) => (
        <SButton
            key={variant}
            size='lg'
            variant={variant}
        >
          {text}
        </SButton>
      ))}
    </ButtonsWrapper>
  ),
}

export const AppendIconRow: Story = {
  render: () => () => (
    <ButtonsWrapper>
      {Variant.map((variant) => (
        <SButton
            key={variant}
            variant={variant}
        >
          {{
            default: () => text,
            append: () => (
              <ArrowRightIcon
                  class="size-3"
              />
            ),
          }}

        </SButton>
      ))}
    </ButtonsWrapper>
  ),
}
