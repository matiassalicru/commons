import { render, fireEvent, waitFor } from '@testing-library/react'
import { OnboardingPresentation } from './OnboardingPresentation'

const setup = (mock = {}) =>
  render(
    <OnboardingPresentation
      elementId=""
      title="Presupuestador Test"
      description="Una prueba del presupuestador"
      thumbnail=""
      videoUrl=""
      localStorageKey=""
      alt="title-test"
      {...mock}
    />
  )

test('OnboardingPresentation component renders correctly', () => {
  const { getByText } = setup()
  const title = getByText('Presupuestador Test')
  const paragraph = getByText('Una prueba del presupuestador')
  expect(title).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
})

test('OnboardingPresentations renders VideoLightboxPortal when play icon is clicked', () => {
  const { getByTitle } = setup()
  const playIcon = getByTitle('title-test')
  expect(playIcon).toBeInTheDocument()
  fireEvent.click(playIcon)
  // Wait for the internal status to change and video component to be rendered
  waitFor(() => {
    const videoLightboxPortal = getByTitle('YouTube video player')
    expect(videoLightboxPortal).toBeInTheDocument()
  })
})

test('OnboardingPresentations doesnt render VideoLightboxPortal when mounted', () => {
  const { getByTitle } = setup({})
  expect(() => getByTitle('YouTube video player')).toThrowError()
})
