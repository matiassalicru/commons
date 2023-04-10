import { render } from '@testing-library/react'
import { ButtonSeeMore } from './ButtonSeeMore'

const setup = (mock = {}) => render(<ButtonSeeMore text="See more" {...mock} />)

describe('<ButtonSeeMore />', () => {
  test('Should be in the document', () => {
    const { getByText } = setup()
    const element = getByText('See more')
    expect(element).toBeInTheDocument()
  })
})
