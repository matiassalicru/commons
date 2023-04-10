import styled, { keyframes } from 'styled-components'
import Color from '@projectcor/theme/lib/base/colors'

const progress = keyframes`
    0% {
        stroke-dasharray: 0 100;
    }
`

export const SCContentPicture = styled.div`
  position: relative;
`

export const SCWrapperCapcity = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`

export const SCSvg = styled.svg`
  width: inherit;
  height: inherit;
  transform: scale(1.08);
`

export const SCPath = styled.path`
  fill: none;
  stroke-width: 3;
  animation: ${progress} 1s ease-out forwards;
  ${({ color }) => {
    switch (color) {
      case '25':
        return 'stroke: #00c972;'
      case '50':
        return 'stroke: #ffac2c;'
      case '100':
        return 'stroke: #ff1f4b;'
      default:
        return ''
    }
  }}
`

export const SCRoleClient = styled.div`
  background: #0096c7;
  color: #ffffff;
  height: 18px;
  width: 18px;
  position: absolute;
  right: -4px;
  top: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 12px;
`

export const SCWrapperIcon = styled.div`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -10px;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  background: ${Color.disable.main};
`
