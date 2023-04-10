import styled, { css } from 'styled-components'

export const LYWrapper = styled.div`
  width: 36px;
  visibility: ${({ showPlay }) => (showPlay ? 'visible' : 'hidden')};
  ${({ isPlay }) =>
    isPlay &&
    css`
      button {
        width: 36px;
        height: 36px;
        font-size: 21px;
      }
    `}
`
