import { Story, Meta } from '@storybook/react'
import { CorAcademy } from '@projectcor/logos/lib'
import { ProfileButtonProps } from './ProfileButton.interface'
// UI Components
import { ProfileButton } from './index'

export default {
  title: 'Commons/ProfileButton',
  component: ProfileButton,
  args: {
    user: {
      firstName: 'Agustín',
      lastName: 'Díaz',
      picture: '',
      role: 'Colaborador',
    },
    options: [
      {
        label: 'Perfil',
        icon: 'User',
        action: () => {
          return true
        },
        show: true,
      },
      {
        label: 'Calendario',
        icon: 'Calendar',
        action: () => {
          return true
        },
        show: true,
      },
      {
        label: 'Configuraciones',
        icon: 'Settings',
        action: () => {
          return true
        },
        show: true,
      },
      {
        label: 'Notificaciones',
        icon: 'Notification',
        action: () => {
          return true
        },
        show: true,
      },
      {
        label: 'Novedades',
        icon: 'Megaphone',
        badge: {
          label: '8',
          color: 'error',
        },
        action: () => {
          return true
        },
        show: true,
      },
      {
        labelComponent: CorAcademy,
        icon: 'LogoIconCor',
        action: () => {
          return true
        },
        chip: {
          label: 'Nuevo',
          color: 'error',
        },
        show: true,
        divider: true,
      },
      {
        label: 'Español',
        icon: 'Globe',
        options: [
          {
            label: 'Español',
            action: () => {
              return true
            },
            dataRobotId: 'test-1',
          },
          {
            label: 'Inglés',
            action: () => {
              return true
            },
            dataRobotId: 'test-2',
          },
          {
            label: 'Portugués',
            action: () => {
              return true
            },
            dataRobotId: 'test-3',
          },
        ],
        action: () => {
          return true
        },
        show: true,
      },
      {
        label: 'Salir',
        icon: 'SignOut',
        action: () => {
          return true
        },
        show: true,
      },
    ],
  },
  argTypes: {
    variant: {},
  },
} as Meta

const Template: Story<ProfileButtonProps> = args => <ProfileButton {...args} />

export const PROFILEBUTTON = Template.bind({})

PROFILEBUTTON.storyName = 'Profile Button'
