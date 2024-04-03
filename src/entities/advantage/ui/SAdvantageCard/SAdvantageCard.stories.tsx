import type { Meta, StoryObj } from '@storybook/vue3'
import { SAdvantageCard, type SAdvantageCardProps } from '.'

const meta = {
  title: 'Entities/Advantage/UI/SAdvantageCard',
  component: SAdvantageCard,
} satisfies Meta<SAdvantageCardProps>

export default meta

type Story = StoryObj<SAdvantageCardProps>

export const Default: Story = {
  name: 'SAdvantageCard',
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
