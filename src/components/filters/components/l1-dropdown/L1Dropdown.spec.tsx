import { fireEvent, render } from '@testing-library/react'
import { L1Dropdown } from './L1Dropdown'
// Mock
import { appliedFilters, FILTERS_CONFIG as FILTERS_CONFIG_MOCK, MAPPED_FILTERS } from '../../utils/mocks'
// Types
import { FilterOptionTypes } from '../../Filters.interface'
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
      <L1Dropdown
        onClose={() => true}
        l1Positions={{ x: 0, y: 0 }}
        toggleL2Dropdown={() => true}
        filters={MAPPED_FILTERS as [FilterOptionTypes]}
        filtersApplied={appliedFilters as [FilterOptionTypes]}
        filterByTaskName={() => true}
        addFilterToUrl={() => true}
        portalElementId="#root"
        {...mock}
      />
    </FilterContext.Provider>
  )

describe('<L1Dropdown />', () => {
  test('Should call onClose when backdrop is clicked', () => {
    const onCloseMock = jest.fn()
    const { container } = setup({
      onClose: onCloseMock,
    })
    const backdrop = container.querySelector('div') as HTMLElement

    fireEvent.click(backdrop)

    expect(onCloseMock).toHaveBeenCalled()
  })

  test('Should call toggleL2Dropdown when option is clicked', () => {
    const trackEventMock = jest.fn()
    const toggleL2DropdownMock = jest.fn()
    const { container } = setup(
      {
        toggleL2Dropdown: toggleL2DropdownMock,
      },
      trackEventMock
    )
    const option = container.querySelectorAll('li')[0] as HTMLElement

    fireEvent.click(option)

    expect(toggleL2DropdownMock).toHaveBeenCalled()
    expect(trackEventMock).toHaveBeenCalled()
  })

  test('Should call filterByTaskName when option by name is clicked', () => {
    const { getByText } = setup({
      searchFilters: 'Frontend',
    })
    const optionByName = getByText('taskContains "Frontend"')

    expect(optionByName).toBeInTheDocument()
  })
})
