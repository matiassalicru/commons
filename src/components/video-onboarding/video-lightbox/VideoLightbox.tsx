import { ReactPortal, useEffect } from 'react'
import ReactDOM from 'react-dom'
// COR Commons
import { ButtonIconCustom } from '../../button-icon-custom'
// Utils
import { validateKeyPress } from '../../../utils/validateKeyPress'
import dispatchAmplitude from '../../../utils/dispatchAmplitude'
// Constants
import { KEY_ESCAPE } from '../../../constants'
// Styles
import { SCLightBox, SCContent, SCWrapperFile, SCWrapperVideo, SCWrapperButton, SCVideo } from './style'
import { VideoLightboxProps } from './VideoLightbox.interface'

function VideoLightbox({ onCloseVideo, videoUrl, eventNameCloseVideo, sectionName, companyId }: VideoLightboxProps) {
  const handleCloseVideo = () => {
    // Amplitude event
    if (eventNameCloseVideo && sectionName && companyId) {
      dispatchAmplitude(eventNameCloseVideo, companyId, {
        section: sectionName,
      })
    }
    onCloseVideo()
  }

  const handleKeyDown = event => validateKeyPress(event, [KEY_ESCAPE]) && onCloseVideo()

  useEffect(() => {
    const body = document.querySelector('body')
    if (body) body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (body) body.style.overflow = 'auto'
    }
  }, [])

  return (
    <SCLightBox>
      <SCContent>
        <SCWrapperFile>
          <SCWrapperVideo>
            <SCWrapperButton>
              <ButtonIconCustom
                icon="times"
                size={40}
                iconSize={20}
                onClikAction={handleCloseVideo}
                color="#5a5a5a"
                background="#f3f3f3"
                onHoverBackground="#a4adb5"
                onHoverColor="#f3f3f3"
              />
            </SCWrapperButton>
            <SCVideo
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </SCWrapperVideo>
        </SCWrapperFile>
      </SCContent>
    </SCLightBox>
  )
}

export function VideoLightboxPortal(props: VideoLightboxProps): ReactPortal | null {
  const { elementId } = props
  const defaultElementId = elementId !== '' ? elementId : 'modals-portal'
  const selector = elementId.includes('#')
    ? document.querySelector(defaultElementId)
    : document.querySelector(`#${defaultElementId}`)
  return selector ? ReactDOM.createPortal(<VideoLightbox {...props} />, selector) : null
}
