// eslint-disable-next-line no-use-before-define
import React from 'react'
// Styles
import { SCTitleMaker } from './style'
import { TitleMakerProps } from './TitleMaker.interface'

/**
 * Componente para construir textos.
 * Se recomiendo implementarse para títulos. Ej: Deadline, Estado, Prioridad, etc.
 */
export const TitleMaker = React.memo(
  ({
    textSize = 12,
    textColor = '#5A5A5A',
    text = '',
    textVariant = 'uppercase',
    textDisplay = 'block',
    textMargin = '0 0 0 0',
    textWeight = 500,
    textCursor = 'default',
    letterSpacing = '1',
  }: TitleMakerProps) => {
    return (
      <SCTitleMaker
        textSize={textSize}
        textColor={textColor}
        textVariant={textVariant}
        textDisplay={textDisplay}
        textMargin={textMargin}
        textWeight={textWeight}
        textCursor={textCursor}
        letterSpacingSize={letterSpacing}
      >
        {text}
      </SCTitleMaker>
    )
  }
)
