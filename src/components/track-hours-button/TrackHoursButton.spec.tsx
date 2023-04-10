import { render } from '@testing-library/react'
import { TrackHoursButton } from './TrackHoursButton'

const setup = (mock = {}) => render(<TrackHoursButton {...mock} />)

describe('<TrackHoursButton />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
