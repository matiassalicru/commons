import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { SuggestionButtonStyleProps } from './SuggestionButton.interface'

const rightUp = css`
  left: 85%;
`
const rightDown = css`
  left: 85%;
`
const leftDown = css`
  left: -4%;
`
const leftUp = css`
  left: -4%;
`
const center = css`
  left: 0;
`
const positions = {
  rightUp,
  rightDown,
  leftUp,
  leftDown,
  center,
}

export const SCSBWrapper = styled(motion.div)<SuggestionButtonStyleProps>`
  ${({ position }) => position !== 'center' && `position: relative`};
  z-index: ${({ zIndex }) => zIndex};
  ${({ position }) => positions[position]};
  margin-bottom: ${({ position }) => position !== 'center' && `-19px;`};
  width: fit-content;
`
export const SCSuggestionButton = styled.div<SuggestionButtonStyleProps>`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  width: ${({ size }) => (size && size > 19 ? size : 19)}px;
  height: ${({ size }) => (size && size > 19 ? size : 19)}px;
  background-color: ${({ variant }) => (variant === 'black' ? '#000;' : '#fff;')};
  ${({ grayLogo, variant }) => grayLogo && variant !== 'green' && `filter: grayscale(40);`}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  ${({ withPointer }) => withPointer && 'cursor: pointer;'}
`

export const SCSBMainWrapper = styled.div<SuggestionButtonStyleProps>`
  ${({ position }) =>
    position === 'center' &&
    css`
      display: flex;
      align-items: baseline;
    `};
  width: fit-content;
`
