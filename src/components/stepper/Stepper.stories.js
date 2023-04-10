import React from 'react'
// UI StatusSelector
import { Stepper } from './Stepper'

const translations = {
  buttonBack: 'Back',
  buttonNext: 'Next',
}

export default {
  title: 'Commons/Stepper',
  component: Stepper,
  args: {
    translations: translations,
    steps: ['First step', 'Second step', 'Third step'],
  },
}

const Template = args => <Stepper {...args} />

export const STEPPER = Template.bind({})

STEPPER.storyName = 'Stepper'
