import { FC } from 'react'
import { CUButton as CustomButtom } from '@projectcor/button/lib/components/CUButton'
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
import { SCBWCWrapper } from './ButtonWithCoachmark.style'
import { ButtonWithCoachmarkProps } from './ButtonWithCoachmark.interface'

export const ButtonWithCoachmark: FC<ButtonWithCoachmarkProps> = ({
  description = '',
  buttonSize = 'medium',
  buttonVariant = 'contained',
  children,
  iconOnly = false,
  success = false,
  error = false,
  onClickButton,
  disableInteractive = true,
  disabledComments = false,
  isInactiveClient = false,
  className = '',
}) => {
  return (
    <SCBWCWrapper className={className}>
      <Tooltip title={description} placement="top" disableInteractive={disableInteractive}>
        <div>
          <CustomButtom
            size={buttonSize}
            variant={buttonVariant}
            onClick={onClickButton}
            iconOnly={iconOnly}
            success={success}
            error={error}
            disabled={disabledComments || isInactiveClient}
          >
            {children}
          </CustomButtom>
        </div>
      </Tooltip>
    </SCBWCWrapper>
  )
}
