import { render } from '@testing-library/react'
import { Stepper } from './Stepper'

const setup = (mock = {}) => render(<Stepper translations={{ buttonBack: '', buttonNext: '' }} steps={[]} {...mock} />)

describe('<Stepper />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
