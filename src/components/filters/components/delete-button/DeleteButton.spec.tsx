import { fireEvent, render } from '@testing-library/react'
import { DeleteButton } from './DeleteButton'
import { FilterContext } from '../../Context'

const setup = (mock = {}, trackEvent = jest.fn()) =>
  render(
    <FilterContext.Provider value={{ trackEvent }}>
      <DeleteButton onClick={() => true} {...mock} />
    </FilterContext.Provider>
  )

describe('<DeleteButton />', () => {
  test('Should call onClick function when button is clicked', () => {
    const trackEventMock = jest.fn()
    const onClickMock = jest.fn()
    const { getByRole } = setup(
      {
        onClick: onClickMock,
      },
      trackEventMock
    )

    const button = getByRole('button')

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
    expect(trackEventMock).toHaveBeenCalled()
  })
})
