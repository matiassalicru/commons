import { Story, Meta } from '@storybook/react'
import { NotificationsButtonProps } from './NotificationsButton.interface'
// UI Components
import { NotificationsButton } from './index'

export default {
  title: 'Commons/NotificationsButton',
  component: NotificationsButton,
  args: {
    notifications: {
      action: () => {
        console.log('Test 1 clicked')
      },
      badge: {
        label: '8',
        color: 'error',
      },
      show: true,
    },
  },
  argTypes: {
    variant: {},
  },
} as Meta

const Template: Story<NotificationsButtonProps> = args => <NotificationsButton {...args} />

export const NOTIFICATIONSBUTTON = Template.bind({})

NOTIFICATIONSBUTTON.storyName = 'Shortcut Button'
