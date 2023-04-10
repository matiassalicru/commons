import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { UserAssignerAvatar } from '../../../../user-assigner/avatar/UserAssignerAvatar'
import { useUserAssignerData } from '../../../../user-assigner/useUserAssignerData'
import { UserAssignerUserType } from '../../../../user-assigner/constants'

import { SelectorModal } from './style'

// Utils
import {
  checkPermissions,
  ACTION_EDIT,
  SECTION_TASK,
} from '../../../../../utils/permissions'

// Context
import { UserContext } from '../../../../../providers/UserProvider'

const PMContainer = React.memo(
  ({ onChange, task }) => {
    const user = useContext(UserContext)
    const permissionsEdit = checkPermissions(
      user?.permissions,
      SECTION_TASK,
      ACTION_EDIT
    )
    const { selectedAvatarMapped, selectedDataList } = useUserAssignerData(true, task.pm)

    const handleChange = () => permissionsEdit && onChange(task, UserAssignerUserType.PM)

    return (
      <>
        <SelectorModal id={`select-assigner-pm-container-${task._id}`} />
        <div onClick={handleChange}>
          <UserAssignerAvatar
            avatarMapped={selectedAvatarMapped}
            userType={UserAssignerUserType.PM}
            hideTooltipName={false}
            translations={{}}
            users={selectedDataList}
          />
        </div>
      </>
    )
  },
  (prevProps, nextProps) => prevProps.task.pm?.id === nextProps.task.pm?.id
)

export default PMContainer

PMContainer.propTypes = {
  /**
   * Objeto con la info de la tarea
   */
  task: PropTypes.object.isRequired,
  /**
   * Callback que ejecuta ejecutar un cambio en los colaboradores de la tarea
   */
  onChange: PropTypes.func.isRequired,
}
