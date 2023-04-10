import { FunctionComponent } from 'react'
// Global components
import { SvgIcon } from '../svg-icon'
// Styles
import { SCLabel, StyledCheckbox } from './style'

// Types
import { CheckboxProps } from './Checkbox.interface'

// Constants
import { DEFAULT_COLOR, DEFAULT_HEIGHT, DEFAULT_WIDTH } from './constants'

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  color = DEFAULT_COLOR,
  checked = false,
  onClick = () => {
    // do nothing
  },
  name = '',
  dataTestIdCheckbox = '',
  dataTestIdLabel = '',
  ableToEdit = true,
}) => {
  const handleChangeStatus = () => {
    ableToEdit && onClick(!checked)
  }

  return (
    <SCLabel ableToEdit={ableToEdit} onClick={handleChangeStatus} data-testid={dataTestIdLabel}>
      <StyledCheckbox
        width={width}
        height={height}
        color={color}
        name={name}
        checked={checked}
        data-testid={dataTestIdCheckbox}
      >
        <SvgIcon iconName="check" />
      </StyledCheckbox>
    </SCLabel>
  )
}
