import { Story, Meta } from '@storybook/react'
import { TrackHoursButtonProps } from './TrackHoursButton.interface'
// UI Components
import { TrackHoursButton } from './index'

export default {
  title: 'Commons/TrackHoursButton',
  component: TrackHoursButton,
  args: {},
  argTypes: {
    variant: {},
  },
} as Meta

const Template: Story<TrackHoursButtonProps> = args => <TrackHoursButton {...args} />

export const TRACKHOURSBUTTON = Template.bind({})

TRACKHOURSBUTTON.storyName = 'Track Hours Button'
