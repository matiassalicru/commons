import { Meta, Story } from '@storybook/react'
// UI Components
import { BarProgress } from './BarProgress'
// Interface
import { BarProgressProp } from './BarProgress.interface'

const customProps: BarProgressProp = {
  progress: 50,
  colorPrimaryBar: '#333333',
  height: 5,
  borderRadius: 50,
  colorBaseBar: '#ededed',
}

export default {
  title: 'Commons/BarProgress',
  component: BarProgress,
  args: { ...customProps },
  argTypes: {
    colorPrimaryBar: { control: 'color' },
    colorBaseBar: { control: 'color' },
  },
} as Meta

const Template: Story<BarProgressProp> = args => <BarProgress {...args} />

export const BARPROGRESS = Template.bind({})

BARPROGRESS.storyName = 'Bar progress'
