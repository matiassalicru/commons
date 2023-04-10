export interface baseConfigType {
  cardSize: string
  showGraphic: boolean
  maxLine: number
  minLine: number
}

export interface TinyLinkProps {
  path: string
  config?: baseConfigType
}
