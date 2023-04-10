import { render, fireEvent } from '@testing-library/react'
import moment from 'moment'
import { CardEvent } from './CardEvent'

const setup = (mock = {}) =>
  render(
    <CardEvent
      duration={{
        hours: 1,
        minutes: 10,
      }}
      isDateFormat={false}
      taskId={0}
      serviceName="Google.Calendar"
      eventId="1"
      eventTitle="Title Event"
      startEvent="09:00"
      endEvent="09:15"
      iconName="check"
      onClickAction={() => undefined}
      eventDate="2022-04-04"
      {...mock}
    />
  )

const MOCK_EVENT_ID = 1

describe('<CardEvent>', () => {
  test('should have the duration period of the event', async () => {
    const mockStartEvent = moment()
    const mockEndEvent = moment()
    const { queryByText } = setup({
      disabled: false,
      eventId: MOCK_EVENT_ID,
      startEvent: mockStartEvent,
      endEvent: mockEndEvent,
      isDateFormat: false,
      lang: 'es',
    })
    const start = mockStartEvent.format('HH:mm')
    const end = mockEndEvent.format('HH:mm')
    const title = queryByText(`${start} - ${end}`)
    expect(title).toBeInTheDocument()
  })
  test('should display for lang en am/pm if the time for start to end are different (am/pm)', () => {
    const mockStartEvent = '2022-05-24T10:04:39.600Z'
    const mockEndEvent = '2022-05-24T18:04:39.600Z'
    const { queryByText } = setup({
      disabled: false,
      eventId: MOCK_EVENT_ID,
      startEvent: mockStartEvent,
      endEvent: mockEndEvent,
      isDateFormat: false,
      lang: 'en',
    })
    const title = queryByText(`07:04 am - 03:04 pm`)
    expect(title).toBeInTheDocument()
  })
  test('should display for lang en am/pm if the time for start to end are equal (am/pm)', () => {
    const mockStartEvent = '2022-05-24T10:04:39.600Z'
    const mockEndEvent = '2022-05-24T14:04:39.600Z'
    const { queryByText } = setup({
      disabled: false,
      eventId: MOCK_EVENT_ID,
      startEvent: mockStartEvent,
      endEvent: mockEndEvent,
      isDateFormat: false,
      lang: 'en',
    })
    const title = queryByText(`07:04 - 11:04 am`)
    expect(title).toBeInTheDocument()
  })

  test('should show icon when hovering over the event', () => {
    const { container, queryByRole } = setup()

    const wrapper = container.firstChild as HTMLElement

    fireEvent.mouseOver(wrapper)

    const button = wrapper.lastChild

    expect(queryByRole('button')).toEqual(button)

    fireEvent.mouseLeave(wrapper)

    expect(queryByRole('button')).not.toEqual(button)
  })
  test('Should have opacity if event is disabled', () => {
    const { container } = setup({
      eventId: MOCK_EVENT_ID,
      disabled: true,
    })
    const wrapper = container.firstChild as HTMLElement

    expect(wrapper.firstChild).toHaveStyle('opacity: 0.4;')
  })
  test('Should call the click event', () => {
    const mockOnClick = jest.fn()
    const { container, getByRole } = setup({
      onClickAction: mockOnClick,
    })

    const wrapper = container.firstChild as HTMLElement

    fireEvent.mouseOver(wrapper)

    const button = getByRole('button')

    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })
})
