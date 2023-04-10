import { FunctionComponent } from 'react'

// Wording
import { useTranslation } from 'react-i18next'

// UI Components
import { SvgIcon } from '../../../../../svg-icon'

// types
import { TitleTypes } from './TitleContainer.interface'

// Styles
import { SCTitleContent, SCTitle, SCIconWrapper, TitleWrapper } from './styles'

// Constants
import { I18N_SECTION } from '../../../../../../constants/filters/config'

export const TitleContainer: FunctionComponent<TitleTypes> = ({ title, onClose, onGoBack, showBackButton }) => {
  const { t } = useTranslation(I18N_SECTION)

  return (
    <TitleWrapper>
      {showBackButton && (
        <SCIconWrapper aria-label="go back button" onClick={onGoBack} data-robot-id="filters-title-back-icon">
          <SvgIcon iconName="chevron-left" />
        </SCIconWrapper>
      )}
      <SCTitleContent isBackBtnVisible={showBackButton}>
        <SCTitle data-robot-id="filters-title-title">{t(title)}</SCTitle>
      </SCTitleContent>
      <SCIconWrapper aria-label="close button" onClick={onClose} data-robot-id="filters-title-exit-icon">
        <SvgIcon iconName="times" />
      </SCIconWrapper>
    </TitleWrapper>
  )
}
