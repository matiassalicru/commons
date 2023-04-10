import { ReactElement } from 'react'
import { Tooltip } from '@projectcor/tooltip/lib'
import { SuggestionButtonProps, positionProps } from './SuggestionButton.interface'
import { SvgIcon } from '../svg-icon'
import { SCSBWrapper, SCSuggestionButton, SCSBMainWrapper } from './style'

export const SuggestionButton = ({
  position = positionProps.rightUp,
  onClick,
  variant = 'white',
  size = 19,
  children,
  content = '',
  enable = false,
  onHover,
  withPointer = false,
  height = 27,
  place = 'top',
  delay = 200,
  iconSize = 1,
  noAnimation = false,
  grayLogo = false,
  zIndex = 20,
  onTooltipOpen = () => null,
  onTooltipClose = () => null,
}: SuggestionButtonProps): ReactElement => {
  const transitionValues = {
    duration: 0.5,
    yoyo: 5,
    ease: 'easeOut',
  }

  const displacement = !noAnimation ? 4 : 0

  const yStartPositionUp = -(height + size - 8)
  const yStartPositionDown = -(size - 8)

  const animateY = {
    rightUp: [`${yStartPositionUp}px`, `${yStartPositionUp - displacement}px`, `${yStartPositionUp}px`],
    rightDown: [`${yStartPositionDown}px`, `${yStartPositionDown - displacement}px`, `${yStartPositionDown}px`],
    leftUp: [`${yStartPositionUp}px`, `${yStartPositionUp - displacement}px`, `${yStartPositionUp}px`],
    leftDown: [`${yStartPositionDown}px`, `${yStartPositionDown - displacement}px`, `${yStartPositionDown}px`],
    center: [`0px`, `-${displacement}px`, `0px`],
  }

  const corLogo = variant === 'green' ? 'cor-logo-green' : 'cor-logo'
  return (
    <SCSBMainWrapper position={position}>
      {children}
      {enable && (
        <SCSBWrapper
          transition={{
            y: transitionValues,
          }}
          animate={{
            y: animateY[position],
          }}
          data-testValue={animateY[position]}
          exit="exit"
          position={position}
          data-testid="SuggestionButtonWrapper"
          onClick={onClick}
          onMouseOver={onHover}
          zIndex={zIndex}
        >
          <Tooltip placement={place} title={content} enterDelay={delay} onOpen={onTooltipOpen} onClose={onTooltipClose}>
            <SCSuggestionButton
              position={position}
              variant={variant}
              size={size}
              data-tip={content}
              data-for="SGButtonTooltip"
              withPointer={withPointer}
              grayLogo={grayLogo}
              data-testid="SCSuggestionButton"
            >
              <SvgIcon iconName={corLogo} iconSize={iconSize} />
            </SCSuggestionButton>
          </Tooltip>
        </SCSBWrapper>
      )}
    </SCSBMainWrapper>
  )
}
