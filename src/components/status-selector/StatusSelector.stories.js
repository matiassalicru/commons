import React from 'react'
// UI StatusSelector
import { StatusSelector } from './StatusSelector'

export default {
  title: 'Commons/StatusSelector',
  component: StatusSelector,
  args: {
    currentStatus: 'nueva',
    ableToEdit: true,
    width: 10,
    isInDesignStatusAllowed: true,
    isInReviewStatusAllowed: true,
    updateStatus: () => {},
  },
  argTypes: {
    currentStatus: {
      control: {
        type: 'select',
        options: ['nueva', 'en_proceso', 'en_revision', 'ajustes', 'estancada', 'finalizada'],
      },
    },
  },
}

const Template = args => (
  <div style={{ height: '50px' }}>
    <StatusSelector {...args} />
  </div>
)

export const STATUS_SELECTOR = Template.bind({})

STATUS_SELECTOR.storyName = 'Status selector'
