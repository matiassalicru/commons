import { fireEvent, render } from '@testing-library/react'
import { RemainingStatus } from '.'

const setup = (mock = {}) => render(<RemainingStatus {...mock} />)

describe('<RemainingStatus />', () => {
  test('Should component render correctly', () => {
    const { container } = setup({
      setStatus: jest.fn(),
      statusList: ['nueva', 'en_proceso'],
      boxWidth: 30,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should component render correctly', () => {
    const setStatusMock = jest.fn()
    const { getByText } = setup({
      setStatus: setStatusMock,
      statusList: ['nueva', 'en_proceso'],
    })

    const status = getByText('globals:n')

    fireEvent.click(status)

    expect(setStatusMock).toHaveBeenCalled()
  })
})
