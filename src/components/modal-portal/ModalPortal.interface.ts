import React from 'react'

// Type of button to display
export enum VariantType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WHITE = 'white',
  DANGER = 'danger',
}

export interface ModalPortalProps {
  /**
   * children que va contener el modal
   */
  children?: React.ReactNode[] | React.ReactNode
  /**
   * Título del boton de cancelar
   */
  titleCancel?: string
  /**
   * Título del boton de aceptar
   */
  titleAccept?: string
  /**
   * Texto del body del modal
   */
  textContent?: string
  /**
   * Identifica si hay ancho máximo
   */
  withMaxWidth?: boolean
  /**
   * Titulo del modal.
   */
  title: string
  /**
   * Identifica si se muestra el boton de cancelar
   */
  showCancelButton?: boolean
  /**
   * Identifica si se muestra el boton de aceptar
   */
  showAcceptButton?: boolean
  /**
   * Variente de color del título
   */
  variant: string
  /**
   * Callback para cerrar el modal
   */
  closeModal: () => void
  /**
   * Indica donde se va a renderizar el modal
   */
  elementId: string
  /*
   * Objeto con traducciones de aceptar y cancelar por default
   */
  translations: {
    accept?: string
    cancel?: string
  }
  /**
   * Callback para cancelar el modal
   */
  clickButtonCancel: () => void
  /**
   * Callback para aceptar el modal
   */
  clickButtonAccept: () => void
  /**
   * Max width del modal
   */
  maxWidth?: string
  /**
   * Indica si el botón está habilitado
   */
  acceptDisabled?: boolean
  /**
   * Indica si se muestra la X para cerrar el modal en la esquina derecha superior
   */
  showCloseButton?: boolean
  /**
   * Callback click en X para cerrar modal
   */
  clickButtonClose?: () => void
  hidden?: boolean
}

// Style Component Props
export interface SCModalPortalProps {
  withMaxWidth?: boolean
  variant?: string
  maxWidth?: string
  display?: string
}
