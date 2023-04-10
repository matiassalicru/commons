import { render } from '@testing-library/react'
import { CorAcademy } from '@projectcor/logos/lib'
import { ProfileButton } from './ProfileButton'

const setup = (mock = {}) => render(<ProfileButton {...mock} />)

describe('<ProfileButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup({
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
          chip: {
            label: 'Nuevo',
            color: 'error',
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
          divider: true,
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
            },
            {
              label: 'Inglés',
              action: () => {
                return true
              },
            },
            {
              label: 'Portugués',
              action: () => {
                return true
              },
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
    })

    expect(container).toBeInTheDocument()
  })
})
