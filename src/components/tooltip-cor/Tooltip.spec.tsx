import { render } from '@testing-library/react'
import { Tooltip } from './Tooltip'

const setup = (mock = {}) =>
  render(
    <Tooltip delay={250} place="top" maxWidth="200" content="Custom Tooltip" zIndex={100} {...mock}>
      <div>Hover me!</div>
    </Tooltip>
  )

describe('<Tooltip />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
