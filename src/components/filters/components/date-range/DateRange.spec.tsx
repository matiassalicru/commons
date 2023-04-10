import { render } from '@testing-library/react'
import { DateRange } from './DateRange'

// Context
import { FilterContext } from '../../Context'

const setup = (mock = {}) =>
  render(
    <FilterContext.Provider value={{ lang: 'es' }}>
      <DateRange onSelect={() => null} {...mock} />
    </FilterContext.Provider>
  )

describe('<DateRange/>', () => {
  test('Should be in the document', () => {
    const { container } = setup()
    expect(container).toBeInTheDocument()
  })
})
