import { fireEvent, render, screen } from '@testing-library/react'
import { Autocomplete } from './Autocomplete'

const mockedOptions = [
  {
    name: 'Option 1',
    type: 'Strings',
  },
  {
    name: 'Option 2',
    type: 'Strings',
  },
  {
    name: 'Option 3',
    type: 'Strings',
  },
  {
    name: '1',
    type: 'Numbers',
  },
  {
    name: '2',
    type: 'Numbers',
  },
  {
    name: '3',
    type: 'Numbers',
  },
]

const setup = (mock = {}) =>
  render(
    <Autocomplete
      inputId="autocomplete-input"
      optionList={mockedOptions}
      getOptionLabel={option => option.name}
      translations={{
        placeholder: 'Write something',
        noResult: 'Ups! Nothing found',
      }}
      handleSelectItem={() => {
        // do nothing
      }}
      {...mock}
    />
  )

describe('<Autocomplete />', () => {
  test('Autocomplete should show list on user-component interaction', () => {
    const onSelectItem = jest.fn()
    const { getByRole, queryByRole } = setup({
      handleSelectItem: onSelectItem,
    })

    const wrapper = getByRole('combobox')
    const input = wrapper.querySelector('input') as HTMLElement
    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'autocomplete-input')

    expect(queryByRole('listbox')).toBeNull()

    fireEvent.mouseDown(input)

    const ListBox = getByRole('listbox')
    expect(ListBox).toBeDefined()

    const option1 = screen.getByText(/option 1/i)
    const option3 = screen.getByText(/option 3/i)
    expect(option1).toBeInTheDocument()
    expect(option3).toBeInTheDocument()
  })

  test('When selecting list item should trigger onSelectItem (cb) with item data', () => {
    const onSelectItem = jest.fn()
    const { getByRole } = setup({
      handleSelectItem: onSelectItem,
    })

    const wrapper = getByRole('combobox')
    const input = wrapper.querySelector('input') as HTMLElement
    fireEvent.mouseDown(input)

    const option1 = screen.getByText(/option 1/i)
    const option3 = screen.getByText(/option 3/i)
    expect(option1).toBeInTheDocument()
    expect(option3).toBeInTheDocument()

    fireEvent.click(option1)
    expect(onSelectItem).toHaveBeenCalledWith(mockedOptions[0])
  })

  test('Should show error when error is passed', () => {
    const { getByText } = setup({ hasError: true, errorMessage: 'Error message' })

    const errorMessage = getByText('Error message')

    expect(errorMessage).toBeInTheDocument()
  })

  test('If custom icon is passed, should not rotate, if no options passed should show correct translation', () => {
    const { getByRole, getByText } = setup({
      customIcon: 'search',
      translations: {
        noResult: 'Sin resultados',
      },
      optionList: [],
    })

    const iconWrapper = getByRole('button')
    fireEvent.click(iconWrapper)

    expect(iconWrapper).toHaveStyle({ transform: 'none' })

    const notFound = getByText('Sin resultados')
    expect(notFound).toBeInTheDocument()
  })

  test('If max width is passed, should have style max width, if placeholder passed should be rendered', () => {
    const { container } = setup({
      maxWidth: 200,
      inputId: '',
      translations: {
        placeholder: 'Hola soy un placeholder',
      },
    })

    const wrapper = container.firstChild as HTMLElement

    expect(wrapper).toHaveStyle({ maxWidth: '200px' })

    const input = wrapper.querySelector('input') as HTMLElement

    expect(input).toHaveAttribute('placeholder', 'Hola soy un placeholder')
  })
})
