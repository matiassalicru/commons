/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { L2Dropdown } from './L2Dropdown'
import { KEY_BACKSPACE, KEY_LEFT, KEY_TAB } from '../../../../constants'
import { FILTERS_CONFIG as FILTERS_CONFIG_MOCK } from '../../utils/mocks'

// Context
import { FilterContext } from '../../Context'

beforeAll(() => {
  const newDiv = document.createElement('div')
  newDiv.setAttribute('id', 'root')
  document.body.appendChild(newDiv)
})

const setup = (mock = {}, trackEvent = jest.fn()) =>
  render(
    <FilterContext.Provider value={{ trackEvent, config: FILTERS_CONFIG_MOCK }}>
      <L2Dropdown
        onGoBack={() => true}
        onClose={() => true}
        l2Positions={{ x: 0, y: 0 }}
        addFilterToUrl={() => window.dispatchEvent(new Event('locationchange'))}
        optionsToFilter={{
          id: 'status',
          data: [
            {
              id: 'new',
              value: 'Nueva',
            },
            {
              id: 'in_progress',
              value: 'En proceso',
            },
            {
              id: 'finished',
              value: 'Finalizada',
            },
            {
              id: 'estancada',
              value: 'estancada',
            },
          ],
        }}
        dataSelected={[
          {
            id: 'en_proceso',
            value: 'En progreso',
          },
          {
            id: 'new',
            value: 'Nueva',
          },
        ]}
        setDataSelected={() => true}
        customDateFromChip={false}
        openedByChip={false}
        errorState={false}
        portalElementId="#root"
        isSimpleFilter={false}
        {...mock}
      />
    </FilterContext.Provider>
  )

describe('<L2Dropdown/>', () => {
  test('should call a function when click on confirmButton ', () => {
    const mockDispatchEvent = jest.spyOn(window, 'dispatchEvent')
    const onCloseMock = jest.fn()
    const { getByRole } = setup({
      onClose: onCloseMock,
    })

    const button = getByRole('button')
    expect(button).not.toBeDisabled()

    fireEvent.click(button)
    expect(onCloseMock).toHaveBeenCalled()
    expect(mockDispatchEvent).toHaveBeenCalledWith(new Event('locationchange'))
  })

  test('Should call onGoBack function when left arrow key is pressed', () => {
    const onGoBackMock = jest.fn()
    const { container } = setup({
      onGoBack: onGoBackMock,
      dataSelected: [],
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_LEFT,
    })

    expect(onGoBackMock).toHaveBeenCalled()
  })

  test('Should call onGoBack function when backspace key is pressed', () => {
    const onGoBackMock = jest.fn()
    const { container } = setup({
      onGoBack: onGoBackMock,
      dataSelected: [],
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_BACKSPACE,
    })

    expect(onGoBackMock).toHaveBeenCalled()
  })

  test('should not call onGoBack function if there is something in the searchValue', () => {
    const onGoBackMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onGoBack: onGoBackMock,
      dataSelected: [],
      optionsToFilter: {
        id: 'labels',
        data: [],
      },
    })

    const dropdown = document.querySelector("[data-js='filters-l2-dropdown']") as HTMLElement
    const input = getByPlaceholderText('search') as HTMLInputElement

    userEvent.type(input, 'Dummy text')

    fireEvent.keyDown(dropdown, {
      keycode: KEY_BACKSPACE,
    })

    expect(onGoBackMock).not.toHaveBeenCalled()
  })

  test('Should not call onGoBack function when key not be left key or backspace key', () => {
    const onGoBackMock = jest.fn()
    const { container } = setup({
      onGoBack: onGoBackMock,
    })

    fireEvent.keyDown(container, {
      keyCode: KEY_TAB,
    })

    expect(onGoBackMock).not.toHaveBeenCalled()
  })

  test('should call a handleClose when click on backdrop', () => {
    const onCloseMock = jest.fn()
    const { getByLabelText } = setup({
      onClose: onCloseMock,
    })

    const backdrop = getByLabelText('backdrop')
    fireEvent.click(backdrop)

    expect(onCloseMock).toHaveBeenCalled()
  })

  test('should show back buttom if not openedByChip', () => {
    const { getByLabelText } = setup({
      openedByChip: false,
    })

    const backButton = getByLabelText('go back button')

    expect(backButton).toBeInTheDocument()
  })

  test('should show a message if there is an error state', () => {
    const { getByRole } = setup({
      errorState: true,
    })

    const errorText = getByRole('img')

    expect(errorText).toBeInTheDocument()
  })
})
