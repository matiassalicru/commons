// Type of alert available
export enum VariantType {
  success = 'success',
  danger = 'danger',
  loading = 'loading',
}

// Position of the alert
export enum PositionType {
  centerBottom = 'center-bottom',
  rightBottom = 'right-bottom',
  rightTop = 'right-top',
}

interface WithLinkProps {
  title: string
  route: string
}

export interface AlertPortalProps {
  /**
   * position of the alert
   */
  position: PositionType
  /**
   * message to display
   */
  text?: string
  /**
   * type of alert
   */
  variant: VariantType
  /**
   * include a icon, name of the awesome icon
   */
  icon?: string
  /**
   * when to hide
   */
  timeOut?: number
  /**
   * action to close the modal
   */
  onClose: () => void
  /**
   * dom where to add in the document. ReactPortal
   */
  idPortal: string
  /**
   * enable link need if the message have one.
   */
  withLink?: WithLinkProps
  /**
   * enable a loading icon.
   */
  spinner: false
}

// StyleComponent Props
export interface StyleAlertPortalPropsPosition {
  position: string
}

export interface StyleAlertPortalPropsVariant {
  variant: string
}
