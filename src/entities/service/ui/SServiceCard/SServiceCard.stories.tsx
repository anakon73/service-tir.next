import type { Meta, StoryObj } from '@storybook/vue3'
import { SServiceCard, type SServiceCardProps } from '.'

export default {
  title: 'Widgets/ServiceCard',
  component: SServiceCard,

  args: {
    name: 'Дезинфекция и озонирование автомобилей и автобусов',
    description: `
      Это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
      Ipsum является
    `,
    image: 'https://media.istockphoto.com/id/1287044692/photo/worker-washing-red-car-with-sponge-on-a-car-wash.jpg?s=612x612&w=0&k=20&c=_6WO9k1qkDub5CAEQgnORMduUoQJkU6w3jjVQTdTdwQ=',
  },

  argTypes: {
    image: { table: { disable: true } },
  },
} satisfies Meta<SServiceCardProps>

type Story = StoryObj<SServiceCardProps>

export const Default: Story = { name: 'SServiceCard' }
