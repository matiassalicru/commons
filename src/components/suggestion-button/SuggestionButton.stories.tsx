import { Story, Meta } from '@storybook/react'
// UI Components
import { SuggestionButton } from './index'
import { positionProps, SuggestionButtonProps } from './SuggestionButton.interface'

export default {
  title: 'commons/Suggestion Button',
  component: SuggestionButton,
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: positionProps,
      },
    },
  },
} as Meta

const Template: Story<SuggestionButtonProps> = args => (
  <SuggestionButton {...args}>
    <input
      type="buttom"
      style={{
        width: '82px',
        marginTop: '80px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        minHeight: '27px',
        borderRadius: '30px',
      }}
    />
  </SuggestionButton>
)

export const SUGGESTION_BUTTON = Template.bind({})

export const SUGGESTION_BUTTON_IDLE = Template.bind({})

SUGGESTION_BUTTON.storyName = 'Suggestion Button'
SUGGESTION_BUTTON_IDLE.storyName = 'Suggestion Button No Animation'

SUGGESTION_BUTTON.args = {
  position: positionProps.rightUp,
  onClick: () => undefined,
  variant: '',
  size: 19,
  enable: true,
  content: 'Storybook',
  place: 'top',
  iconSize: 1,
  noAnimation: false,
  grayLogo: false,
  withPointer: false,
}

SUGGESTION_BUTTON_IDLE.args = {
  ...SUGGESTION_BUTTON.args,
  noAnimation: true,
}
