export interface SpinnerLottieProps {
  // Tamaño en ancho y alto del spinner expresado en px.
  size?: number
  // Prop para determiar si el spinner tiene sombra.
  withShadow?: boolean
  // Tamaño en ancho del spinner expresado en px.
  width?: number
  // Tamaño en alto del spinner expresado en px.
  height?: number
  // Prop para determiar el color del background.
  background?: string
  // Prop para determiar el tipo de spinner a mostrar puede ser default, cor-grey, cor-yellow.
  type?: string
}

// Style Component Props
export interface SCSpinnerLottieProps {
  withShadow?: boolean
  size?: number
  width?: number
  height?: number
  background?: string
}
