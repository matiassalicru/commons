export interface BarProgressProp {
  progress: number // Número que representa el porcentaje de progreso.
  colorPrimaryBar: string // Color de la barra que representa el progreso.
  height?: number // Alto de la barra.
  borderRadius?: number // Número para la propiedad border-radius.
  colorBaseBar?: string // Color de la barra base.
}

// StyleComponent Props
export interface StyleBarProgressWrapper {
  propHeight?: number
  borderRadius?: number
}

export interface StyleBarProgressBase {
  propColor?: string
}

export interface StyleBarProgressPrimary {
  progress: number
  setColor: string
}
