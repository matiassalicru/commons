import { Story, Meta } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { InputHourButton } from '../input-hour-button/InputHourButton'
import { InputHourGroupButtonProps } from './InputHourGroupButton.interface'
// UI Components
import { InputHourGroupButton } from './InputHourGroupButton'

export default {
  title: 'Commons/InputHourGroupButton',
  component: InputHourGroupButton,
  subcomponents: { InputHourButton },
} as Meta

const TemplateDefault: Story<InputHourGroupButtonProps> = args => <InputHourGroupButton {...args} />
export const INPUTHOURGROUPBUTTON = TemplateDefault.bind({})
export const INPUTHOURGROUPBUTTONWITHSUGGESTION = TemplateDefault.bind({})

INPUTHOURGROUPBUTTON.args = {
  fontSize: 14,
  handleSelectedInput: ({ hour, minute, isSuggested }) => {
    action('click')(`${hour} ${minute} ${isSuggested}`)
  },
  suggestion: undefined,
  reset: 0,
}

INPUTHOURGROUPBUTTONWITHSUGGESTION.args = {
  fontSize: 14,
  handleSelectedInput: ({ hour, minute, isSuggested }) => {
    action('click')(`${hour} ${minute} ${isSuggested}`)
  },
  suggestion: { hour: 2, minute: 13 },
  reset: 0,
}

INPUTHOURGROUPBUTTON.storyName = 'Input Hour Button'
INPUTHOURGROUPBUTTONWITHSUGGESTION.storyName = 'Input Hour Button with suggestion'
