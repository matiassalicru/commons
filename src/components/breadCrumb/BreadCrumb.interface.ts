type theme = 'default' | 'light'

export interface BreadCrumbProps {
  /**
   * name of the client brand name
   */
  brandName?: string
  /**
   * name of the client
   */
  clientName?: string
  /**
   * name of the client project
   */
  projectName?: string
  /**
   * text for empty client
   */
  withoutClientText?: string
  /**
   * text for empty project
   */
  withoutProjectText?: string
  /**
   * breadcrumb theme
   */
  theme?: theme
}

export interface WrapperProps {
  theme: theme
}
