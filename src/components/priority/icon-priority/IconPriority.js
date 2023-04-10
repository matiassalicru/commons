import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Tooltip } from '@projectcor/tooltip/lib'
// Global Components
import { SvgIcon } from '../../svg-icon'
// Constant
import { CONFING_PRIORITIES } from '../constant'
// Styles
import { SCWrapperIcon } from './style'

export const IconPriority = ({
  ableToEdit,
  priority = 0,
  isTooltip = false,
  isSelected = true,
  translations = '',
  currentPriorityClick,
}) => {
  const handleClickPriority = () => {
    if (currentPriorityClick) {
      currentPriorityClick()
    }
  }

  const PRIORITY_UI = CONFING_PRIORITIES[priority]

  /**
   * Nombre de la prioridad actual.
   */
  const CURRENT_PRIORITY_NAME = useMemo(() => translations[CONFING_PRIORITIES[priority]?.name], [priority])

  return (
    <Tooltip title={isTooltip ? CURRENT_PRIORITY_NAME : ''} placement="top">
      <SCWrapperIcon
        onClick={handleClickPriority}
        setBg={PRIORITY_UI?.bg_color}
        setBgHover={PRIORITY_UI?.bg_color_hover}
        setColor={PRIORITY_UI?.color}
        isSelected={isSelected}
        ableToEdit={ableToEdit}
      >
        <SvgIcon iconName={PRIORITY_UI?.icon} />
      </SCWrapperIcon>
    </Tooltip>
  )
}

IconPriority.propTypes = {
  priority: PropTypes.number,
  isTooltip: PropTypes.bool,
  isSelected: PropTypes.bool,
  ableToEdit: PropTypes.bool,
  currentPriorityClick: PropTypes.func,
  translations: PropTypes.object.isRequired,
}
