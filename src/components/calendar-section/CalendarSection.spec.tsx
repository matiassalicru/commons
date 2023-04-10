import { render, fireEvent } from '@testing-library/react'
import { CalendarSection } from './CalendarSection'

const mockArrayUserCalendars = [
  {
    name: 'Main Calendar',
    id: 1,
    main: true,
  },
  {
    name: 'Other Calendar',
    id: 2,
    main: false,
  },
]

const setup = (mock = {}) =>
  render(
    <CalendarSection
      calendarName={mockArrayUserCalendars}
      title="Calendar Storybook"
      onClickCalendarSelected={() => undefined}
      {...mock}
    />
  )

describe('CalendarSection', () => {
  test('snapshot', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
  test('should title of type Calendar', () => {
    const { container } = setup()

    const wrapper = container.firstChild
    expect(wrapper).toBeInTheDocument()
  })
  test('should have title for type of calendar user', () => {
    const { queryByText } = setup()

    const titleTypeCalendar = queryByText(`Calendar Storybook`)

    expect(titleTypeCalendar).toBeInTheDocument()
  })
  test('the click event must be called the same number of times as the length of the array ', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClickCalendarSelected: onClickMock,
    })

    mockArrayUserCalendars.forEach(calendar => {
      const wrapperCalendar = getByTestId(`SCCSWrapperCalendarItem-${calendar.id}`)
      fireEvent.click(wrapperCalendar)
    })
    expect(onClickMock).toHaveBeenCalledTimes(mockArrayUserCalendars.length)
  })
  test('the click event must be called the same object', () => {
    let onClickObject = {}
    const onClickMock = jest.fn(x => {
      onClickObject = x
      return true
    })
    const { getByTestId } = setup({
      onClickCalendarSelected: onClickMock,
    })
    // obtener el div
    const randomIndex = Math.round(Math.random() * (mockArrayUserCalendars.length - 1))
    const wrapper = getByTestId(`SCCSWrapperCalendarItem-${mockArrayUserCalendars[randomIndex].id}`)
    fireEvent.click(wrapper)
    expect(onClickObject).toEqual(mockArrayUserCalendars[randomIndex])
  })
  test('should have name for calendar', () => {
    const { getByText } = setup()

    const randomIndex = Math.round(Math.random() * (mockArrayUserCalendars.length - 1))
    const title = getByText(`${mockArrayUserCalendars[randomIndex].name}`)

    expect(title).toBeInTheDocument()
  })
  test('should call clickEvent', () => {
    const onClickMock = jest.fn()
    const { getByTestId } = setup({
      onClickCalendarSelected: onClickMock,
    })

    const titleCalendarUser = getByTestId(`SCCSWrapperCalendarItem-${mockArrayUserCalendars[0].id}`)

    fireEvent.click(titleCalendarUser)

    expect(onClickMock).toBeCalled()
  })
})
