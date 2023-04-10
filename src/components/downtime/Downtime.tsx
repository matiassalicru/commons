import { ReactElement } from 'react'

// UI
import Divider from '@material-ui/core/Divider'
import { Cor } from '@projectcor/logos/lib'
import { Downtime as DowntimeIllustration, OfficeWork, OpenMap, Padlock } from '@projectcor/illustrations/lib'

// Styles
import { SCContainer } from './style'
import { DowntimeProps } from './Downtime.interface'

// const USER_IMAGE_DEFAULT = '/images/user.png'

export function Downtime({
  illustration = 'Downtime',
  title = '',
  primaryText = '',
  secondaryText = '',
  footer = '',
}: DowntimeProps): ReactElement {
  const illustrationsMap = {
    Downtime: DowntimeIllustration,
    OfficeWork,
    OpenMap,
    Padlock,
  }

  const IllustrationComponent = illustrationsMap[illustration]
  return (
    <SCContainer>
      {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
      <IllustrationComponent />
      {primaryText && <h1 dangerouslySetInnerHTML={{ __html: primaryText }} />}
      {secondaryText && <p dangerouslySetInnerHTML={{ __html: secondaryText }} />}
      {footer && (
        <>
          <Divider />
          <h5 dangerouslySetInnerHTML={{ __html: footer }} />
        </>
      )}
      <Cor />
    </SCContainer>
  )
}
