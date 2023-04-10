import PropTypes from 'prop-types'
import { Tooltip } from '@projectcor/tooltip/lib'

// Styled components
import { SCButton } from './style'

// Components
import { SvgIcon } from '../../../../svg-icon'

export const CollapsibleButton = ({ isClosed, size = 15, color = 'grey', clickAction = () => {}, tooltip = '' }) => {
  return (
    <>
      <Tooltip placement="bottom" title={tooltip}>
        <SCButton isClosed={isClosed} onClick={clickAction} color={color} size={size} data-testid="collapsible-button">
          <SvgIcon iconName="chevron-down" />
        </SCButton>
      </Tooltip>
    </>
  )
}

CollapsibleButton.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  clickAction: PropTypes.func,
  isClosed: PropTypes.bool.isRequired,
  tooltip: PropTypes.string,
}
