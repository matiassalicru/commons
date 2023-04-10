import { Story, Meta } from '@storybook/react'
// UI Components
import { ButtonSend } from './ButtonSend'
// Interface
import { ButtonSendProps } from './ButtonSend.interface'

const customProps: ButtonSendProps = {
  sending: true,
  handleClick: () => {
    // Click action default button
  },
  isDisabed: false,
}

export default {
  title: 'Commons/ButtonSend',
  component: ButtonSend,
  args: {
    ...customProps,
  },
} as Meta

const Template: Story<ButtonSendProps> = args => <ButtonSend {...args} />

export const BUTTON_SEND = Template.bind({})

BUTTON_SEND.storyName = 'Button send'
