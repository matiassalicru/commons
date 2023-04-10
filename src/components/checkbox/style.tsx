import styled from 'styled-components'

// Types
import { CheckboxStylesProps } from './Checkbox.interface'

export const SCLabel = styled.label<Pick<CheckboxStylesProps, 'ableToEdit'>>`
  transform: translateY(7px);
  cursor: ${({ ableToEdit }) => (ableToEdit ? 'pointer' : 'not-allowed')};
`

export const StyledCheckbox = styled.div<Pick<CheckboxStylesProps, 'checked' | 'name' | 'width' | 'color' | 'height'>>`
  display: inline-block;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ checked, color }) => (checked ? color : '#ffffff')};
  border-radius: 3px;
  border: 1px solid;
  border-color: ${({ checked }) => (checked ? '#ffffff' : '#a4adb5')};
  transition: background-color 150ms;
  position: relative;
  font-size: 10px;
  color: #ffffff;
  i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`
