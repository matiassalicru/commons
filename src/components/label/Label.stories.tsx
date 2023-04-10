import { Story, Meta } from '@storybook/react'
// UI Components
import { Label } from './index'
import { LabelProps } from './Label.interface'

export default {
  title: 'Commons/Label',
  component: Label,
  args: {
    children: 'Label text',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'danger'],
      },
    },
  },
} as Meta

const Template: Story<LabelProps> = args => <Label {...args} />

export const LABEL_DANGER = Template.bind({})
LABEL_DANGER.args = {
  variant: 'danger',
}

export const LABEL_PRIMARY = Template.bind({})
LABEL_PRIMARY.args = {
  variant: 'primary',
}

LABEL_DANGER.storyName = 'Label danger'
LABEL_PRIMARY.storyName = 'Label primary'
