import { fireEvent, render } from '@testing-library/react'
import { List } from './List'

const setup = (mock = {}) =>
  render(
    <List
      onSelect={() => true}
      data={[
        {
          id: 'new',
          name: 'Nueva',
        },
        {
          id: 'in_progress',
          name: 'En proceso',
        },
        {
          id: 'finished',
          name: 'Finalizada',
        },
      ]}
      id="status"
      {...mock}
    />
  )

describe('<List />', () => {
  test('Should call onSelect function when option is clicked', () => {
    const onSelectMock = jest.fn()
    const { getAllByRole } = setup({
      onSelect: onSelectMock,
    })

    const item = getAllByRole('checkbox')[0]

    fireEvent.click(item)

    expect(onSelectMock).toHaveBeenCalled()
  })
})
