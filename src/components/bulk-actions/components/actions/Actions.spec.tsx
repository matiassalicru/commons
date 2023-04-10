import { fireEvent, render } from '@testing-library/react'
import { bulkActions } from '../../../../mocks/bulkActions'
import { BulkActionsContext } from '../../Context'

// UI Components
import { Actions } from './Actions'

const setup = (mock = {}, mockContext = { trackEvent: () => true }) =>
  render(
    <BulkActionsContext.Provider value={{ ...mockContext }}>
      <Actions
        actions={bulkActions}
        hideWidget={() => true}
        openL1={() => true}
        handleSelectValues={() => true}
        {...mock}
      />
    </BulkActionsContext.Provider>
  )

describe('<Actions/>', () => {
  test('Should track event when select more actions in widget', () => {
    const trackEventMocks = jest.fn()
    const { getByTestId } = setup(
      {},
      {
        trackEvent: trackEventMocks,
      }
    )
    const moreActions = getByTestId('more-actions-widget-button')

    fireEvent.click(moreActions)

    expect(trackEventMocks).toHaveBeenCalled()
  })

  test('Should call openL1 when more options is clicked', () => {
    const openL1Mock = jest.fn()
    const { getByTestId } = setup({
      openL1: openL1Mock,
    })
    const moreActions = getByTestId('more-actions-widget-button')

    fireEvent.click(moreActions)

    expect(openL1Mock).toHaveBeenCalled()
  })

  test('Should track event when select an option', () => {
    const trackEventMocks = jest.fn()
    const handleSelectValueDataMocks = jest.fn()
    const { getAllByTestId } = setup(
      {
        handleSelectValues: handleSelectValueDataMocks,
      },
      {
        trackEvent: trackEventMocks,
      }
    )
    const options = getAllByTestId('option-widget-button')

    options.forEach(option => {
      fireEvent.click(option)
      expect(trackEventMocks).toHaveBeenCalled()
      expect(handleSelectValueDataMocks).toHaveBeenCalled()
    })
  })
})
