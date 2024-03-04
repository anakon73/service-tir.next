import type { Meta, StoryObj } from '@storybook/vue3'
import { ServiceCard, type ServiceCardProps } from '.'

export default {
  title: 'Widgets/ServiceCard',
  component: ServiceCard,

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
} satisfies Meta<ServiceCardProps>

type Story = StoryObj<ServiceCardProps>

export const Default: Story = { name: 'ServiceCard' }
