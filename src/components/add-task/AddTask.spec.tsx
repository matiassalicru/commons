import { fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// UI Component
import { AddTask } from './AddTask'

// Constants
import { KEY_ENTER } from '../../constants'

const setup = (mock = {}) =>
  render(<AddTask onSubmit={() => true} trackEvent={() => true} handleMaxLengthInputError={() => true} {...mock} />)

describe('<AddTask />', () => {
  test('Should block input when max length is complete', () => {
    const { getByPlaceholderText } = setup({
      maxLength: 4,
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement

    userEvent.type(input, '12345')

    expect(input.value).toBe('1234')
  })

  test('Should call handleMaxLengthInputError when input value to be mayor to max length', () => {
    const handleMaxLengthInputErrorMock = jest.fn()
    const { getByPlaceholderText } = setup({
      maxLength: 5,
      handleMaxLengthInputError: handleMaxLengthInputErrorMock,
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement

    userEvent.type(input, '12345')
    userEvent.type(input, '6')

    expect(handleMaxLengthInputErrorMock).toHaveBeenCalled()
  })

  test('Should disabled submit button when input is empty', () => {
    const onSubmitMock = jest.fn()
    const { getByRole } = setup({
      onSubmit: onSubmitMock,
    })
    const button = getByRole('button') as HTMLButtonElement

    fireEvent.click(button)

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
  })

  test('Should not call onSubmit and trackEvent function when input is empty and press enter button', () => {
    const onSubmitMock = jest.fn()
    const trackEventMock = jest.fn()
    const { container } = setup({
      onSubmit: onSubmitMock,
      trackEvent: trackEventMock,
    })

    fireEvent.click(container, { keyCode: KEY_ENTER })

    expect(onSubmitMock).toHaveBeenCalledTimes(0)
    expect(trackEventMock).toHaveBeenCalledTimes(0)
  })

  test('Should call onSubmit and trackEvent function when input is filled and button is clicked', () => {
    const trackEventMock = jest.fn()
    const onSubmitMock = jest.fn()
    const { getByRole, getByPlaceholderText } = setup({
      onSubmit: onSubmitMock,
      trackEvent: trackEventMock,
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement
    const button = getByRole('button') as HTMLButtonElement

    userEvent.type(input, 'dummy text')

    fireEvent.click(button)

    expect(onSubmitMock).toHaveBeenCalled()
    expect(trackEventMock).toHaveBeenCalled()
  })

  test('Should call onSubmit function when input is filled and enter button is clicked', () => {
    const onSubmitMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onSubmit: onSubmitMock,
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement

    userEvent.type(input, 'dummy text')

    fireEvent.keyDown(input, { keyCode: KEY_ENTER })

    expect(onSubmitMock).toHaveBeenCalled()
  })

  test('Should show project search when is enabled and input is focus', () => {
    const { getByPlaceholderText } = setup({
      getProjects: jest.fn(),
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement

    fireEvent.click(input)

    waitFor(() => {
      const search = getByPlaceholderText('searchProject') as HTMLInputElement

      expect(search).toBeInTheDocument()
    })
  })

  test('Should not show project search when is not enabled', () => {
    const { getByPlaceholderText } = setup({
      getProjects: null,
    })
    const input = getByPlaceholderText('+ add') as HTMLInputElement

    fireEvent.click(input)

    waitFor(() => {
      const search = getByPlaceholderText('searchProject') as HTMLInputElement

      expect(search).not.toBeInTheDocument()
    })
  })

  test('should not allow to click on submit if there is no project selected and createWithoutProject is false', () => {
    const { getByPlaceholderText } = setup({
      getProjects: jest.fn(),
      createWithoutProject: false,
      clientStatusId: 3,
    })

    const input = getByPlaceholderText('+ add') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'input' } })

    expect(input).toHaveValue('input')
  })

  test('should allow to click on submit if there is no project selected and createWithoutProject is true', () => {
    const { getByPlaceholderText } = setup({
      getProjects: jest.fn(),
      createWithoutProject: true,
    })

    const input = getByPlaceholderText('+ add') as HTMLInputElement
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: 'input' } })

    expect(input).toHaveValue('input')
  })
})
