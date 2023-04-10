import styled from 'styled-components'
import { ThumbnailStyleProps } from './Thumbnail.interface'

export const SCVideoThumbnail = styled.div<ThumbnailStyleProps>`
  position: relative;
  max-width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  ${({ thumbnail }) => `background-image: url(${thumbnail});`};
  background-size: cover;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000000;
    opacity: 0;
    transition: opacity 0.3s;
  }
  &:hover::after {
    opacity: 0.2;
  }

  i {
    transform: translateX(2px) !important;
  }
`

export const SCWrapperPlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 1;
  border-radius: 50%;
  ${SCVideoThumbnail}:hover & {
    box-shadow: 0px 0px 15px #000;
  }
`
