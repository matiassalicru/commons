import { ReactElement, useEffect, useState } from 'react'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
import { InformationCircle } from '@projectcor/icons/lib/components/InformationCircle'
import { CardHeaderMyHoursProps } from './CardHeaderMyHours.interface'
import {
  SCCMHConfirmHeaderNIH,
  SCCMHHour,
  SCCMHInfoContainer,
  SCCMHInfoHour,
  SCCMHInfoTitle,
  SCCMHInfoWrapper,
  SCCMHModalHeaderWrapper,
  SCCMHSuggestedHeaderNIH,
  SCCMHWrapperTooltipIcon,
  SCCMHWrapperTooltipLink,
  SCCMHWrapperTooltipMessage,
  SCIndicator,
} from './style'

export const CardHeaderMyHours = ({
  subtitle,
  infoHour,
  userInfo = '',
  titleSuggestion,
  titleTracked,
  tooltipMessage = '',
  exceedsDailyHour = false,
  showIndicator = false,
  indicatorColor = '',
  showColumns = true,
  isProgressBar = false,
  tooltipSuggestion,
  tooltipRedirect,
  urlRedirect,
}: CardHeaderMyHoursProps): ReactElement => {
  const [infoChargedHour, setInfoChargedHour] = useState<string>('')
  const [exceedsHour, setExceedsHour] = useState<boolean>(false)

  useEffect(() => {
    setInfoChargedHour(infoHour)
  }, [infoHour])

  useEffect(() => {
    setExceedsHour(exceedsDailyHour)
  }, [exceedsDailyHour])

  const tooltipWithLink = () => (
    <SCCMHWrapperTooltipMessage>
      {`${tooltipSuggestion}, `}
      <SCCMHWrapperTooltipLink href={urlRedirect} target="_blank" rel="noopener noreferrer">
        {tooltipRedirect}
      </SCCMHWrapperTooltipLink>
    </SCCMHWrapperTooltipMessage>
  )

  return (
    <SCCMHInfoWrapper>
      <SCCMHInfoContainer>
        <SCCMHInfoTitle>{subtitle}</SCCMHInfoTitle>
      </SCCMHInfoContainer>
      {showColumns && (
        <SCCMHModalHeaderWrapper isProgressBar={isProgressBar}>
          <SCCMHSuggestedHeaderNIH>
            <span>{titleSuggestion}</span>
            <Tooltip placement="top" title={tooltipWithLink()} disableInteractive={false}>
              <SCCMHWrapperTooltipIcon>
                <InformationCircle width="20px" height="20px" color="#666666" />
              </SCCMHWrapperTooltipIcon>
            </Tooltip>
          </SCCMHSuggestedHeaderNIH>
          <SCCMHConfirmHeaderNIH>
            <span>{titleTracked}</span>
            <Tooltip
              placement={isProgressBar ? 'bottom' : 'top'}
              title={tooltipMessage}
              disableHoverListener={!userInfo}
            >
              <SCCMHInfoHour hasHours={infoChargedHour !== '0h 0m'}>
                <span>|</span>
                <SCCMHHour userInfo={userInfo} exceedsDailyHour={exceedsHour}>
                  {infoChargedHour}
                </SCCMHHour>
                {!!userInfo && <div>{`/ ${userInfo}h`}</div>}
                {!isProgressBar && showIndicator && <SCIndicator role="status" indicatorColor={indicatorColor} />}
              </SCCMHInfoHour>
            </Tooltip>
          </SCCMHConfirmHeaderNIH>
        </SCCMHModalHeaderWrapper>
      )}
    </SCCMHInfoWrapper>
  )
}
