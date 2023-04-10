import { MouseEventHandler, ReactElement } from 'react'
import { InputHourButtonProps } from './InputHourButton.interface'
import { SCIHButtonContainer } from './style'

export const InputHourButton = ({
  hour,
  minute,
  changeMode = false,
  handleSelectedHour,
  fontSize = 14,
  selected = false,
  enableSection,
}: InputHourButtonProps): ReactElement => {
  const handleOnClick: MouseEventHandler<HTMLDivElement> = e => {
    enableSection(e.currentTarget.innerHTML, changeMode)
    handleSelectedHour({ hour, minute, isSuggested: changeMode })
  }

  return (
    <SCIHButtonContainer
      data-selenium="hour_input_button"
      data-robot-id="hours-load-button"
      changeMode={changeMode}
      onClick={handleOnClick}
      fontSize={fontSize}
      selected={selected}
    >
      {hour} h<span />
      {minute} m
    </SCIHButtonContainer>
  )
}
