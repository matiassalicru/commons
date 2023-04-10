import { ReactElement, useState, useEffect } from 'react'
// Components
import NumberFormat from 'react-number-format'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
// Interface
import { CustomNumberFormatProps } from './CustomNumberFormat.interface'
// Constants
export const THOUSAND_SEPARATOR = '.'
export const DECIMAL_SEPARATOR = ','
export const MAX_RATE = 99999999.99
export const DEFAULT_VARIANT = 'standard'
export const DECIMAL_SCALE = 2

const customInput = (props: TextFieldProps) => {
  return <TextField {...props} />
}

export function CustomNumberFormat({
  fullWidth = true,
  variant = DEFAULT_VARIANT,
  spellCheck = false,
  label = '',
  name = '',
  value = 0,
  InputLabelProps = {},
  inputProps = {},
  onChangeValue,
  onFocus = () => null,
  onBlur = () => null,
  inputValidation = floatValue => {
    return floatValue <= MAX_RATE
  },
  helperText = '',
  placeholder = '',
  thousandSeparator = THOUSAND_SEPARATOR,
  decimalSeparator = DECIMAL_SEPARATOR,
  decimalScale = DECIMAL_SCALE,
  maxValueAdmited = MAX_RATE,
  disabled = false,
  error = false,
}: CustomNumberFormatProps): ReactElement {
  const [newValue, setNewValue] = useState(value)

  useEffect(() => {
    setNewValue(value)
  }, [value])

  const onValueChange = ({ floatValue }) => {
    // If no value set empty string, else validate input
    if (!!floatValue && inputValidation(floatValue)) {
      setNewValue(floatValue)
      onChangeValue(floatValue)
    } else {
      setNewValue('')
      onChangeValue('')
    }
  }

  const isAllowed = ({ floatValue }) => {
    let isValid = floatValue <= maxValueAdmited

    if (floatValue === undefined) {
      isValid = true
    }

    return isValid
  }

  return (
    <NumberFormat
      fullWidth={fullWidth}
      spellCheck={spellCheck}
      label={label}
      name={name}
      InputLabelProps={InputLabelProps}
      inputProps={inputProps}
      onFocus={onFocus}
      onBlur={onBlur}
      helperText={helperText}
      placeholder={placeholder}
      customInput={customInput}
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      isNumericString
      allowNegative={false}
      decimalScale={decimalScale}
      value={newValue}
      variant={variant}
      onValueChange={onValueChange}
      isAllowed={isAllowed}
      disabled={disabled}
      error={error}
    />
  )
}
