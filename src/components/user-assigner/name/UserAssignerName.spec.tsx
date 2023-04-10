import { render } from '@testing-library/react'
import { UserAssignerName } from './UserAssignerName'

const setup = (mock = {}) =>
  render(
    <UserAssignerName
      translations={{
        titleMarket: 'title',
      }}
      name="name"
      {...mock}
    />
  )

describe('<UserAssignerName />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document within title', () => {
    const { container } = setup({
      translations: {},
    })

    expect(container).toBeInTheDocument()
  })
})
