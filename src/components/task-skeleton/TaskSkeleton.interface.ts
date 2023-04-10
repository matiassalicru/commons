export interface TaskSkeletonProps {
  /**
   *  Cantidad rows de skeletons a mostrar.
   */
  quantity?: number
  /**
   * Muestra o no un primer item (usado en Mis Tareas)
   */
  withFirstItem?: boolean
  /**
   * Muestra o no un skeleton para botones de acciones
   */
  withActions?: boolean
}

export interface SCTaskSkeletonProps {
  withFirstItem: boolean
}
