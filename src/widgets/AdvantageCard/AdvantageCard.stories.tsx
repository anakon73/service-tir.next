import type { Meta, StoryObj } from '@storybook/vue3'
import { AdvantageCard, type AdvantageCardProps } from '.'

const meta = {
  title: 'Widgets/AdvantageCard',
  component: AdvantageCard,
} satisfies Meta<AdvantageCardProps>

export default meta

type Story = StoryObj<AdvantageCardProps>

export const Default: Story = {
  name: 'AdvantageCard',
  args: {
    name: 'Швидкість роботи',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
      ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
      amet etiam tincidunt.
    `,
    image: '🚀',
  },
}
