import { render } from '@testing-library/react'

// UI Component
import ItemList from '.'

const setup = (mock = {}) =>
  render(
    <ItemList
      data={{
        id: 1,
        name: 'The Shawshank Redemption',
        client: {
          name: 'Cliente',
        },
        brand: {
          name: 'Brand',
        },
        product: {
          name: 'Product',
        },
      }}
      {...mock}
    />
  )

describe('<ItemList />', () => {
  test('Should render correctly', () => {
    const { getByText } = setup()
    const name = getByText('The Shawshank Redemption')

    expect(name).toBeInTheDocument()
  })
})
