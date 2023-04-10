import { FunctionComponent } from 'react'
import { SwitchProps, SwitchSize } from './Switch.interface'

// Styles
import { SCLabel, SCInput, SCSpan } from './style'

export const Switch: FunctionComponent<SwitchProps> = ({
  checked = false,
  onClick = () => {
    // do nothing
  },
  name = '',
  dataTestIdCheckbox = '',
  dataTestIdSpan = '',
  size = SwitchSize.NORMAL,
  disabled = false,
}) => {
  const handleChangeStatus = () => {
    if (disabled) {
      return
    }
    onClick(!checked)
  }

  return (
    <SCLabel size={size}>
      <SCInput
        size={size}
        type="checkbox"
        checked={checked}
        name={name}
        data-testid={dataTestIdCheckbox}
        disabled={disabled}
      />
      <SCSpan size={size} onClick={handleChangeStatus} data-testid={dataTestIdSpan} />
    </SCLabel>
  )
}

export { SwitchSize } from './Switch.interface'
