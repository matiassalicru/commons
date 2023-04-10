import { Meta, Story } from '@storybook/react'
// UI Components
import { ProgressBar } from './ProgressBar'
// interface
import { ProgressBarProps } from './ProgressBar.interface'

const customProps = {
  margin: '0px 10px',
  height: 8,
  colorBaseBar: '#ededed',
  iconSize: 13,
  size: 14,
  title: `Today's progress`,
  titleSize: 11,
  titleVariant: 'none',
  chargedProgress: 32,
  chargeBarContent: 'charge',
  suggestedBarContent: '',
  suggestionProgress: 0,
  textCursor: '',
  percentageProgress: '50%',
  emptyHoursContent: '',
}

export default {
  title: 'Commons/ProgressBar',
  component: ProgressBar,
  args: { ...customProps },
} as Meta

const Template: Story<ProgressBarProps> = args => (
  <div style={{ width: '170px' }}>
    <ProgressBar {...args} />
  </div>
)

export const BARPROGRESS = Template.bind({})

BARPROGRESS.storyName = 'progress bar'
