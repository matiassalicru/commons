import { HTMLMotionProps, ForwardRefComponent } from 'framer-motion'
import { MutableRefObject } from 'react'

type handleProps = { deliverable?: number }

export enum DeliverableStatus {
  COUNTER = 'counter',
  CHILDREN = 'children',
}
export interface DeliverableProps {
  deliverable: number // cantidad de entregables
  handleUpdateTask: (arg0: handleProps) => void // callback para actualizar la tarea
  handleCheckboxStatus: (status: DeliverableStatus) => void //
  onStartEditing?: () => void
  onFinishEditing?: () => void
  onInputFocus?: () => void
  onInputBlur?: () => void
  onCancel?: () => void
  onInfoIconHover?: () => void
  onIconHover?: () => void
  simpleVersion: boolean // muestra una version simplificada
  archived: boolean // version archivada cambia el color.
  tooltip: boolean // muestra el icono con tooltip.
  iconText: string // texto del tooltip del icono de informacion
  editable: boolean // posibilidad de editar input
  deliverableStatus?: DeliverableStatus //
  loading?: boolean
  switchIdentify?: string
}

export interface DeliverableInputProps {
  onKeyDown: (arg0?) => void
  updateValue: (arg0?) => void
  value: string | number
  disabled: boolean
  editing: boolean
  autoComplete: boolean
  handleClickSave: () => void
  handleClickCancel: () => void
  handleFocus?: () => void
  handleBlur?: () => void
  editable: boolean
  sv: boolean
  collapsed?: boolean
  deliverableStatus?: DeliverableStatus
  refInput?: MutableRefObject<HTMLInputElement>
}

// Styled Component Props
export interface SCDeliverableProp {
  align?: boolean
  archived?: boolean
  editable?: boolean
  tooltip?: boolean
  sv?: boolean
  editing?: boolean
  collapsed?: boolean
  deliverableStatus?: DeliverableStatus
  cursorPointer?: boolean
}

// prettier-ignore
export type SCMotionAndDeliverableProps = ForwardRefComponent<HTMLDivElement, HTMLMotionProps<'div'> & SCDeliverableProp>

export type SCLoadingProp = Pick<DeliverableInputProps, 'sv'>
