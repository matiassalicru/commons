import { Story, Meta } from '@storybook/react'
// UI Components
import { Checkbox } from './Checkbox'
import { CheckboxProps } from './Checkbox.interface'

export default {
  title: 'Commons/Checkbox',
  component: Checkbox,
  args: {
    checked: false,
    onChange: () => null,
    name: 'inputName',
  },
} as Meta

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const CHECKBOX = Template.bind({})

CHECKBOX.storyName = 'Checkbox'
