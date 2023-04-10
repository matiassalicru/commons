import { Story, Meta } from '@storybook/react'

// UI Components
import { Dropdown } from './Dropdown'

// Interface
import { DropdownTypes } from './Dropdown.interface'

const itemsMock = [
  {
    id: 'priority',
    type: 'text',
    icon: 'exclamation-triangle',
    data: [],
  },
  {
    id: 'deadline',
    type: 'text',
    icon: 'calendar-alt',
    data: [],
  },
  {
    id: 'collaborators',
    type: 'text',
    icon: 'user',
    data: [],
  },
]

export default {
  title: 'Commons/Dropdown',
  component: Dropdown,
  args: {
    items: itemsMock,
    onClose: () => null,
    positions: { x: 200, y: 10 },
    handleSelectItem: item => console.info(`Selected item: ${item?.id}`),
  },
  argTypes: {},
} as Meta

const Template: Story<DropdownTypes> = args => <Dropdown {...args} />

export const DROPDOWN = Template.bind({})

DROPDOWN.storyName = 'Dropdown'
