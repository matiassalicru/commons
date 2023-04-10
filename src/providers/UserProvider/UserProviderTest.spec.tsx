import { render } from '@testing-library/react'
import { UserProvider } from './UserProvider'
import { UserProviderMock } from './UserProviderMock'

const userMock = {
  permissions: {
    gantt: { view: true, edit: false, create: false, delete: false },
    hours: { view: true, edit: true, create: true, delete: true },
    notifications: { view: true, edit: true, create: false, delete: false },
    proyectos: { archive: false, view: true, edit: false, create: false, delete: false },
    tasks: { archive: false, view: true, edit: true, create: true, delete: true },
  },
  info: {
    company: 'COR',
    company_id: 60234,
    daily_hours: 0,
    email: 'charly@projectcor.com',
    first_name: 'Carlos',
    id: 3234295,
    lang: 'es',
    last_name: 'charly',
    monthly_hours: 0,
    picture: 'https://user-images',
    remaining_hours: 0,
    role: 'Collaborator',
    type: '1',
    user_type: 'internal',
  },
}

const setup = () =>
  render(
    <UserProvider user={userMock}>
      <div />
    </UserProvider>
  )

describe('<UserProvider />', () => {
  test('Should be in the document', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })
})

describe('UserProvider implementation', () => {
  test('Should match user data', () => {
    const { container } = render(
      <UserProvider user={userMock}>
        <UserProviderMock />
      </UserProvider>
    )
    expect(container).toBeInTheDocument()
  })
})
