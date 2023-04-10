export interface Translations {
  buttonBack: string
  buttonNext: string
}

export interface FooterProps {
  translations: Translations
  dotsQuantity: number
  handleNext: () => void
  handleBack: () => void
  handleGoTo: (step: number) => void
  currentStep: number
}

export interface DotsArray {
  value: boolean
  id: string
}
