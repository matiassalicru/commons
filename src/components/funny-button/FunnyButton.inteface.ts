export enum Place {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

export enum Size {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export interface FunnyButtonProps {
  active?: boolean // Booleano para manjear el disabled del botón.
  size?: Size // Tamaño el alto y ancho para aplicar a el circulo que envuelva al icono.
  onClikAction: () => void // Callback que se ejecuta con el click.
  //= "paper-plane",
  icon: string // Nombre del icono a utilizar.
  withTooltip?: boolean // Booleano para saber si es necesario mostrar un tooltip.
  wordingTooltip?: string // Texto para el tooltip.
  forTooltip?: string // ID(for) para el tooltip.
  place?: Place // Ubicación del tooltip.
}

// StyleComponent Props
export interface StyleFunnyButtonProps {
  isActive?: boolean
  size?: Size
  isPlane: boolean
}
