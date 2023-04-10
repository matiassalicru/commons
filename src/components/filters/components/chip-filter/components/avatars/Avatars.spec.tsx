import { render } from '@testing-library/react'

import { Avatars } from './Avatars'

const setup = (mock = {}) => render(<Avatars {...mock} />)

describe('<Avatars />', () => {
  test('Should match with the snapshot', () => {
    const { container } = setup({
      data: [
        {
          id: 'userId_1',
          picture: null,
          remainingHours: '',
          firstName: 'Dwigth',
          lastName: 'Schrute',
          roleId: 'Collaborator',
          leaves: [],
        },
      ],
    })

    expect(container).toBeInTheDocument()
  })

  test('Should match with the snapshot with no data', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
