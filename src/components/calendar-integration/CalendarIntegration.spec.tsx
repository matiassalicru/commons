import { render, fireEvent } from '@testing-library/react'
import { CalendarIntegration } from './CalendarIntegration'

const setup = (mock = {}) =>
  render(
    <CalendarIntegration legend="" selected="" onSelectedDay={() => null} setOpenCalendarState={() => null} {...mock} />
  )

describe('<CalendarIntegration/>', () => {
  test('should fire onclick event', () => {
    const { container } = setup()

    const wrapper = container?.firstChild?.firstChild
    const onClickEvent = fireEvent.click(wrapper as Node)
    expect(onClickEvent).toBeTruthy()
  })
})
