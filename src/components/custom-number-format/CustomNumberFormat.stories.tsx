import { Story, Meta } from '@storybook/react'
// UI Components
import {
  CustomNumberFormat,
  THOUSAND_SEPARATOR,
  DECIMAL_SEPARATOR,
  MAX_RATE,
  DECIMAL_SCALE,
} from './CustomNumberFormat'
import { CustomNumberFormatProps } from './CustomNumberFormat.interface'

let myStoryValue = ''

export default {
  title: 'Commons/CustomNumberFormat',
  component: CustomNumberFormat,
  args: {
    fullWidth: false,
    variant: 'outlined',
    spellCheck: false,
    label: 'label',
    name: '',
    value: myStoryValue,
    InputLabelProps: {
      shrink: true,
    },
    onChangeValue: floatValue => {
      console.log('This is your value', floatValue)
      myStoryValue = floatValue
    },
    onFocus: () => null,
    onBlur: () => null,
    inputValidation: value => {
      return value <= MAX_RATE
    },
    helperText: '',
    placeholder: 'Write Something',
    thousandSeparator: THOUSAND_SEPARATOR,
    decimalSeparator: DECIMAL_SEPARATOR,
    maxValueAdmited: DECIMAL_SCALE,
    disabled: false,
    error: false,
    inputProps: { 'data-robot-id': 'robot-id' },
  },
  argTypes: {
    fullWidth: {
      control: {
        type: 'select',
        options: [true, false],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['filled', 'outlined', 'standard'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

const Template: Story<CustomNumberFormatProps> = args => <CustomNumberFormat {...args} />

export const CUSTOM_NUMBER_FORMAT = Template.bind({})

CUSTOM_NUMBER_FORMAT.storyName = 'Custom Number Format (input mask)'
