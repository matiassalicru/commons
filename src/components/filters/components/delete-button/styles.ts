import Colors from '@projectcor/theme/lib/base/colors'
import styled from 'styled-components'

export const SCButtonWrapper = styled.button`
  align-items: center;
  background: transparent;
  color: ${Colors.primary.main};
  cursor: pointer;
  display: flex;
  font-size: 12px;
  border: none;
  height: 28px;
  width: 28px;
  justify-content: center;
  transition: color border-color 0.3s;
`

export const SCWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  border: 1px solid ${Colors.primary.main};
  font-size: 12px;
  transition: opacity 0.3s;
  justify-content: center;
  padding: 6px;
  position: relative;
  width: 28px;
  height: 28px;
  box-sizing: border-box;
  transition: border-color 2s;

  svg g path {
    transition: fill 0.3s;
  }

  &:hover {
    border-color: ${Colors.buttons.hoverDefault};
    svg g path {
      fill: ${Colors.buttons.hoverDefault};
    }
  }
`
