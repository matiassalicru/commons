import { ReactElement, useState, useCallback, useEffect } from 'react'
// Components
import { Footer } from './footer'
// Styles
import { SCStepperContent, SCStepContent } from './style'
// Interface
import { StepperProps } from './Stepper.interface'

export function Stepper({
  steps,
  translations,
  stepChange = () => {
    // Callback step change
  },
}: StepperProps): ReactElement {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const handleBack = useCallback(() => {
    setCurrentStep(step => step - 1)
  }, [])

  const handleNext = useCallback(() => {
    setCurrentStep(step => step + 1)
  }, [])

  const handleGoTo = useCallback(step => {
    setCurrentStep(step)
  }, [])

  useEffect(() => {
    stepChange(currentStep)
  }, [currentStep])

  return (
    <SCStepperContent>
      <SCStepContent>{steps[currentStep]}</SCStepContent>
      <Footer
        currentStep={currentStep}
        translations={translations}
        dotsQuantity={steps.length}
        handleBack={handleBack}
        handleNext={handleNext}
        handleGoTo={handleGoTo}
      />
    </SCStepperContent>
  )
}
