import React from 'react'

export interface Translations {
  buttonBack: string
  buttonNext: string
}

export interface StepperProps {
  steps: Array<React.ReactNode>
  translations: Translations
  stepChange?: (step: number) => void
}
