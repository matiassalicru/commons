import { ReactElement, useState } from 'react'
import { Tooltip } from '@projectcor/tooltip/lib'
import { BCPProps } from './BarProccessCustom.interface'
import { SCBPCWrapper, SCBPCInsideWrapper, SCBPChargedBar, SCBPCSuggestedBar } from './style'

export function BarProgressCustom({
  baseColor = '#f9f9f9',
  height,
  place = 'bottom',
  delay = 500,
  emptyHoursContent,
  chargeBarContent,
  chargedProgress,
  suggestionProgress,
  suggestedBarContent,
}: BCPProps): ReactElement {
  // Constants
  const MAX_PERCENTAGE = 100
  const MIN_VALUE = 0
  // returns the type of color according to the percentage of loaded hours
  const typeColor = (progress: number): string => {
    if (progress <= 35) return 'error'
    if (progress > 35 && progress < 81) return 'warning'
    return 'success'
  }

  const validateHours = chargedProgress > MIN_VALUE || suggestionProgress > MIN_VALUE

  const sumHours = chargedProgress + suggestionProgress

  const fullProgress = (progress: number): boolean => progress < MAX_PERCENTAGE

  const isRoundedSuggestionBar = sumHours < MAX_PERCENTAGE

  const [isEmpty] = useState(true)

  const transitionValues = {
    duration: 2,
    ease: 'easeOut',
  }

  const transitionValuesSuggestion = {
    duration: 2,
    ease: 'easeOut',
    delay: 2,
  }

  return (
    <>
      {validateHours ? (
        <SCBPCWrapper borderRadius={50} baseColor={baseColor} height={height} isEmpty={isEmpty}>
          {!!chargedProgress && (
            <SCBPCInsideWrapper
              transition={{
                x: transitionValues,
              }}
              initial={{
                width: 0,
              }}
              animate={{
                width: `${chargedProgress}%`,
              }}
              progress={chargedProgress}
            >
              <Tooltip placement={place} title={chargeBarContent} delay={delay}>
                <SCBPChargedBar
                  progress={chargedProgress}
                  chargedBar
                  withSecondBar={suggestionProgress !== MIN_VALUE}
                  notFullProgress={fullProgress(chargedProgress)}
                  typeColor={typeColor(chargedProgress)}
                  borderRadius={50}
                  data-testid="SCBPCharged"
                />
              </Tooltip>
            </SCBPCInsideWrapper>
          )}
          {!!suggestionProgress && fullProgress(chargedProgress) && (
            <SCBPCInsideWrapper
              transition={{
                x: transitionValuesSuggestion,
              }}
              initial={{
                width: 0,
              }}
              animate={{
                width: `${suggestionProgress}%`,
              }}
              progress={suggestionProgress}
              height={height}
            >
              <Tooltip placement={place} title={suggestedBarContent} delay={delay}>
                <SCBPCSuggestedBar
                  progress={suggestionProgress}
                  borderRadius={50}
                  notFullProgress={fullProgress(suggestionProgress)}
                  withFirstBar={!!chargedProgress}
                  isRoundedSuggestionBar={isRoundedSuggestionBar}
                  data-testid="SCBPSuggested"
                />
              </Tooltip>
            </SCBPCInsideWrapper>
          )}
        </SCBPCWrapper>
      ) : (
        <Tooltip title={emptyHoursContent} placement={place}>
          <SCBPCWrapper borderRadius={50} baseColor={baseColor} height={height} data-testid="SCBPEmptyHours" />
        </Tooltip>
      )}
    </>
  )
}
