import styled from 'styled-components'
import { SvgIconStylesProps } from './SvgIcon.interface'

export const SCWrapperIcon = styled.i`
  display: inline-block;
  line-height: 0;
`

export const SCSvg = styled.svg<SvgIconStylesProps>`
  display: inline-block;
  width: ${({ iconSize }) => iconSize}em;
  height: ${({ iconSize }) => iconSize}em;
  fill: currentColor;
`
