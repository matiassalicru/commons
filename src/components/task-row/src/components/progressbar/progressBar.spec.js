import { render } from '@testing-library/react'
import { ProgressBar } from './ProgressBar'

const setup = (mock = {}) => render(<ProgressBar progress={20} {...mock} />)

describe('<ProgressBar />', () => {
  test('Should show a progress passed by prop', () => {
    const { getByTestId } = setup({
      progress: 60,
    })

    const progress = getByTestId('progress-number')

    expect(progress).toHaveTextContent('60%')
  })
})
