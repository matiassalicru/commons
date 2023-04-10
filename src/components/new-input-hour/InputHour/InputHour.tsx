/* eslint-disable react/require-default-props */
import { ChangeEvent, FC, FocusEvent, useEffect, useState } from 'react'
import { InputHourProps } from './InputHour.interface'
import { SCIHChargeInput, SCIHChargeInputTimeWrapper, SCIHLabel, SCIHLabelLetter } from './InputHour.style'

export const InputHour: FC<InputHourProps> = ({
  label,
  isActive,
  time,
  focusInput = false,
  maxValue,
  isSuggestion = false,
  handleChangeValue,
  refInput,
  inputId,
  editPermission = false,
}) => {
  const [changedTime, setChangedTime] = useState<number>(0)

  useEffect(() => {
    setChangedTime(time)
  }, [time])

  const validateNumber = (number: string, maxChar: number): boolean => {
    const regex = /\D/
    return !regex.test(number) && +number < maxChar
  }

  const removeZero = (value: string): string => {
    return value.replace(/^0+/, '')
  }

  const handleChargeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const inputValue = target.value.length ? removeZero(target.value) : target.value
    if (validateNumber(inputValue, maxValue)) {
      setChangedTime(Number(inputValue))
      handleChangeValue(Number(inputValue), label)
    }
  }

  const onFocusInput = ({ target }: FocusEvent<HTMLInputElement>) => target.select()

  return (
    <SCIHChargeInputTimeWrapper
      id={inputId}
      isActive={isActive}
      isSuggestion={isSuggestion}
      editPermission={editPermission}
    >
      {!isActive ? (
        <SCIHLabel>{changedTime}</SCIHLabel>
      ) : (
        <SCIHChargeInput
          autoFocus={focusInput}
          value={changedTime}
          onChange={handleChargeInput}
          isSuggestion={isSuggestion}
          ref={refInput}
          onFocus={onFocusInput}
        />
      )}
      <SCIHLabelLetter>{label}</SCIHLabelLetter>
    </SCIHChargeInputTimeWrapper>
  )
}
