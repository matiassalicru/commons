export interface OnboardingPresentationStyleProps {
  letsRotate: boolean
  isCollapsed: boolean
}

export interface OnboardingPresentationProps {
  title: string
  description: string
  tutorialLink?: string
  thumbnail: string
  alt?: string
  elementId: string
  videoUrl: string
  sectionName?: string
  companyId?: number
  collapsedDescription?: string
  /**
   * event triggered onClick view link
   */
  eventNameViewCourse?: string
  /**
   * event triggered on chevon to collapse
   */
  eventNameCollapsed?: string
  /**
   * event triggered on chevron to expand
   */
  eventNameExpand?: string
  /**
   * event triggered onClick video
   */
  eventNameViewVideo?: string
  /**
   * event triggered onClick video collapsed
   */
  eventNameViewReducedVideo?: string
  /**
   * event triggered onClick close video player
   */
  eventNameCloseVideo?: string
  /**
   * localStorage collapsed managment
   */
  localStorageKey: string
}
