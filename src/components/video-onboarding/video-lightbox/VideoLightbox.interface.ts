export interface VideoLightboxProps {
  onCloseVideo: () => void
  videoUrl: string
  /**
   * Indica donde se va a renderizar el modal
   */
  elementId: string

  /**
   * Eventos de amplitud
   */
  eventNameCloseVideo?: string
  sectionName?: string
  companyId?: number
}
