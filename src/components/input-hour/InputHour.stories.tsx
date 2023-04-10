import { Story, Meta } from '@storybook/react'
import { InputHourProps } from './InputHour.interface'
// UI Components
import { InputHour } from './index'

export default {
  title: 'Commons/InputHour',
  component: InputHour,
  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    variant: {
      enableDeleteHour: {
        type: 'select',
        options: [true, false],
      },
      enableEditHour: {
        type: 'select',
        options: [true, false],
      },
      enabledDay: {
        type: 'select',
        options: [true, false],
      },
      sgEnableEditHour: {
        type: 'select',
        options: [true, false],
      },
      sgEnableDeleteHour: {
        type: 'select',
        options: [true, false],
      },
      chargeEnabled: {
        type: 'select',
        options: [true, false],
      },
      enableEstimateButton: {
        type: 'select',
        options: [true, false],
      },
      sgEnable: {
        type: 'select',
        options: [true, false],
      },
      estimateEnabled: {
        type: 'select',
        options: [true, false],
      },
      onlySuggestion: {
        type: 'select',
        options: [true, false],
      },
      noAnimation: {
        type: 'select',
        options: [true, false],
      },
      withPointer: {
        type: 'select',
        options: [true, false],
      },
      grayLogo: {
        type: 'select',
        options: [true, false],
      },
      iconColor: {
        type: 'radio',
        options: ['white', 'black'],
      },
      iconCommentsEnabled: {
        type: 'select',
        options: [true, false],
      },
    },
  },
} as Meta

const TemplateDefault: Story<InputHourProps> = args => <InputHour {...args} />
const TemplateCharged: Story<InputHourProps> = args => <InputHour {...args} />
const TemplateSuggested: Story<InputHourProps> = args => <InputHour {...args} />
const TemplateEstimated: Story<InputHourProps> = args => <InputHour {...args} />

export const INPUTHOUR = TemplateDefault.bind({})
export const INPUTHOURCHARGED = TemplateCharged.bind({})
export const INPUTHOURSUGGESTED = TemplateSuggested.bind({})
export const INPUTHOURESTIMATED = TemplateEstimated.bind({})

INPUTHOUR.args = {
  hourLoad: 0,
  minuteLoad: 0,
  sgEnable: true,
  estimateEnabled: true,
  chargeEnabled: true,
  onlySuggestion: false,
  handleClickCheckHour: () => undefined,
  handleDeleteHour: () => undefined,
  enableDeleteHour: true,
  enableEditHour: true,
  enabledDay: true,
  sgHourLoad: 1,
  sgMinuteLoad: 0,
  sgEnableEditHour: true,
  sgEnableDeleteHour: true,
  sgHandleDeleteHour: () => undefined,
  sgHandleClickCheckHour: () => undefined,
  size: 19,
  iconSize: 10,
  iconColor: 'white',
  gap: 20,
  fontSize: 13,
  space: 5,
  contextInfo: 'storybook',
  content: 'Storybook',
  tooltipPlace: 'top',
  enableEstimateButton: true,
  variant: true,
  iconSuggestionSize: 0.9,
  grayLogo: false,
  swapPlace: false,
  withPointer: false,
  enabledComments: false,
  tooltipButtonComments: 'Comments Button',
  iconComments: 'comments-filled',
  iconCommentsEnabled: false,
}

INPUTHOURCHARGED.args = {
  ...INPUTHOUR.args,
  sgEnable: false,
  estimateEnabled: false,
  chargeEnabled: true,
}
INPUTHOURSUGGESTED.args = {
  ...INPUTHOUR.args,
  sgEnable: true,
  estimateEnabled: false,
  chargeEnabled: false,
  sgHourLoad: 1,
}
INPUTHOURESTIMATED.args = {
  ...INPUTHOUR.args,
  sgEnable: false,
  estimateEnabled: true,
  chargeEnabled: false,
}

INPUTHOUR.storyName = 'Input Hour'
INPUTHOURCHARGED.storyName = 'Input Hour only charged'
INPUTHOURSUGGESTED.storyName = 'Input Hour only suggestion'
INPUTHOURESTIMATED.storyName = 'Input Hour only estimated'
