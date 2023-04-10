import { ReactElement } from 'react'

export interface ModalStyleProps {
  afterX?: number
  top?: number
  right?: number
  width?: string
  height?: string
  maxWidth?: number
  maxHeight?: number
  minWidth?: number
  minHeight?: number
  arrow?: boolean
}

export interface ModalComponentProp {
  styles?: ModalStyleProps
  children: ReactElement
}
