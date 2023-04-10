// Type of button to display
export type VariantType = 'primary' | 'secondary' | 'white' | 'danger'

export interface ButtonProps {
  text?: string // message to display in the button
  onClickAction: () => void // onclick action
  variant?: VariantType // type fo button to use
  disabled?: boolean // disabled state
}

// StyleComponent props
export interface StyleButtonProps {
  typeVariant: string
}
