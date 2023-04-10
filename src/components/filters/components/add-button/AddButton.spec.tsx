import { fireEvent, render } from '@testing-library/react'

// UI Components
import { AddButton } from './AddButton'
import { FilterContext } from '../../Context'

// Constants
import { KEYS } from '../../../../utils/keyboardKeys'

const setup = (mock = {}, trackEvent = jest.fn()) =>
  render(
    <FilterContext.Provider value={{ trackEvent }}>
      <AddButton
        onSearch={() => true}
        onClick={() => true}
        isSimple={false}
        setSearchFilters={() => true}
        setChipsKeyboardNavigationDisabled={() => true}
        show
        {...mock}
      />
    </FilterContext.Provider>
  )

describe('<AddButton />', () => {
  test('Should not show div text when button is simple', () => {
    const { container } = setup({
      isSimple: true,
      searchFilters: 'dummy',
    })

    const textsLength = container.querySelectorAll('div').length

    expect(textsLength).toBe(1)
  })

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
  })

  test('should not show button if show is false', () => {
    const { container } = setup({
      show: false,
    })

    expect(container).toBeInTheDocument()
  })

  test('Should call onSearch function when input is filled', () => {
    const onSearchMock = jest.fn()
    const { container } = setup({
      onSearch: onSearchMock,
    })

    const input = container.querySelector('span')

    fireEvent.input(input, {
      currentTarget: {
        textContent: 'dummy',
      },
    })

    fireEvent.keyPress(input, {
      key: 'Enter',
    })

    expect(onSearchMock).toHaveBeenCalled()
  })

  test('Should focus button when command + shift + f keys are pressed and focus input when is clicked on mac', () => {
    Object.defineProperty(window, 'navigator', {
      value: {
        userAgent: 'Mac OS X',
      },
      writable: true,
    })
    const onClickMock = jest.fn()
    const setChipsKeyboardNavigationDisabledMock = jest.fn()
    const { getByRole, container } = setup({
      onClick: onClickMock,
      setChipsKeyboardNavigationDisabled: setChipsKeyboardNavigationDisabledMock,
    })
    const button = getByRole('button')
    const input = container.querySelector('span')

    fireEvent.keyDown(container, {
      code: KEYS.F,
      metaKey: true,
      shiftKey: true,
    })

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
    expect(setChipsKeyboardNavigationDisabledMock).toHaveBeenCalledWith(false)
    expect(input).toHaveFocus()
  })

  test('Should focus button when ctrl + shift + f keys are pressed and focus input when is clicked when is not mac', () => {
    Object.defineProperty(window, 'navigator', {
      value: {
        userAgent: 'Another platform',
      },
      writable: true,
    })
    const onClickMock = jest.fn()
    const setChipsKeyboardNavigationDisabledMock = jest.fn()
    const { getByRole, container } = setup({
      onClick: onClickMock,
      setChipsKeyboardNavigationDisabled: setChipsKeyboardNavigationDisabledMock,
    })
    const button = getByRole('button')
    const input = container.querySelector('span')

    fireEvent.keyDown(container, {
      code: KEYS.F,
      ctrlKey: true,
      shiftKey: true,
    })

    fireEvent.click(button)

    expect(onClickMock).toHaveBeenCalled()
    expect(setChipsKeyboardNavigationDisabledMock).toHaveBeenCalledWith(false)
    expect(input).toHaveFocus()
  })

  test('Should call setChipsKeyboardNavigationDisabled when button is blured', () => {
    const setChipsKeyboardNavigationDisabledMock = jest.fn()
    const { getByRole } = setup({
      setChipsKeyboardNavigationDisabled: setChipsKeyboardNavigationDisabledMock,
    })
    const button = getByRole('button')

    fireEvent.blur(button)

    expect(setChipsKeyboardNavigationDisabledMock).toHaveBeenCalledWith(true)
  })

  test('should not show label when searchFilter is filled, isSimple is true or showLabel is false', () => {
    setup({
      searchFilters: 'dummy text',
      isSimple: true,
      openedByChip: true,
      isMenuOpen: false,
    })

    const label = document.querySelector('[data-js="add-filter-button"]')

    expect(label).not.toBeInTheDocument()
  })

  test('should show label when searchFilter not is filled, isSimple is false or showLabel is true', () => {
    const { getByText } = setup({
      isSimple: false,
      openedByChip: false,
      isMenuOpen: true,
    })

    const label = getByText('+ addFilter')

    expect(label).toBeInTheDocument()
  })

  test('should don´t do focus on button addFilter when notTypeable is true ', () => {
    const { getByRole, container } = setup({
      notTypeable: true,
    })
    const input = container.querySelector('span')
    const button = getByRole('button')

    fireEvent.click(button)

    expect(input).not.toHaveFocus()
  })
})
