import { Story, Meta } from '@storybook/react'
import { ShortcutButtonProps } from './ShortcutButton.interface'
// UI Components
import { ShortcutButton } from './index'

export default {
  title: 'Commons/ShortcutButton',
  component: ShortcutButton,
  args: {
    items: [
      {
        label: 'Cliente',
        icon: 'Contact',
        action: () => {
          console.log('Test 1 clicked')
        },
        show: true,
      },
      {
        label: 'Proyecto',
        icon: 'FileContract',
        action: () => {
          console.log('Test 2 clicked')
        },
        show: true,
      },
      {
        label: 'Contacto',
        icon: 'UserTeam',
        action: () => {
          console.log('Test 3 clicked')
        },
        show: true,
      },
    ],
  },
  argTypes: {
    variant: {},
  },
} as Meta

const Template: Story<ShortcutButtonProps> = args => <ShortcutButton {...args} />

export const SHORTCUTBUTTON = Template.bind({})

SHORTCUTBUTTON.storyName = 'Shortcut Button'
