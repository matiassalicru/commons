import styled from 'styled-components'
import { SCIconTypeFileProps } from './IconTypeFile.interface'

export const SCWrapperIcon = styled.div<SCIconTypeFileProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${({ typeColor }) => typeColor};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
`
