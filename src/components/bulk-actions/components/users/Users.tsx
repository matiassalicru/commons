import { useCallback, ReactElement, FunctionComponent } from 'react'
// UI Components
import { UserAssigner, UserAssignerUserType } from '../../../user-assigner'
// Interface
import { UsersType } from './Users.interface'

const MAX_ASSIGNMENTS = 20
const ELEMENT_RENDER = 'select-assigner-container-bulk-actions'

export const Users: FunctionComponent<UsersType> = ({
  myData,
  onChange,
  userType,
  dataUsers,
  fetchUsers,
  translations,
  modalElementId,
}): ReactElement => {
  /**
   * Maneja el fetch de usuarios en el select y buscador
   * @param {object} config
   */
  const handleFetchUsers = useCallback(
    config => {
      fetchUsers({
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'network-only',
        variables: { ...config.variables },
      })
    },
    [fetchUsers]
  )

  const handleSelectUser = useCallback(
    data => {
      return userType === UserAssignerUserType.PM && onChange(data)
    },
    [userType, onChange]
  )

  const handleOnChange = useCallback(
    data => {
      return userType === UserAssignerUserType.COLLABORATOR && onChange(data)
    },
    [userType, onChange]
  )

  return (
    <>
      <UserAssigner
        autoOpenModal
        offsetX={0.01}
        users={dataUsers}
        initialUsers={[]}
        showConfirmButton
        loggedUser={myData}
        userType={userType}
        showSelected={false}
        transformOnHeader={false}
        onChange={handleOnChange}
        translations={translations}
        fetchUsers={handleFetchUsers}
        modalContentId={modalElementId}
        onSelectUser={handleSelectUser}
        contentId={`#${ELEMENT_RENDER}`}
        maxAssignments={userType === UserAssignerUserType.COLLABORATOR ? MAX_ASSIGNMENTS : null}
      />
      <div id={ELEMENT_RENDER} />
    </>
  )
}
