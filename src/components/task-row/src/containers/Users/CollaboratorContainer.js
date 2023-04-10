import React, { useContext } from 'react'
import PropTypes from 'prop-types'
// Styles
import { SelectorModal, SCUserAvatarWrapper } from './style'
// Translates
import { useTranslation } from 'react-i18next'
// Components
import { UserAssignerAvatar } from '../../../../user-assigner/avatar/UserAssignerAvatar'
import { useUserAssignerData } from '../../../../user-assigner/useUserAssignerData'
import { UserAssignerUserType } from '../../../../user-assigner/constants'

// Utils
import {
  checkPermissions,
  ACTION_EDIT,
  SECTION_TASK,
} from '../../../../../utils/permissions'

// Context
import { UserContext } from '../../../../../providers/UserProvider'

const CollaboratorContainer = React.memo(
  ({ onChange, task }) => {
    const user = useContext(UserContext)
    const permissionsEdit = checkPermissions(
      user?.permissions,
      SECTION_TASK,
      ACTION_EDIT
    )
    const { selectedAvatarMapped, selectedDataList } = useUserAssignerData(true, task.collaborators)
    const { t } = useTranslation(['user_assignment', 'tooltips', 'globals'])

    const translations = {
      andMoreUsers: t('user_assignment:and-more-users', {
        quantity: '{{quantity}}',
      }),
    }

    const handleChange = () => permissionsEdit && onChange(task, UserAssignerUserType.COLLABORATOR)

    return (
      <>
        <SelectorModal id={`select-assigner-collaborators-container-${task._id}`} />
        <SCUserAvatarWrapper onClick={handleChange}>
          <UserAssignerAvatar
            avatarMapped={selectedAvatarMapped}
            userType={UserAssignerUserType.COLLABORATOR}
            hideTooltipName={false}
            translations={translations}
            users={selectedDataList}
          />
        </SCUserAvatarWrapper>
      </>
    )
  },
  (prevProps, nextProps) => {
    return prevProps.task.collaborators.length === nextProps.task.collaborators.length
  }
)

export default CollaboratorContainer

CollaboratorContainer.propTypes = {
  /**
   * Objeto con la info de la tarea
   */
  task: PropTypes.object.isRequired,
  /**
   * Callback que ejecuta ejecutar un cambio en los colaboradores de la tarea
   */
  onChange: PropTypes.func.isRequired,
}
