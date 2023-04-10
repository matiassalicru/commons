import { Story, Meta } from '@storybook/react'
// UI Components
import { CardIntegrations } from './CardIntegrations'
import { CardIntegrationsProps } from './CardIntegrations.interface'

const customProps = {
  type: 'google_calendar',
  title: 'Google Calendar',
  description:
    'Keep track of your scheduled meetings and events from Calendar in COR so you can viewKeep track of your scheduled meetings and events from Calendar in COR so you can view',
  onConnect: () => undefined,
  isLoading: false,
}
export default {
  title: 'Commons/CardIntegrations',
  component: CardIntegrations,
  args: { ...customProps },
} as Meta

const Template: Story<CardIntegrationsProps> = args => <CardIntegrations {...args} />

export const CARDINTEGRATIONS = Template.bind({})

CARDINTEGRATIONS.storyName = 'Card Integrations'
