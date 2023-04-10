import { render } from '@testing-library/react'
import { Footer } from './Footer'

const setup = (mock = {}) =>
  render(
    <Footer
      translations={{ buttonBack: '', buttonNext: '' }}
      qtDots={1}
      handleNext={() => {
        // Click action default next
      }}
      handleBack={() => {
        // Click action default back
      }}
      handleGoTo={() => {
        // Click action default go to
      }}
      currentStep={1}
      {...mock}
    />
  )

describe('<Footer />', () => {
  test('Should be in the document', () => {
    const { container } = setup()

    expect(container).toBeInTheDocument()
  })
})
