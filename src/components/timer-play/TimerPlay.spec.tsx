import { render } from '@testing-library/react'
import { TimerPlay } from './TimerPlay'

const setup = (mock = {}) => render(<TimerPlay customStyle={false} {...mock} />)

describe('<TimerPlay />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
