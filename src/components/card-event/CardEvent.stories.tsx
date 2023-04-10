import { Story, Meta } from '@storybook/react'
import moment from 'moment'

// UI Components
import { CardEvent } from './CardEvent'
import { CardEventProps } from './CardEvent.interface'

const customProps = {
  eventId: 1,
  eventTitle: 'Titulo Evento',
  startEvent: moment(new Date()).utc(),
  endEvent: moment(new Date()).utc(),
  iconName: 'times',
  iconColor: '#0094ca',
  iconSize: 14,
  backgroundIconSize: 18,
  backgroundColor: '#d9f4ff',
  onHoverBackgroundColor: '#0094ca',
  onHoverColor: '#d9f4ff',
  disabled: false,
  pointer: 'default',
  tooltipEvent: 'Tooltip Event Consumed',
  marginCardEvent: '',
  eventTooltip: 'Tooltip Event',
  isDateFormat: true,
  lang: 'en',
}
export default {
  title: 'Commons/GoogleCalendar',
  component: CardEvent,
  args: { ...customProps },
} as Meta

const Template: Story<CardEventProps> = args => (
  <div style={{ width: '280px' }}>
    <CardEvent {...args} />
  </div>
)

export const CARDEVENT = Template.bind({})

CARDEVENT.storyName = 'Card Event'
