import styled from 'styled-components'
import { SCAvatarProps } from './AvatarUser.interface'

const LARGE = 45
const MEDIUM = 37
const SMALL = 30
const TINY = 20
const SMALLEST = 16

const setSize = variantSize => {
  switch (variantSize) {
    case 'large':
      return `width: ${LARGE}px; height: ${LARGE}px; font-size: 20px;`
    case 'medium':
      return `width: ${MEDIUM}px; height: ${MEDIUM}px; font-size: 16px;`
    case 'small':
      return `width: ${SMALL}px; height: ${SMALL}px; font-size: 14px;`
    case 'tiny':
      return `width: ${TINY}px; height: ${TINY}px; font-size: 10px;`
    case 'smallest':
      return `width: ${SMALLEST}px; height: ${SMALLEST}px; font-size: 10px;`
    default:
      return `width: ${SMALL}px; height: ${SMALL}px; font-size: 14px;`
  }
}

export const SCAvatar = styled.img<SCAvatarProps>`
  ${({ size }) => setSize(size)}
  border-radius: 50%;
`

export const SCAvatarFallback = styled.div<SCAvatarProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ bgColor }) => (bgColor ? '#e2f6ff' : '#ffedf1')};
  ${({ size }) => setSize(size)}
  border-radius: 50%;
  cursor: pointer;
`

export const SCInitialsName = styled.span`
  color: #4e4e4e;
  text-transform: uppercase;
`
