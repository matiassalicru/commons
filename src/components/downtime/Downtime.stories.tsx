import { Story, Meta } from '@storybook/react'
// UI Components
import { Downtime } from '.'
import { DowntimeProps } from './Downtime.interface'

export default {
  title: 'Commons/Sections/Downtime',
  component: Downtime,
  args: {
    illustration: 'Downtime',
    title: 'Ups!',
    primaryText: '',
    secondaryText: 'Mensaje de error',
    footer: 'Footer',
  },
  argTypes: {
    illustration: {
      control: { type: 'select', options: ['Downtime', 'OfficeWork', 'OpenMap', 'Padlock'] },
    },
  },
} as Meta

const Template: Story<DowntimeProps> = args => <Downtime {...args} />

export const DOWNTIME_COMPONENT = Template.bind({})

DOWNTIME_COMPONENT.storyName = 'Downtime'
