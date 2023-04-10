import { Story, Meta } from '@storybook/react'
// UI Components
import { UserRow } from './UserRow'
// Types
import { UserRowTypes } from './UserRow.interface'

export default {
  title: 'Commons/UserRow',
  component: UserRow,
  args: {
    data: {
      id: 1234,
      roleId: 4,
      picture: null,
      remainingHours: 0,
      firstName: 'Dwigth',
      lastName: 'Schrute',
      email: 'prueba@gmail.com',
    },
    onClick: () => null,
    isSelected: false,
  },
  argTypes: {},
} as Meta

const Template: Story<UserRowTypes> = args => <UserRow {...args} />

export const USERROW = Template.bind({})

USERROW.storyName = 'User row'
