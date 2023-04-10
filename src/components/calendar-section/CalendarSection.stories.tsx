import { Story, Meta } from '@storybook/react'
// UI Components
import { CalendarSection } from './CalendarSection'
import { CalendarSectionProps } from './CalendarSection.interface'

const customProps = {
  title: 'Mi Calendario',
  calendarName: [
    {
      name: 'test@projectcor.com',
      id: 1,
    },
  ],
}

export default {
  title: 'Commons/GoogleCalendar',
  component: CalendarSection,
  args: { ...customProps },
} as Meta

const Template: Story<CalendarSectionProps> = args => (
  <div style={{ width: '280px' }}>
    <CalendarSection {...args} />
  </div>
)

export const CALENDAR_SECTION = Template.bind({})
CALENDAR_SECTION.storyName = 'Calendar Section'
