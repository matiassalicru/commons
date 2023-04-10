import { render } from '@testing-library/react'
import { Datetime } from './Datetime'

const setup = (mock = {}) =>
  render(
    <Datetime
      id=""
      icon={false}
      format=""
      handleUpdate={() => {
        // default function
      }}
      translations={{}}
      {...mock}
    />
  )

describe('<Datetime />', () => {
  test('Should be in the document with br lang', () => {
    const { container } = setup({
      lang: 'br',
    })

    expect(container).toBeInTheDocument()
  })

  test('Should be in the document with tooltip', () => {
    const { container } = setup({
      tooltip: 'dummy tooltip',
      id: 'dummy id',
    })

    expect(container).toBeInTheDocument()
  })
})
