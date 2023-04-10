import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

export const SCButton = styled(motion.button)`
  position: relative;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  background: #0094ca;
  color: #ffffff;
  width: 115px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s;
  &:hover {
    background: #0088b9;
  }
  &:disabled {
    background: #73ceef;
    cursor: not-allowed;
  }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const SCWrapperSpinner = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 9px;
  transform: translate3d(0, -50%, 0);
`

export const SCSpinner = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid #fff;
  border-right-color: transparent;
  animation: ${rotate} 1.3s ease-in-out infinite;
`
