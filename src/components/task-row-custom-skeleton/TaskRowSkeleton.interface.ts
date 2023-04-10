export interface TaskRowSkeletonProps {
  /**
   *  Cantidad rows de skeletons a mostrar.
   */
  quantity?: number
  /**
   * Muestra o no un primer item (usado en Mis Tareas)
   */
  hasCheckBox?: boolean
  /**
   * Muestra o no un skeleton para botones de acciones
   */
  withActions?: boolean
  /**
   * Boolean that changes the height of the row
   */
  isLargeTask?: boolean
  /**
   * Object with the columns to show
   */
  columns: string[]
}

export interface SCTaskRowSkeletonProps {
  hasCheckBox: boolean
  columns: string[]
}
