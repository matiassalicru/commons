import { render } from '@testing-library/react'
import { Thumbnail } from './Thumbnail'

const setup = (mock = {}) =>
  render(<Thumbnail alt="This is a testing title" thumbnail="aaa" onClickPlay={() => 1} {...mock} />)

test('Thumbnail component should be present in the document', () => {
  const { getByTestId, getByTitle } = setup()
  const altDescription = getByTitle('This is a testing title')
  const playIcon = getByTestId('onboarding_video_play_button')
  expect(altDescription).toBeInTheDocument()
  expect(playIcon).toBeInTheDocument()
})
