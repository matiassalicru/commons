export interface TitleMakerProps {
  // Tamaño de fuente.
  textSize?: number
  // Color del texto.
  textColor?: string
  // Contenido (texto a mostrar).
  text?: string
  // Variante de texto (uppercase, capitalize, etc).
  textVariant?: string
  // Box model del div.
  textDisplay?: string
  // Margen del div.
  textMargin?: string
  // Peso de la fuente.
  textWeight?: number
  // Cursor del div.
  textCursor?: string
  // Espacio entre letras
  letterSpacing?: number | string
}

// SC Props
export interface SCTitleMakerProps {
  textSize?: number
  textColor?: string
  textVariant?: string
  textDisplay?: string
  textMargin?: string
  textWeight?: number
  textCursor?: string
  letterSpacingSize?: number | string
}
