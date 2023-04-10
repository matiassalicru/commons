import { Story, Meta } from '@storybook/react'
// UI Components
import { Tooltip } from './Tooltip'
import { TooltipProps } from './Tooltip.interface'

export default {
  title: 'Commons/Tooltip',
  component: Tooltip,
  args: {
    delay: 500,
    place: 'right',
    maxWidth: 300,
    zIndex: 100,
    content: 'Custom Tooltip',
    icon: 'times',
  },
} as Meta

const Template: Story<TooltipProps> = args => <Tooltip {...args} />

export const TOOLTIP = Template.bind({})

TOOLTIP.storyName = 'Tooltip'
