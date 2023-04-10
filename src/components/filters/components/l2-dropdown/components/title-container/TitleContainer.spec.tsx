/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import { render, fireEvent } from '@testing-library/react'

import { TitleContainer } from './TitleContainer'

const setup = (mock = {}) =>
  render(<TitleContainer title="" onClose={() => true} onGoBack={() => true} showBackButton {...mock} />)

describe('<TitleContainer/>', () => {
  test('should call a close function when click on back button or close button', () => {
    const onCloseMock = jest.fn()
    const onGoBackMock = jest.fn()

    const { getByLabelText } = setup({
      showBackButton: true,
      onClose: onCloseMock,
      onGoBack: onGoBackMock,
    })

    const backButton = getByLabelText('go back button')
    const closeButton = getByLabelText('close button')

    fireEvent.click(backButton)
    fireEvent.click(closeButton)

    expect(onCloseMock).toHaveBeenCalled()
    expect(onGoBackMock).toHaveBeenCalled()
  })
})
