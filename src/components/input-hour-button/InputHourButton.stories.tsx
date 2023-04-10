import { Story, Meta } from '@storybook/react'
import { InputHourButtonProps } from './InputHourButton.interface'
// UI Components
import { InputHourButton } from './index'

export default {
  title: 'Commons/InputHourButton',
  component: InputHourButton,
} as Meta

const TemplateDefault: Story<InputHourButtonProps> = args => <InputHourButton {...args} />

export const INPUTHOURBUTTON = TemplateDefault.bind({})

INPUTHOURBUTTON.args = {
  hour: 0,
  minute: 0,
  fontSize: 13,
  selected: false,
  changeMode: false,
}

INPUTHOURBUTTON.storyName = 'Input Hour Button'
