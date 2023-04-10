import { render, fireEvent } from '@testing-library/react'
import { L2Dropdown } from './L2Dropdown'
import { BulkActionsContext } from '../../Context'

const userEntity = {
  id: 123,
  lang: 'es',
  lastName: 'Baca',
  firstName: 'Angelica',
  remainingHours: null,
}

const setup = (mock = {}, mockContext = { trackEvent: () => true }) =>
  render(
    <BulkActionsContext.Provider value={{ ...mockContext }}>
      <L2Dropdown
        myData={userEntity}
        title="Dummy title"
        onClose={() => true}
        data={{
          id: 'status',
          type: 'text',
          values: [
            {
              id: 'new',
              color: 'rgb(0, 148, 202)',
            },
          ],
        }}
        type="text"
        handleSelectValues={() => true}
        onGoBack={() => true}
        handleFetcher={() => new Promise(() => true)}
        {...mock}
      />
    </BulkActionsContext.Provider>
  )

describe('<L2Dropdown/>', () => {
  test('should call onClose function when click on backdrop', () => {
    const onCloseMock = jest.fn()
    const onGoBackMock = jest.fn()
    const { getByTestId } = setup({
      onClose: onCloseMock,
      onGoBack: onGoBackMock,
    })

    const backdrop = getByTestId('backdrop')
    const backButton = getByTestId('go back button')
    fireEvent.click(backdrop)
    fireEvent.click(backButton)

    expect(onCloseMock).toHaveBeenCalled()
    expect(onGoBackMock).toHaveBeenCalled()
  })

  test('should not call onClose function when submit form without selection', () => {
    const onCloseMock = jest.fn()
    const { getByRole } = setup({
      onClose: onCloseMock,
    })

    const submitButton = getByRole('button')
    fireEvent.click(submitButton)

    expect(onCloseMock).not.toHaveBeenCalled()
  })

  test('should track event when submit data"', async () => {
    const trackEventMock = jest.fn()
    const { getByText } = setup(
      {},
      {
        trackEvent: trackEventMock,
      }
    )

    const option = getByText('new')

    fireEvent.click(option)

    setTimeout(() => {
      const submitButton = getByText('confirm')

      fireEvent.click(submitButton)

      expect(option).toBeInTheDocument()
      expect(submitButton).not.toBeDisabled()
      expect(trackEventMock).toHaveBeenCalled()
    }, 100)
  })
})
