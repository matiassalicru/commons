import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SCWrapperList = styled.div`
  position: absolute;
  width: max-content;
  top: 0;
  right: 0;
  transform: translate3d(100%, 0, 0);
  overflow: hidden;
  z-index: 1;
  height: 100%;
`

export const SCList = styled(motion.ul)`
  height: inherit;
  display: flex;
  width: max-content;
  padding: 0;
  margin: 0;
`

export const SCStatusBoxItem = styled.li`
  width: ${({ boxWidth }) => `${boxWidth}px`};
  height: inherit;
  background-color: ${({ colorStatus }) => colorStatus};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;
`
