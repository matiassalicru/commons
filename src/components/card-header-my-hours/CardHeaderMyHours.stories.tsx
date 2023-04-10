import { ComponentMeta, ComponentStory } from '@storybook/react'
import { CardHeaderMyHours } from './CardHeaderMyHours'

const customProps = {
  infoHour: '4h 30m',
  titleSuggestion: 'Suggestion',
  titleTracked: 'Tracked',
  tooltipMessage: 'This is the time you worked today compared to your daily hours.',
  userInfo: 0,
  exceedsDailyHour: false,
  showIndicator: true,
  indicatorColor: '#EC6F13',
  showColumns: false,
  sizeTitleTracked: '112px',
  sizeTitleSuggestion: '145px',
  tooltipSuggestion: 'This is a tooltip message',
  tooltipRedirect: 'this is link',
  urlRedirect: 'https://cor.cor-beta.com',
}
export default {
  title: 'Commons/CardHeaderMyHours',
  component: CardHeaderMyHours,
  args: { ...customProps },
} as ComponentMeta<typeof CardHeaderMyHours>

const Template: ComponentStory<typeof CardHeaderMyHours> = args => (
  <div style={{ width: '580px' }}>
    <CardHeaderMyHours {...args} />
  </div>
)

export const CARDHEADERMYHOURS = Template.bind({})

CARDHEADERMYHOURS.storyName = 'Card my hours'

CARDHEADERMYHOURS.argTypes = {
  showColumns: {
    type: 'boolean',
  },
  exceedsDailyHour: {
    type: 'boolean',
  },
  showIndicator: {
    type: 'boolean',
  },
}
