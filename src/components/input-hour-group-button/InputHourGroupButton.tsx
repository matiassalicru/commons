import { ReactElement, useEffect, useState } from 'react'
import { InputHourGroupButtonProps } from './InputHourGroupButton.interface'
import { InputHourButton } from '../input-hour-button/InputHourButton'
import { SCIHGroupButtonContainer } from './style'

const HALFMINUTE = '0 h<span></span>30 m'
const ONEHOUR = '1 h<span></span>0 m'
const TWOHOUR = '2 h<span></span>0 m'

export const InputHourGroupButton = ({
  fontSize = 14,
  handleSelectedInput,
  suggestion,
  reset = 0,
  isInactiveClient = false,
}: InputHourGroupButtonProps): ReactElement => {
  const [suggestionSelected, setSuggestionSelected] = useState(false)
  const [minuteSelected, setMinuteSelected] = useState(false)
  const [hourSelected, setHourSelected] = useState(false)
  const [hourMinuteSelected, setHourMinuteSelected] = useState(false)

  useEffect(() => {
    setSuggestionSelected(false)
    setMinuteSelected(false)
    setHourSelected(false)
    setHourMinuteSelected(false)
  }, [reset])

  const buttonEnabled = (innerText: string, isSuggestion: boolean) => {
    setSuggestionSelected(isSuggestion)
    setMinuteSelected(isSuggestion ? false : innerText === HALFMINUTE)
    setHourSelected(isSuggestion ? false : innerText === ONEHOUR)
    setHourMinuteSelected(isSuggestion ? false : innerText === TWOHOUR)
  }

  return (
    <SCIHGroupButtonContainer id="shortcuts">
      {suggestion && !isInactiveClient && (
        <InputHourButton
          hour={suggestion.hour}
          minute={suggestion.minute}
          handleSelectedHour={handleSelectedInput}
          changeMode
          fontSize={fontSize}
          selected={suggestionSelected}
          enableSection={buttonEnabled}
        />
      )}
      <InputHourButton
        hour={0}
        minute={30}
        handleSelectedHour={handleSelectedInput}
        changeMode={false}
        fontSize={fontSize}
        selected={minuteSelected}
        enableSection={buttonEnabled}
      />
      <InputHourButton
        hour={1}
        minute={0}
        handleSelectedHour={handleSelectedInput}
        changeMode={false}
        fontSize={fontSize}
        selected={hourSelected}
        enableSection={buttonEnabled}
      />
      <InputHourButton
        hour={2}
        minute={0}
        handleSelectedHour={handleSelectedInput}
        changeMode={false}
        fontSize={fontSize}
        selected={hourMinuteSelected}
        enableSection={buttonEnabled}
      />
    </SCIHGroupButtonContainer>
  )
}
