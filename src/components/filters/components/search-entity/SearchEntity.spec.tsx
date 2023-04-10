import { render, fireEvent, waitFor } from '@testing-library/react'
import { SearchEntity } from './SearchEntity'

const setup = (mock = {}) => render(<SearchEntity placeholder="Dummy placeholder" onSelect={() => true} {...mock} />)

describe('<SearchEntity/>', () => {
  test('should change value when writing in input', () => {
    const { getByPlaceholderText } = setup({
      placeholder: 'placeholder text',
    })

    const input = getByPlaceholderText('placeholder text')

    fireEvent.change(input, { target: { value: 'some value' } })
    expect(input.value).toBe('some value')
  })

  test('should focus when component is mount and autoFocus prop is true', async () => {
    const { getByPlaceholderText } = setup({
      placeholder: 'placeholder text',
      autoFocus: true,
    })

    const input = getByPlaceholderText('placeholder text')

    await waitFor(() => {
      expect(input).toHaveFocus()
    })
  })

  test('should not focus when component is mount and autoFocus prop is false', () => {
    const { getByPlaceholderText } = setup({
      placeholder: 'placeholder text',
      autoFocus: false,
    })

    const input = getByPlaceholderText('placeholder text')

    expect(input).not.toHaveFocus()
  })
})
