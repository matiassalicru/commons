import { fireEvent, render } from '@testing-library/react'
import { List } from './List'
import { ListTypes } from '../../Filters.interface'

const setup = (mock = {}) =>
  render(
    <List
      multiple
      openedByChip={false}
      type={ListTypes.text}
      onSelect={() => true}
      getSelection={() => true}
      searchValue=""
      pagination={{
        page: 1,
        lastPage: 2,
      }}
      data={[
        {
          id: 'new',
          title: 'Nueva',
        },
        {
          id: 'in_progress',
          title: 'En proceso',
        },
        {
          id: 'finished',
          title: 'Finalizada',
        },
      ]}
      {...mock}
    />
  )

describe('<List />', () => {
  test('Should call onSelect function when option is clicked', () => {
    const onSelectMock = jest.fn()
    const getSelectionMock = jest.fn()
    const { getAllByRole } = setup({
      onSelect: onSelectMock,
      getSelection: getSelectionMock,
    })

    const item = getAllByRole('checkbox')[0]

    fireEvent.click(item)

    expect(onSelectMock).toHaveBeenCalled()
    expect(getSelectionMock).toHaveBeenCalled()
  })

  test('Should call onSelect function when option is clicked and is not multiple', () => {
    const onSelectMock = jest.fn()
    const { getAllByRole } = setup({
      onSelect: onSelectMock,
      multiple: false,
    })

    const item = getAllByRole('checkbox')[0]

    fireEvent.click(item)

    expect(onSelectMock).toHaveBeenCalled()
  })
})
