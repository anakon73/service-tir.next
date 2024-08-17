import type { Meta, StoryObj } from '@storybook/vue3'
import { makeServiceMock } from '@/shared/api/service/mock'
import { ServicesSwiper, type ServicesSwiperProps } from '.'

const list = Array.from({ length: 6 }, () => makeServiceMock())

const meta = {
  title: 'Widgets/ServicesSwiper',
  component: ServicesSwiper,
  args: { list },
  argTypes: { list: { table: { disable: true } } },
} satisfies Meta<ServicesSwiperProps>

export default meta

export const Default: StoryObj<typeof meta> = { name: 'ServicesSwiper' }
