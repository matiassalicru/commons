import { FunctionComponent, useCallback, useContext } from 'react'

// UI Components
import { Trash } from '@projectcor/icons/lib/components/Trash'
import Colors from '@projectcor/theme/lib/base/colors'

// Types
import { DeleteButtonTypes } from './DeleteButton.inteface'

// Styles
import { SCButtonWrapper, SCWrapper } from './styles'

// Constants
import { AMPLITUDE_EVENTS, AMPLITUDE_ACTIONS } from '../../../../constants/filters/amplitude'

// Context
import { ContextTypes, FilterContext } from '../../Context'

export const DeleteButton: FunctionComponent<DeleteButtonTypes> = ({ onClick }) => {
  const { trackEvent } = useContext(FilterContext) as ContextTypes

  const handleClick = useCallback(() => {
    trackEvent({
      event: AMPLITUDE_EVENTS.CLEAN_ALL_FILTERS,
      actionType: AMPLITUDE_ACTIONS.CLICK,
    })

    onClick()
  }, [onClick])

  return (
    <SCWrapper>
      <SCButtonWrapper onClick={handleClick} data-robot-id="filters-delete-button">
        <Trash color={Colors.primary.main} width="18px" height="18px" />
      </SCButtonWrapper>
    </SCWrapper>
  )
}
