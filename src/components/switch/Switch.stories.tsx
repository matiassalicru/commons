import { Story, Meta } from '@storybook/react'
// UI Components
import { Switch } from './Switch'
import { SwitchProps } from './Switch.interface'

export default {
  title: 'Commons/Switch',
  component: Switch,
  args: {
    checked: false,
    onChange: () => null,
    name: 'inputName',
    disabled: false,
  },
} as Meta

const Template: Story<SwitchProps> = args => <Switch {...args} />

export const SWITCH = Template.bind({})

SWITCH.storyName = 'Switch'
