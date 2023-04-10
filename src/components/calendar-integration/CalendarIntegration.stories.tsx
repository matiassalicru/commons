import { Story, Meta } from '@storybook/react'
// UI Components
import { CalendarIntegration } from './CalendarIntegration'
import { CalendarIntegrationProps } from './CalendarIntegration.interface'

const customProps = {
  language: 'es',
  showDaysAgo: 30,
  selected: '',
  pointData: [{ date: '' }],
  legend: 'Legend of calendar',
}

export default {
  title: 'Commons/GoogleCalendar',
  component: CalendarIntegration,
  args: { ...customProps },
} as Meta

const Template: Story<CalendarIntegrationProps> = args => <CalendarIntegration {...args} />

export const CALENDARINTEGRATION = Template.bind({})

CALENDARINTEGRATION.storyName = 'CalendarIntegration'
