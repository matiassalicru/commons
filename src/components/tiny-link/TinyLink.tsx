import { ReactTinyLink } from 'react-tiny-link'
import { FunctionComponent } from 'react'
// Styles
import { SCWrapper } from './style'
import { TinyLinkProps, baseConfigType } from './TinyLink.interface'

const BASE_CONFIG = {
  cardSize: 'small',
  showGraphic: true,
  maxLine: 2,
  minLine: 1,
} as baseConfigType

// eslint-disable-next-line no-useless-escape
const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

export const TinyLink: FunctionComponent<TinyLinkProps> = ({ path, config = BASE_CONFIG }) => {
  try {
    const { cardSize, showGraphic, maxLine, minLine } = config

    const onError = error => {
      console.error(error)
    }

    if (!urlRegex.test(path)) throw Error('Invalid url')

    return (
      <SCWrapper>
        <ReactTinyLink
          cardSize={cardSize}
          showGraphic={showGraphic}
          maxLine={maxLine}
          minLine={minLine}
          onError={onError}
          url={path}
        />
      </SCWrapper>
    )
  } catch (error) {
    console.error(error)
    return null
  }
}
