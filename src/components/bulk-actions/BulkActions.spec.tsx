import { fireEvent, render } from '@testing-library/react'
import { BulkActions } from './index'
// Mock
import { bulkActions, getQueryFilter } from '../../mocks/bulkActions'

const setup = (mock = {}) =>
  render(
    <BulkActions
      trackEvent={() => true}
      bulkActions={bulkActions}
      handleCloseWidget={() => true}
      getQueryFilter={getQueryFilter}
      {...mock}
    />
  )
describe('<BulkActions />', () => {
  test('should track event when widget is closed ', () => {
    const trackEventMock = jest.fn()
    const { getByTestId } = setup({
      trackEvent: trackEventMock,
    })

    const closeButton = getByTestId('close-widget-button')

    fireEvent.click(closeButton)

    expect(trackEventMock).toHaveBeenCalled()
  })

  test('should call handleCloseWidget when widget is closed', () => {
    const handleCloseWidgetMock = jest.fn()
    const { getByTestId } = setup({
      handleCloseWidget: handleCloseWidgetMock,
    })
    const closeButton = getByTestId('close-widget-button')

    fireEvent.click(closeButton)

    expect(handleCloseWidgetMock).toHaveBeenCalled()
  })
})
