import { render, fireEvent } from '@testing-library/react'

import { TitleContainer } from './TitleContainer'

const setup = (mock = {}) => render(<TitleContainer title="" onClose={() => true} onGoBack={() => true} {...mock} />)

describe('<TitleContainer/>', () => {
  test('should call a close function when click on back button or close button', () => {
    const onCloseMock = jest.fn()
    const onGoBackMock = jest.fn()

    const { getByTestId } = setup({
      showBackButton: true,
      onClose: onCloseMock,
      onGoBack: onGoBackMock,
    })

    const backTitleButton = getByTestId('go back title-button')
    const closeButton = getByTestId('close button')

    fireEvent.click(closeButton)
    fireEvent.click(backTitleButton)

    expect(onCloseMock).toHaveBeenCalled()
    expect(onGoBackMock).toHaveBeenCalled()
  })
})
