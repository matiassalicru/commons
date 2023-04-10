import { FunctionComponent } from 'react'

// Images
import { SvgIcon } from '../../../../../svg-icon'

// Types
import { TitleTypes } from './TitleContainer.interface'

// Styles
import { SCTitleContent, SCTitle, SCIconWrapper, TitleWrapper } from './styles'

export const TitleContainer: FunctionComponent<TitleTypes> = ({ title, onClose, onGoBack }) => {
  return (
    <TitleWrapper data-testid="go back title-button" onClick={onGoBack}>
      <SCIconWrapper data-testid="go back button">
        <SvgIcon iconName="chevron-left" />
      </SCIconWrapper>
      <SCTitleContent>
        <SCTitle>{title}</SCTitle>
      </SCTitleContent>
      <SCIconWrapper data-testid="close button" onClick={onClose}>
        <SvgIcon iconName="times" />
      </SCIconWrapper>
    </TitleWrapper>
  )
}
