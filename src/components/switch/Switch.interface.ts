export enum SwitchSize {
  NORMAL = 'normal',
  SMALL = 'small',
}

export interface SwitchProps {
  checked: boolean // Switch status
  onClick: (status: boolean) => void // Switch onChange manage status
  name: string // Input name field
  dataTestIdCheckbox?: string // ID for testing
  dataTestIdSpan?: string // ID for testing
  size: SwitchSize // ID for testing
  disabled?: boolean
}
