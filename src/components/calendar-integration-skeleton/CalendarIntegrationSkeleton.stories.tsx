import { Story, Meta } from '@storybook/react'
// UI Components
import { CalendarIntegrationSkeleton } from './index'
import { CalendarIntegrationSkeletonProps } from './CalendarIntegrationSkeleton.interface'

export default {
  title: 'Commons/GoogleCalendar',
  component: CalendarIntegrationSkeleton,
  args: {
    quantity: 1,
  },
} as Meta

const Template: Story<CalendarIntegrationSkeletonProps> = args => <CalendarIntegrationSkeleton {...args} />

export const MODAL_CALENDAR_SKELETON = Template.bind({})

MODAL_CALENDAR_SKELETON.storyName = 'Modal calendar skeleton'
