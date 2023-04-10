/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */

import { fireEvent, render } from '@testing-library/react'

import { Search } from './Search'

const setup = (mock = {}) =>
  render(
    <Search
      onSearch={() => true}
      setData={newData => newData}
      data={[{ name: 'Mocked name', id: '1', categoryName: 'category', seniority: null }]}
      isFilter
      {...mock}
    />
  )

describe('<Search/>', () => {
  test('should call function when onChange is executed in the inputValue', () => {
    const onSearchMock = jest.fn()
    const { getByPlaceholderText } = setup({
      onSearch: onSearchMock,
      isFilter: false,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Dummy text' } })

    expect(onSearchMock).toHaveBeenCalled()
  })
})

describe('<Search/>', () => {
  test('should call function when onChange is executed in the inputValue', () => {
    const onFilterMock = jest.fn()
    const { getByPlaceholderText } = setup({
      setData: onFilterMock,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Mocked' } })

    expect(onFilterMock).toHaveBeenCalled()
  })

  test('Should match filter with one exact result', () => {
    const onFilterMock = jest.fn(data => data)
    const { getByPlaceholderText } = setup({
      setData: onFilterMock,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Mocked' } })

    expect(onFilterMock.mock.results[0].value).toHaveLength(1)
  })

  test('Should match filter with partial result', () => {
    const onFilterMock = jest.fn(data => data)
    const { getByPlaceholderText } = setup({
      setData: onFilterMock,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'ked' } })

    expect(onFilterMock.mock.results[0].value).toHaveLength(1)
  })

  test('Should return empty when no match finded', () => {
    const onFilterMock = jest.fn(data => data)
    const { getByPlaceholderText } = setup({
      setData: onFilterMock,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Not' } })

    expect(onFilterMock.mock.results[0].value).toHaveLength(0)
  })

  test('Should work with partial search space separated', () => {
    const onFilterMock = jest.fn(data => data)
    const { getByPlaceholderText } = setup({
      setData: onFilterMock,
    })

    const input = getByPlaceholderText('search') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'ked ame' } })

    expect(onFilterMock.mock.results[0].value).toHaveLength(1)
  })
})
