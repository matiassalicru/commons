export interface CheckboxProps {
  width?: string // Width of the icon in px
  height?: string // Height of the icon in px
  color?: string // Color of the checkbox background
  checked?: boolean // Switch status
  onClick: (status: boolean) => void // Switch onChange manage status
  name?: string // Input name field
  dataTestIdCheckbox?: string // ID for testing
  dataTestIdLabel?: string // ID for testing
  ableToEdit?: boolean // Permission to edit/use checkbox
}

export interface CheckboxStylesProps {
  width?: string // Width of the icon in px
  height?: string // Height of the icon in px
  color?: string // Color of the checkbox background
  onClick: (status: boolean) => void // Switch onChange manage status
  ableToEdit?: boolean
  checked?: boolean
  name?: string
}
