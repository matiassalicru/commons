import { render, fireEvent } from '@testing-library/react'

import { ChipFilter } from './ChipFilter'
import { FilterContext } from '../../Context'
import { FILTERS_CONFIG as FILTERS_CONFIG_MOCK } from '../../utils/mocks'

// Types
import { ListTypes } from '../../Filters.interface'

const setup = (mock = {}, trackEvent = jest.fn()) =>
  render(
    <FilterContext.Provider value={{ trackEvent, lang: 'es', config: FILTERS_CONFIG_MOCK }}>
      <ChipFilter
        getChipPosition={() => true}
        onDelete={() => true}
        onClick={() => true}
        getCustomDate={() => true}
        chipData={{
          id: 'status',
          type: 'text' as ListTypes,
          data: [
            {
              title: 'new',
              value: 'Nueva',
            },
            {
              title: 'inProgress',
              value: 'En proceso',
            },
          ],
        }}
        {...mock}
      />
    </FilterContext.Provider>
  )

describe('<ChipFilter />', () => {
  test('Should call onClick function when Wrapper is clicked', () => {
    const trackEventMock = jest.fn()
    const onClickMock = jest.fn()
    const onGetCustomDateMock = jest.fn()
    const { getByText } = setup(
      {
        onClick: onClickMock,
        getCustomDate: onGetCustomDateMock,
      },
      trackEventMock
    )
    const label = getByText('status:')

    fireEvent.click(label)

    expect(onClickMock).toHaveBeenCalled()
    expect(onGetCustomDateMock).toHaveBeenCalled()
    expect(trackEventMock).toHaveBeenCalled()
  })

  test('Should call onDelete function when close icon is clicked', () => {
    const onDeleteMock = jest.fn()
    const onClickMock = jest.fn()

    const { getByRole } = setup({
      onDelete: onDeleteMock,
      onClick: onClickMock,
    })

    const button = getByRole('button')

    fireEvent.click(button)

    expect(onDeleteMock).toHaveBeenCalled()
    expect(onClickMock).toHaveBeenCalledTimes(0)
  })
})
