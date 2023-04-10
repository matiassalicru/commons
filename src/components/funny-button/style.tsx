/* eslint-disable @typescript-eslint/indent */
// disable-space clash error with typescript intent and prettier.
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { Size, StyleFunnyButtonProps } from './FunnyButton.inteface'

const LARGE = 40
const MEDIUM = 35
const SMALL = 30

const setSize = (variantSize: Size | undefined) => {
  switch (variantSize) {
    case 'large':
      return `width: ${LARGE}px; height: ${LARGE}px; font-size: 20px;`
    case 'medium':
      return `width: ${MEDIUM}px; height: ${MEDIUM}px; font-size: 18px;`
    case 'small':
      return `width: ${SMALL}px; height: ${SMALL}px; font-size: 14px;`
    default:
      return `width: ${SMALL}px; height: ${SMALL}px; font-size: 14px;`
  }
}

export const SCButton = styled(motion.button)<StyleFunnyButtonProps>`
  position: relative;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  ${({ size }) => setSize(size)}
  border-radius: 50%;
  border: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#d6d6d6')};
  transition: background 0.3s, color 0.3s;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    background: #2094cb;
    z-index: -1;
    opacity: 0;
    transform: scale(0.3);
    transition: transform 0.3s, opacity 0.3s, background 0.3s;
    ${({ isActive }) =>
      isActive &&
      css`
        opacity: 1;
        transform: scale(1);
      `}
  }
  ${({ isActive }) =>
    isActive &&
    css`
      &:hover:before {
        background: #1180b5;
      }
    `}
  ${({ isPlane }) => {
    return (
      isPlane &&
      css`
        & i {
          position: relative;
          transform: translateX(-1px);
        }
      `
    )
  }}
`
