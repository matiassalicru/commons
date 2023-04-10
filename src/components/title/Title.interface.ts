export interface TitleProps {
  // URL a donde va a dirigirse en caso de que isRouter sea true
  href?: string
  // Indica si se va a cambiar la ruta al dar click en el titulo
  isRouter?: boolean
  // Tooltip que se va a mostrar en el título
  tooltip?: string
  // Callback a ejecutar click en el título, se usa cuando isRouter es false
  clickTitle?: () => void
  // Texto del título
  content: string
  // ID de la entidad a actualizar
  entityId: string
  // Indica si está habilitado para actualizar el título
  ableToEdit: boolean
  // Callback a ejecutar cuando se actualiza el título
  changeTitle: (arg0?: string, arg1?: string) => void
  // Cuerpo de texto
  fontSize?: string
  // Peso de texto
  fontWeight?: string | number
  // Muestra borde en hover
  showBorderHover?: boolean
  // Cantidad máxima de carácteres
  maxLength?: string
  // Callback ejecutado al iniciar la edicion del title
  onStartEdition?: (event?) => void
  // Callback ejecutado al finalizar la edicion del title
  onCloseEdition?: (event?) => void
  // Boolean que indica si es subtarea
  showSubtaskIcon?: boolean
  // Muestra estilos de drag and drop
  hasDragAndDrop?: boolean
}

// SC Props
export interface SCTitleProps {
  ableToEdit?: boolean
  showBorderHover?: boolean
  editing?: boolean
  fontWeight?: string | number
  fontSize?: string
  hasDragAndDrop?: boolean
}
