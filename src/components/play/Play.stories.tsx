import { Story, Meta } from '@storybook/react'
// UI Components
import { Play } from './Play'
import { PlayProps } from './Play.interface'

export default {
  title: 'Commons/Play',
  component: Play,
  args: {
    taskID: 362784,
    status: 'play',
    hasMargin: true,
    showTooltip: false,
    wordingTip: 'play',
    playVariant: 'filled',
    handleClick: () => {
      // default function
    },
    dataRobotId: 'commons-play',
  },
  argTypes: {
    status: {
      control: {
        type: 'select',
        options: ['stop', 'play'],
      },
    },
    playVariant: {
      control: {
        type: 'select',
        options: ['normal', 'filled'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
} as Meta

const Template: Story<PlayProps> = args => <Play {...args} />

export const PLAY = Template.bind({})

PLAY.storyName = 'Play button'
