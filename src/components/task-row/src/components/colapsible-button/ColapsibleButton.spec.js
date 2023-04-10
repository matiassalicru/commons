import { render } from '@testing-library/react'
import { CollapsibleButton } from './index'

const setup = (mock = {}) => render(<CollapsibleButton {...mock} />)

describe('<CollapsibleButton />', () => {
  test('should render button component correctly when isClosed is true', () => {
    const { getByTestId } = setup({
      isClosed: true,
    })
    const button = getByTestId('collapsible-button')

    expect(button).toBeInTheDocument()
  })

  test('should render button component correctly when isClosed is false', () => {
    const { getByTestId } = setup({
      isClosed: false,
    })
    const button = getByTestId('collapsible-button')

    expect(button).toBeInTheDocument()
  })
})
