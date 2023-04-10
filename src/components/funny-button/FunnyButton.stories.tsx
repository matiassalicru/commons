import { Story, Meta } from '@storybook/react'
// UI Components
import { FunnyButton } from './index'
// Interface
import { FunnyButtonProps, Size, Place } from './FunnyButton.inteface'

const customProps: FunnyButtonProps = {
  active: true,
  size: Size.small,
  onClikAction: () => {
    // default function
  },
  icon: 'paper-plane',
  withTooltip: true,
  wordingTooltip: 'Im funny button',
  forTooltip: 'funny-button',
  place: Place.bottom,
}

export default {
  title: 'Commons/FunnyButton',
  component: FunnyButton,
  args: { ...customProps },
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Size,
      },
    },
  },
} as Meta

const Template: Story<FunnyButtonProps> = args => <FunnyButton {...args} />

export const FUNNY_BUTTON = Template.bind({})

FUNNY_BUTTON.storyName = 'Funny button'
