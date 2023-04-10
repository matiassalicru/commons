import { ReactElement } from 'react'
import Colors from '@projectcor/theme/lib/base/colors'
import { ChevronDown } from '@projectcor/icons/lib/components/ChevronDown'
import { TitleMaker } from '../title-maker'
import { BarProgressCustom } from './bar-progress-custom'
import { ProgressBarProps } from './ProgressBar.interface'
import { SCPBContent, SCPBWrapper, SCPBProgressWrapper, SCPBPercentageHour, SCPBWrapperIcon } from './style'

export function ProgressBar({
  margin = '0px 10px',
  height = 8,
  colorBaseBar,
  title,
  titleSize = 12,
  titleVariant = 'uppercase',
  emptyHoursContent = '',
  chargedProgress = 0,
  chargeBarContent,
  suggestedBarContent,
  suggestionProgress = 0,
  textCursor = 'pointer',
}: ProgressBarProps): ReactElement {
  return (
    <SCPBContent margin={margin} data-testid="SCPBContent">
      <SCPBWrapper>
        <TitleMaker
          text={title}
          textSize={titleSize}
          textVariant={titleVariant}
          textWeight={700}
          textMargin="0 5px 0 0"
          letterSpacing={0}
          textCursor={textCursor}
          textColor={Colors.grey[400]}
        />
        <SCPBPercentageHour>{`${chargedProgress}%`}</SCPBPercentageHour>
      </SCPBWrapper>
      <SCPBProgressWrapper>
        <BarProgressCustom
          height={height}
          chargedProgress={chargedProgress}
          chargeBarContent={chargeBarContent}
          baseColor={colorBaseBar}
          suggestionProgress={suggestionProgress}
          suggestedBarContent={suggestedBarContent}
          emptyHoursContent={emptyHoursContent}
        />
        <SCPBWrapperIcon data-testid="SCPBWrapperIcon">
          <ChevronDown width="10px" height="10px" color="#666666" />
        </SCPBWrapperIcon>
      </SCPBProgressWrapper>
    </SCPBContent>
  )
}
