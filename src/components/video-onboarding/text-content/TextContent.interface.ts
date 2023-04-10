export interface TextContentProps {
  title: string
  paragraph?: string
  textOverflow?: boolean
  tutorialLink?: string
  isCollapsed?: boolean
  onShowVideo?: () => void
  collapsedDescription?: string
  /**
   * Eventos de amplitud
   */
  eventNameViewCourse?: string
  sectionName?: string
  companyId?: number
}

export interface TextContentStyleProps {
  isCollapsed?: boolean
  textOverflow?: boolean
  hasAction?: boolean
  tutorialLink?: string
  hasTutorialLink?: string
  onClick?: () => void
}
