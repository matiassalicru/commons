import { render, cleanup, fireEvent } from '@testing-library/react'
import { Button } from './Button'

const setup = (mock = {}) => render(<Button {...mock} />)

describe('<Button />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with different variations', () => {
    const variations = ['primary', 'secondary', 'white', 'danger']

    variations.forEach(variant => {
      const { container } = setup({
        variant,
      })

      expect(container).toBeInTheDocument()

      cleanup()
    })
  })

  test('Should be in the document with disabled property on true', () => {
    const { container } = setup({ disabled: true })

    expect(container).toBeInTheDocument()
  })

  test('When button is not disabled should call click action', () => {
    const buttonText = 'text'
    const onClickActionMock = jest.fn()
    const { getByText } = setup({ text: buttonText, onClickAction: onClickActionMock })

    const button = getByText(buttonText)

    fireEvent.click(button)

    expect(onClickActionMock).toHaveBeenCalled()
  })

  test('When button is disabled should not call click action', () => {
    const buttonText = 'text'
    const onClickActionMock = jest.fn()
    const { getByText } = setup({ disabled: true, text: buttonText, onClickAction: onClickActionMock })

    const button = getByText(buttonText)

    fireEvent.click(button)

    expect(onClickActionMock).toHaveBeenCalledTimes(0)
  })
})
