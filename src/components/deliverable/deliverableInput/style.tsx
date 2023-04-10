import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { SCDeliverableProp, SCMotionAndDeliverableProps } from '../Deliverable.interface'
import { mapComponentPalette } from '../style'

export const SCDeliverableInputWrapper = styled.div<SCDeliverableProp>`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 20px;
`

export const SCDeliverableInput = styled.input<SCDeliverableProp>`
  padding: 0;
  line-height: 1;
  border: 0;
  font-size: 16px;
  background-color: transparent;
  border-color: #5a5a5a;
  color: #5a5a5a;
  text-align: center;
  transition: color 0.3s, border-color 0.3s;

  ${status => {
    const { color } = mapComponentPalette(status)
    return `
      color: ${color};
      border-color: ${color};
    `
  }}

  &:disabled {
    opacity: 0.4;
  }
  &:focus {
    border-bottom: 1px solid #5a5a5a;
  }
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  vertical-align: bottom;
  ${({ editable }) =>
    !editable
      ? css`
          pointer-events: none;
        `
      : 'border-bottom: 1px solid;'}
`

export const SCDeliverableInputWrapperActions = styled<SCMotionAndDeliverableProps>(motion.div)`
  overflow: hidden;
  display: flex;
  gap: 2px;
  position: absolute;

  ${({ sv }) => css`
    right: ${sv ? -45 : 9}px;
  `}
`
