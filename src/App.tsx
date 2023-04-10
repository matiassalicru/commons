import { ReactElement } from 'react'
import { Stepper, ModalPortal } from './components'

export interface StepOneProps {
  number: string
}

const StepOne = ({ number }: StepOneProps) => {
  return <div>{`Aqui step ${number}`}</div>
}

const App = (): ReactElement => {
  const translations = {
    buttonBack: 'Back',
    buttonNext: 'Next',
  }

  const steps = [<StepOne number="uno" />, <StepOne number="dos" />, <StepOne number="tres" />]
  const translationsModal = {
    accept: 'Aceptar',
    cancel: 'Cancelar',
  }

  return (
    <ModalPortal
      title="Modal titulo"
      elementId="#root"
      variant="normal"
      translations={translationsModal}
      clickButtonAccept={() => {
        // default function
      }}
      clickButtonCancel={() => {
        // default function
      }}
      closeModal={() => {
        // default function
      }}
      maxWidth="400px"
    >
      <Stepper
        translations={translations}
        steps={steps}
        stepChange={() => {
          // Callback
        }}
      />
    </ModalPortal>
  )
}
export default App
