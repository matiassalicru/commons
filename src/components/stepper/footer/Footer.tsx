import { useEffect, useState, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
// Styles
import { SCFooter, SCDotsContent } from './style'
// Components
import { ButtonStep } from '../button-step'
import { Dot } from '../dot'
// Interface
import { FooterProps, DotsArray } from './Footer.interface'
import { Position } from '../button-step/ButtonStep.interface'

export const Footer = ({
  translations,
  dotsQuantity,
  handleNext,
  handleBack,
  handleGoTo,
  currentStep,
}: FooterProps): ReactElement => {
  const [dotsValue, setDotsValue] = useState<DotsArray[]>([])

  useEffect(() => {
    const dotsArray: DotsArray[] = []

    for (let i = 0; i < dotsQuantity; i += 1) {
      dotsArray[i] = { value: currentStep === i, id: uuidv4() }
    }

    setDotsValue(dotsArray)
  }, [])

  useEffect(() => {
    setDotsValue(newDots =>
      newDots.map((dot, index) => {
        return { ...dot, value: currentStep === index }
      })
    )
  }, [currentStep])

  return (
    <SCFooter>
      {currentStep > 0 && (
        <ButtonStep
          position={Position.left}
          icon="chevron-left"
          title={translations.buttonBack}
          onClickButton={handleBack}
          testId="buttonBack"
          color="#888888"
          hoverColor="#000000"
        />
      )}
      <SCDotsContent>
        {dotsValue.map((item, index) => (
          <Dot selected={item.value} onClickDot={handleGoTo} step={index} key={item.id} />
        ))}
      </SCDotsContent>
      {currentStep !== dotsQuantity - 1 && (
        <ButtonStep
          position={Position.right}
          icon="chevron-right"
          title={translations.buttonNext}
          onClickButton={handleNext}
          testId="buttonNext"
        />
      )}
    </SCFooter>
  )
}
