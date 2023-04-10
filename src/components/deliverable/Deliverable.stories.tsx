import { Story, Meta } from '@storybook/react'
import { DeliverableProps, DeliverableStatus } from './Deliverable.interface'
// UI Components
import { DeliverableComponent } from './index'

export default {
  title: 'Commons/Deliverable',
  component: DeliverableComponent,
  argTypes: {
    deliverable: { control: { type: 'number', min: 1 } },
    simpleVersion: {
      control: { type: 'boolean' },
    },
    archived: {
      control: { type: 'boolean' },
    },
    tooltip: {
      control: { type: 'boolean' },
    },
    editing: {
      control: { type: 'boolean' },
    },
    deliverableStatus: {
      control: { type: 'select', options: [DeliverableStatus.CHILDREN, DeliverableStatus.COUNTER, null] },
    },
    loading: {
      control: { type: 'boolean' },
    },
  },
} as Meta

const Template: Story<DeliverableProps> = args => <DeliverableComponent {...args} />

export const DELIVERABLE = Template.bind({})
export const DELIVERABLESIMPLE = Template.bind({})
export const DELIVERABLETOOLTIP = Template.bind({})
export const DELIVERABLE_BIG_STATUS_COUNTER = Template.bind({})
export const DELIVERABLE_BIG_STATUS_CHILDREN = Template.bind({})
export const DELIVERABLE_SIMPLE_STATUS_COUNTER = Template.bind({})
export const DELIVERABLE_SIMPLE_STATUS_CHILDREN = Template.bind({})

DELIVERABLE.args = {
  deliverable: 1,
  handleUpdateTask: () => {
    // default function
  },
  handleCheckboxStatus: () => {
    // default function
  },
  onFinishEditing: () => {
    // default function
  },
  onStartEditing: () => {
    // default function
  },
  onInputFocus: () => {
    // default function
  },
  onInputBlur: () => {
    // default function
  },
  onCancel: () => {
    // default function
  },
  onInfoIconHover: () => {
    // default function
    console.log('onInfoIconHover')
  },
  onIconHover: () => {
    // default function
    console.log('onIconHover')
  },
  simpleVersion: false,
  deliverableStatus: undefined,
  iconText: 'Lorem ipsum dolor',
  switchIdentify: 'switchId',
}

DELIVERABLESIMPLE.args = {
  ...DELIVERABLE.args,
  simpleVersion: true,
}

DELIVERABLETOOLTIP.args = {
  ...DELIVERABLE.args,
  tooltip: true,
  simpleVersion: true,
}

DELIVERABLE_BIG_STATUS_COUNTER.args = {
  ...DELIVERABLE.args,
  deliverableStatus: DeliverableStatus.COUNTER,
  editable: true,
}

DELIVERABLE_BIG_STATUS_CHILDREN.args = {
  ...DELIVERABLE.args,
  deliverableStatus: DeliverableStatus.CHILDREN,
  editable: true,
}

DELIVERABLE_SIMPLE_STATUS_COUNTER.args = {
  ...DELIVERABLE.args,
  deliverableStatus: DeliverableStatus.COUNTER,
  editable: true,
  simpleVersion: true,
}

DELIVERABLE_SIMPLE_STATUS_CHILDREN.args = {
  ...DELIVERABLE.args,
  deliverableStatus: DeliverableStatus.CHILDREN,
  editable: true,
  simpleVersion: true,
}

DELIVERABLE.storyName = 'Deliverable Big Initial'
DELIVERABLE_BIG_STATUS_COUNTER.storyName = 'Deliverable Big Counter'
DELIVERABLE_BIG_STATUS_CHILDREN.storyName = 'Deliverable Big Children'
DELIVERABLE_SIMPLE_STATUS_COUNTER.storyName = 'Deliverable Simple Counter'
DELIVERABLE_SIMPLE_STATUS_CHILDREN.storyName = 'Deliverable Simple Children'
DELIVERABLESIMPLE.storyName = 'Deliverable Simple Version'
DELIVERABLETOOLTIP.storyName = 'Deliverable tooltip Version'
