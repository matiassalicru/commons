import styled, { css } from 'styled-components'
import { SCDropzoneProps } from './Dropzone.interface'

const getColor = props => {
  if (props.isDragAccept) {
    return !props.fromFiles && 'border-color: #00e676; border-style: dashed;'
  }
  if (props.isDragReject) {
    return 'border-color: #ff1744; border-style: dashed;'
  }
  if (props.isDragActive) {
    return 'border-color: #c4c4c4; border-style: solid;'
  }
  if (props.borderDefault) {
    return 'border-color: #c4c4c4; border-style: solid;'
  }
  return 'border: 0'
}

export const SCDropzone = styled.div<SCDropzoneProps>`
  border-width: 1px;
  border-radius: 5px;
  display: ${({ displayGrid }) => (displayGrid ? 'grid' : 'inline')};
  position: relative;
  height: 100%;
  ${props => getColor(props)};
`

export const SCWrapperText = styled.div<SCDropzoneProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #ffffffbf;
  border: 2px dashed #b1b1b1;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
  ${({ isDragActive }) =>
    isDragActive &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const SCText = styled.div`
  margin: auto;
  font-size: 25px;
  color: #b1b1b1;
`
