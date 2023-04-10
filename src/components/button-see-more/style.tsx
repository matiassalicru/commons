import styled from 'styled-components'
import { SCButtonProps } from './ButtonSeeMore.interface'

export const SCButton = styled.button<SCButtonProps>`
  width: 126px;
  height: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  color: ${({ color }) => color};
  font-size: 14px;
  padding: 5px 10px;
  margin: 0;
  background: #ffffff;
  border-radius: 20px;
  cursor: pointer;

  path {
    fill: ${({ color }) => color};
  }
`
