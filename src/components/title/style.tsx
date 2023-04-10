import styled, { css } from 'styled-components'
import { SCTitleProps } from './Title.interface'

export const SCWrapperTitle = styled.div<SCTitleProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${({ ableToEdit }) => (ableToEdit ? 'minmax(0, 1fr) max-content' : 'minmax(0, 1fr)')};
  align-items: center;
  text-align: left;
  gap: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border: 1px solid transparent;
  transition: border-color 0.3s ease 0s;
  border-radius: 5px;
  cursor: ${({ hasDragAndDrop }) => (hasDragAndDrop ? 'grab' : 'auto')};

  ${({ showBorderHover, editing }) =>
    showBorderHover &&
    !editing &&
    css`
      &:hover {
        border-color: rgb(179, 179, 179);
        color: rgb(90, 90, 90);
      }
    `}

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}

    ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}

    a {
    height: 100%;
    display: flex;
    align-items: center;
  }
`

export const SCEdit = styled.div<SCTitleProps>`
  opacity: 0;
  visibility: hidden;
  ${({ ableToEdit }) =>
    ableToEdit &&
    css`
      ${SCWrapperTitle}:hover & {
        opacity: 1;
        visibility: visible;
      }
    `}
`
export const SCText = styled.p`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 0 0 5px;
  cursor: pointer;
`

export const SCInput = styled.input<SCTitleProps>`
  padding: 0;
  border: 0;
  height: inherit;
  width: 100%;
  border-radius: 5px;
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`
