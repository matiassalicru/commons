import { useState, useCallback, ReactElement, useEffect } from 'react'
// Styles
import { SCMain, SCBox, SCWrapperClose } from './style'
// COR Commons
import { ButtonIconCustom } from '../../button-icon-custom'
// UI Components
import { VideoLightboxPortal } from '../video-lightbox'
import { TextContent } from '../text-content'
import { Thumbnail } from '../thumbnail/Thumbnail'
import { OnboardingPresentationProps } from './OnboardingPresentation.interface'
// Utils
import dispatchAmplitude from '../../../utils/dispatchAmplitude'
// Hooks
import { useLocalStorage } from '../../../hooks/use-local-storage'

export function OnboardingPresentation({
  title,
  description,
  tutorialLink,
  thumbnail,
  alt = '',
  elementId,
  videoUrl,
  sectionName,
  companyId,
  eventNameViewCourse,
  eventNameCollapsed,
  eventNameExpand,
  eventNameViewVideo,
  eventNameViewReducedVideo,
  eventNameCloseVideo,
  collapsedDescription,
  localStorageKey,
}: OnboardingPresentationProps): ReactElement {
  const [value, setValue] = useLocalStorage(`onboardingStatus`, {})
  const [showBox, setShowBox] = useState(true)
  const [showVideo, setShowVideo] = useState(false)

  const handleClickPlay = useCallback(() => {
    // Amplitude event
    if (eventNameViewVideo && eventNameViewReducedVideo && sectionName && companyId) {
      const eventNameAux = showBox ? eventNameViewVideo : eventNameViewReducedVideo
      dispatchAmplitude(eventNameAux, companyId, {
        section: sectionName,
      })
    }
    setShowVideo(true)
  }, [])

  const handleCloseVideo = useCallback(() => {
    setShowVideo(false)
  }, [])

  const toggleOrCreateStoreKey = prevState => {
    // Toggle if exists
    if (prevState[localStorageKey]) {
      const newValue = !prevState[localStorageKey]?.value
      return {
        ...prevState,
        [localStorageKey]: { value: newValue },
      }
    }
    // Create default to false if it doesn't exists
    return {
      ...prevState,
      [localStorageKey]: { value: false },
    }
  }

  const handleToggleBox = () => {
    // Amplitude event
    if (eventNameExpand && eventNameCollapsed && sectionName && companyId) {
      const eventNameAux = showBox ? eventNameCollapsed : eventNameExpand
      dispatchAmplitude(eventNameAux, companyId, {
        section: sectionName,
      })
    }
    setShowBox(prevState => !prevState)

    // Handle collapsed/expanded state in localStorage
    setValue(prevState => toggleOrCreateStoreKey(prevState))
  }

  useEffect(() => {
    if (value[localStorageKey]) setShowBox(value[localStorageKey].value)
  }, [value[localStorageKey]])

  return (
    <SCMain isCollapsed={!showBox}>
      {showBox ? (
        <SCBox>
          <TextContent
            title={title}
            paragraph={description}
            tutorialLink={tutorialLink}
            eventNameViewCourse={eventNameViewCourse}
            sectionName={sectionName}
            companyId={companyId}
          />
          <Thumbnail thumbnail={thumbnail} alt={alt} onClickPlay={handleClickPlay} />
        </SCBox>
      ) : (
        <TextContent
          title={title}
          textOverflow
          eventNameViewCourse={eventNameViewCourse}
          sectionName={sectionName}
          companyId={companyId}
          isCollapsed
          collapsedDescription={collapsedDescription}
          onShowVideo={handleClickPlay}
        />
      )}
      <SCWrapperClose letsRotate={showBox}>
        <ButtonIconCustom
          dataTestId="minimize-button"
          icon="chevron-down"
          size={25}
          iconSize={15}
          onClikAction={handleToggleBox}
          color="#5a5a5a"
          background="#ffffff"
          onHoverBackground="#a4adb5"
          onHoverColor="#f3f3f3"
        />
      </SCWrapperClose>
      {showVideo && (
        <VideoLightboxPortal
          elementId={elementId}
          videoUrl={videoUrl}
          onCloseVideo={handleCloseVideo}
          eventNameCloseVideo={eventNameCloseVideo}
          sectionName={sectionName}
          companyId={companyId}
        />
      )}
    </SCMain>
  )
}
