import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { ModalStyleProps } from './GenericModal.interface'

export const SCMCContainer = styled.div<Pick<ModalStyleProps, 'top' | 'right' | 'afterX' | 'arrow'>>`
  position: absolute;
  right: ${({ right }) => right || 0}px;
  top: ${({ top }) => top || 0}px;
  background: ${Colors.white.main};

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    right: ${({ afterX }) => (afterX ? 0 + afterX : 0)}px;
    border: 9px solid ${Colors.transparent.main};
  }
  ${({ arrow }) =>
    !arrow &&
    `
    &::before {
      z-index: 0;
      transform: translateY(-16px);
      border-bottom-color: ${Colors.white.main};
    }
    &::after {
      z-index: -1;
      top: 0;
      transform: translateY(-17px);
      border-bottom-color: ${Colors.grey[100]};
    }
  `}
`

export const SCMCWrapper = styled.div<ModalStyleProps>`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '100px'};
  box-shadow: rgb(79 79 79 / 40%) 0px 2px 10px 0px;
  border: solid 1px ${Colors.grey[100]};
  padding: 16px;
  max-width: ${({ maxWidth }) => maxWidth || 500}px;
  max-height: ${({ maxHeight }) => maxHeight || 500}px;
`
