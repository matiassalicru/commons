import styled from 'styled-components'
import { SCTitleMakerProps } from './TitleMaker.interface'

export const SCTitleMaker = styled.div<SCTitleMakerProps>`
  display: ${({ textDisplay }) => textDisplay};
  text-transform: ${({ textVariant }) => textVariant};
  font-size: ${({ textSize }) => `${textSize}px`};
  font-weight: ${({ textWeight }) => textWeight};
  color: ${({ textColor }) => textColor};
  margin: ${({ textMargin }) => textMargin};
  cursor: ${({ textCursor }) => textCursor};
  letter-spacing: ${({ letterSpacingSize }) => `${letterSpacingSize}px`};
`
