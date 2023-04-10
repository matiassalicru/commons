import { useTranslation } from 'react-i18next'
// UI Components
import { InformationCircle } from '@projectcor/icons/lib/components/InformationCircle'
import Pallete from '@projectcor/theme/lib/base/colors'
import { Tooltip } from '@projectcor/tooltipv2/lib'
import { ButtonCustom } from '../button-custom'
import { SpinnerLottie } from '../spinner-lottie'
// Styles
import {
  SCContent,
  SCHeader,
  SCDescription,
  SCWrapperButton,
  SCTitle,
  SCContentButton,
  SCActive,
  SCCategory,
  SCProvider,
} from './style'
import { CardIntegrationsProps } from './CardIntegrations.interface'

export const CardIntegrations = ({
  type,
  link,
  onConnect = () => true,
  infoButton = false,
  handleClickInfoButton = () => true,
  isActive = false,
  description,
  title,
  category,
  isLoading = false,
  appLogo,
  tooltipInfoButton = '',
  provider,
}: CardIntegrationsProps) => {
  const { t } = useTranslation('settings')

  const clickConnectApp = e => {
    e.preventDefault()
    if (link) {
      window.open(link, '_blank')
    }
    onConnect(type)
  }

  return (
    <SCContent id={`card-${type}-container`} category={category}>
      {category && (
        <SCCategory>
          {isActive && <SCActive />}
          {category}
        </SCCategory>
      )}
      {infoButton && (
        <Tooltip title={tooltipInfoButton} placement="top">
          <SCContentButton onClick={handleClickInfoButton} data-testid="infoButton">
            <InformationCircle color={Pallete.text.primary} />
          </SCContentButton>
        </Tooltip>
      )}
      <SCHeader>
        {appLogo}
        <SCTitle>{title}</SCTitle>
      </SCHeader>
      <SCDescription>{description}</SCDescription>
      <SCWrapperButton id={`${type}-button-connect`}>
        {isLoading ? (
          <SpinnerLottie size={25} />
        ) : (
          <ButtonCustom variantButton={isActive ? 'outline' : 'contained'} onClick={clickConnectApp}>
            {isActive ? t('unlink_app') : t('connect')}
          </ButtonCustom>
        )}
      </SCWrapperButton>
      {provider && <SCProvider>{provider}</SCProvider>}
    </SCContent>
  )
}
