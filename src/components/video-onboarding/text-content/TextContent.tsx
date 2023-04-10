import { ReactElement, useCallback } from 'react'
import dispatchAmplitude from '../../../utils/dispatchAmplitude'

// Styled
import { SCTextWrapper, SCTitle, SCText, SCLink } from './styled'
import { TextContentProps } from './TextContent.interface'

export function TextContent({
  title,
  paragraph,
  textOverflow = false,
  tutorialLink,
  eventNameViewCourse = '',
  sectionName = '',
  companyId,
  isCollapsed = false,
  collapsedDescription = '',
  onShowVideo = () => {
    // do-nothing
  },
}: TextContentProps): ReactElement {
  const handlerEventAmplitud = useCallback(() => {
    if (eventNameViewCourse && sectionName && companyId) {
      // Amplitude event
      dispatchAmplitude(eventNameViewCourse, companyId, {
        section: sectionName,
      })
    }
  }, [])

  return (
    <SCTextWrapper isCollapsed={isCollapsed}>
      <SCTitle>{title}</SCTitle>
      {!isCollapsed ? (
        <SCText textOverflow={textOverflow}>{paragraph}</SCText>
      ) : (
        <SCText hasAction hasTutorialLink={tutorialLink} textOverflow={textOverflow} onClick={onShowVideo}>
          {collapsedDescription}
        </SCText>
      )}
      {tutorialLink && (
        <SCLink href={tutorialLink} target="_blank" onClick={handlerEventAmplitud}>
          Leer más
        </SCLink>
      )}
    </SCTextWrapper>
  )
}
