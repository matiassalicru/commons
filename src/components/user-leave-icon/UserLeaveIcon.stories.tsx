import { Story, Meta } from '@storybook/react'
// UI Components
import { UserLeaveIcon } from './UserLeaveIcon'
import { UserLeaveIconProps } from './UserLeaveIcon.interface'

export default {
  title: 'Commons/UserLeaveIcon',
  component: UserLeaveIcon,
  args: {
    typeCode: 'UL1',
    height: '20px',
    width: '20px',
  },
} as Meta

const Template: Story<UserLeaveIconProps> = args => <UserLeaveIcon {...args} />

export const USER_LEAVE_ICON = Template.bind({})

USER_LEAVE_ICON.storyName = 'User leave icon'
