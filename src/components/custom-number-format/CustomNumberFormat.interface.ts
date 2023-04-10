import React from 'react'

export type variantType = 'filled' | 'outlined' | 'standard'

export interface CustomNumberFormatProps {
  /**
   * width attribute of the MUI Textfield
   */
  fullWidth?: boolean
  /**
   * variant attribute of the MUI Textfield
   */
  variant?: string
  /**
   * spellCheck HTML element attribute
   */
  spellCheck?: boolean
  /**
   * label of the MUI Textfield
   */
  label: React.ReactNode | string
  /**
   * name of the field
   */
  name: string
  /**
   * Real value
   */
  value: number | string
  /**
   * Props extended into input of MUI Textfield
   */
  inputProps?: Record<string, unknown>
  /**
   * Props extended into inputLabelProps MUI Textfield
   */
  InputLabelProps?: Record<string, unknown>
  /**
   * Function to execute when value change
   */
  onChangeValue: (floatValue: number | string) => number | string
  /**
   * Function to execute onFocus event
   */
  onFocus?: () => void
  /**
   * Function to execute onBlur event
   */
  onBlur?: () => void
  /**
   * Function to execute validations
   */
  inputValidation?: (value: number) => boolean
  /**
   * Helper text content
   */
  helperText?: React.ReactNode | string
  /**
   * Placeholder of the MUI Textfield
   */
  placeholder?: string
  /**
   * Thousand string used as separator
   */
  thousandSeparator?: string
  /**
   * Decimal string used as separator
   */
  decimalSeparator?: string
  /**
   * Amounts of decimal numbers accepted
   */
  decimalScale?: number
  /**
   * Max value accepted
   */
  maxValueAdmited?: number
  disabled?: boolean
  error?: boolean
}
