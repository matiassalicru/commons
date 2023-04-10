import { ReactElement } from 'react'
// Styles
import { SCVideoThumbnail, SCWrapperPlay } from './style'
import { ThumbnailProps } from './Thumbnail.interface'
// COR Commons
import { ButtonIconCustom } from '../../button-icon-custom'

export function Thumbnail({ thumbnail, onClickPlay, alt }: ThumbnailProps): ReactElement {
  return (
    <SCVideoThumbnail thumbnail={thumbnail} title={alt}>
      <SCWrapperPlay>
        <ButtonIconCustom
          icon="play"
          size={50}
          iconSize={25}
          onClikAction={onClickPlay}
          color="#ffffff"
          background="#0094ca"
          dataTestId="onboarding_video_play_button"
        />
      </SCWrapperPlay>
    </SCVideoThumbnail>
  )
}
