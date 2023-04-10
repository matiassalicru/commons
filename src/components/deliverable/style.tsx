/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components'
import { SCDeliverableProp, DeliverableStatus, SCLoadingProp } from './Deliverable.interface'

type IMapComponentPalette = {
  background: string
  border: string
  color: string
  icon: string
}

export function mapComponentPalette(
  state: Pick<SCDeliverableProp, 'deliverableStatus' | 'collapsed' | 'sv' | 'editable'>
): IMapComponentPalette {
  const { deliverableStatus, collapsed, sv, editable } = state

  let background = 'transparent'
  let border = 'transparent'
  const icon = '#5a5a5a'
  let color = '#5a5a5a'

  if (deliverableStatus === DeliverableStatus.CHILDREN) {
    background = '#d9f4ff'
    border = '#0094ca'
    color = '#0094ca'
  }

  if (deliverableStatus === DeliverableStatus.COUNTER) {
    background = 'transparent'
    border = '#0094ca'
  }

  if (sv) {
    if (editable) {
      background = 'transparent'
    } else {
      background = '#d9f4ff'
    }
    color = '#0094ca'
  } else {
    color = '#5a5a5a'
  }

  // gray
  if (collapsed) {
    background = 'transparent'
    color = '#a4adb5'
    border = '#a4adb5'
  }

  return {
    background,
    border,
    color,
    icon,
  }
}

export const SCDeliverableComponent = styled.div<SCDeliverableProp>`
  ${({ align }) => align && 'align-items: center;'}
  width: ${({ sv }) => `${sv ? 'fit-content' : '127px'}`};
  position: relative;

  ${({ cursorPointer }) =>
    cursorPointer &&
    css`
      cursor: pointer;
    `}
`

export const SCDeliverableComponentIconWrapper = styled.div<SCDeliverableProp>`
  ${props => `
    color: ${mapComponentPalette(props).color};
  `}
  display: flex;
  ${({ sv }) =>
    !sv
      ? css`
          padding-right: 5px;
          font-size: 20px;
        `
      : css`
          font-size: 16px;
          align-items: center;
        `}
`

export const SCDeliverableComponentWrapper = styled.div<SCDeliverableProp>`
  border: 1px solid transparent;
  ${props => {
    const { color, background, border } = mapComponentPalette(props)
    return `
        color: ${color};
        background: ${background};
        border-color: ${border};
      `
  }}
  font-size: 12px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;

  ${({ tooltip }) =>
    !tooltip &&
    css`
      padding: 6px 8px;
    `}
  font-weight: 500;
  ${({ sv }) => `border-radius: ${sv ? '20px;' : '10px;'}`}
  height: fit-content;
  transition: width 0.3s, background 0.3s;
  justify-content: center;
  height: ${({ sv }) => (sv ? 'auto' : '56px')};

  ${({ collapsed }) =>
    collapsed &&
    css`
      width: 34px;
      height: 34px;
      overflow: hidden;
      border-radius: 50%;
    `}
`

export const SCDeliverableComponentContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SCInputAndIcon = styled.div`
  display: flex;
  align-items: center;
`

export const SCTitleWrapper = styled.div`
  display: flex;
  color: #0094ca;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`

export const SCIconInformation = styled.div`
  margin-left: 5px;
`

export const SCLoading = styled.div<SCLoadingProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ sv }) => `${sv ? 44 : 110}px`};
  height: ${({ sv }) => `${sv ? 20 : 40}px`};
`

export const SCSwitchWrapper = styled.div`
  position: absolute;
  right: 9px;
`
