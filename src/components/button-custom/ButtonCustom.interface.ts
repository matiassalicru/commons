import { ReactNode } from 'react'

export interface ButtonCustomProps {
  children: ReactNode
  color?: string
  backgroundColor?: string
  fontSize?: string
  minWidth?: string
  minHeight?: string
  padding?: string
  borderRadius?: string
  fontWeight?: string
  onClick: (event) => void // Button callback on click.
  disabled?: boolean // Determine if button is disabled
  hoverBackground?: string
  hoverColor?: string
  dataTestIdButton?: string // ID for testing
  boxShadow?: string // Box shadow on button:active
  textShadow?: string // Text shadow on button:active
  outlineColor?: string // Outline if needed
  hoverOutlineColor?: string // Outline if needed
  idForExperience?: string
  variantButton?: string
  variantSize?: string
}

export interface ButtonCustomStylesProps {
  color?: string
  backgroundColor?: string
  fontSize?: string
  minWidth?: string
  minHeight?: string
  padding?: string
  borderRadius?: string
  fontWeight?: string
  disabled?: boolean // Determine if button is disabled
  hoverBackground?: string
  hoverColor?: string
  boxShadow?: string // Box shadow on button:active
  textShadow?: string // Text shadow on button:active
  outlineColor?: string // Outline if needed
  hoverOutlineColor?: string // Outline if needed
  variantButton?: string
  variantSize?: string
}
