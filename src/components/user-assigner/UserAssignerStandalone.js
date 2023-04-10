// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

// Styles
import { SCUserAssignerAllWrapper } from './style'
// UI Components
import { UserAssignerSelect } from './select/UserAssignerSelect'
// Constants
import { UserAssignerUserType } from './constants'
// Hooks
import { useUserAssignerData } from './useUserAssignerData'

export function UserAssignerStandalone({
  addUserAsFollower = () => {},
  clickButtonCreate = () => {},
  closeModal,
  containerPosition = false,
  contentId,
  distribution = false,
  dontSaveOnEntity = false,
  fetchPermissions,
  fetchUsers,
  initialUsers = [],
  isDynamicViewport = false,
  loadingUsers,
  loggedUser,
  maxAssignments = null,
  membersProject,
  modalContentId,
  mutationLoading,
  offsetX,
  offsetY,
  onChange,
  onSelectUser,
  onlyView = false,
  projectId,
  showButtonCreate = false,
  showConfirmButton = false,
  showRoleClient,
  transformOnHeader = true,
  translations = {},
  userPermission,
  userType,
  users,
  disableTopOffset = false
}) {
  const [newUsers, setNewUsers] = useState(users)
  const [selectedUsers, setSelectedUsers] = useState(initialUsers)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  const { selectedDataList, setUserList } = useUserAssignerData(dontSaveOnEntity, selectedUsers)

  useEffect(() => {
    const evalClick = event => {
      const path = event?.path || (event?.composedPath && event.composedPath())

      if (!path?.some(({ id }) => `#${id}` === contentId || `#${id}` === modalContentId)) {
        closeModal()
      }
    }

    document.addEventListener('click', evalClick)

    return () => {
      document.removeEventListener('click', evalClick)
    }
  }, [])

  const openModalHandler = useCallback(() => {
    if (onlyView && (!Array.isArray(selectedDataList) || selectedDataList.length < 2)) {
      return
    }

    setPosition(containerPosition)
  }, [])

  useEffect(() => {
    openModalHandler()
  }, [])

  const onCloseSelect = useCallback(() => {
    closeModal()
    setNewUsers({})
  }, [])

  const handleOnSelect = newList => {
    setUserList(newList)

    if (onChange) {
      !showConfirmButton && onChange(newList)
    }
  }

  useEffect(() => {
    if (users) setNewUsers(users)
  }, [users])

  useEffect(() => {
    if (initialUsers && initialUsers.length) {
      setSelectedUsers(initialUsers)
      setUserList(initialUsers)
    }
  }, [initialUsers])

  const handleOnConfirm = newList => {
    setUserList(newList)
    if (onChange) {
      onChange(newList)
    }
  }

  return (
    <SCUserAssignerAllWrapper
      onClick={event => {
        event.preventDefault()
        event.stopPropagation()
      }}
    >
      <UserAssignerSelect
        addUserAsFollower={addUserAsFollower}
        clickButtonCreate={clickButtonCreate}
        closeInteraction={onCloseSelect}
        contentId={contentId}
        coordinates={position}
        deleteItem={userType !== UserAssignerUserType.PM}
        distribution={distribution}
        dontSaveOnEntity={dontSaveOnEntity}
        fetchPermissions={fetchPermissions}
        fetchUsers={fetchUsers}
        handleOnConfirm={handleOnConfirm}
        isDynamicViewport={isDynamicViewport}
        loadingUsers={loadingUsers}
        loggedUser={loggedUser}
        maxAssignments={maxAssignments}
        membersProject={membersProject}
        modalContentId={modalContentId}
        mutationLoading={mutationLoading}
        offsetX={offsetX}
        offsetY={offsetY}
        onSelect={handleOnSelect}
        onSelectUser={onSelectUser}
        onlyView={onlyView}
        projectId={projectId}
        selected={selectedDataList}
        showButtonCreate={showButtonCreate}
        showConfirmButton={showConfirmButton}
        showRoleClient={showRoleClient}
        transformOnHeader={transformOnHeader}
        translations={translations}
        type={userType}
        userPermission={userPermission}
        users={newUsers}
        disableTopOffset={disableTopOffset}
      />
    </SCUserAssignerAllWrapper>
  )
}

UserAssignerStandalone.propTypes = {
  userType: PropTypes.oneOf(Object.keys(UserAssignerUserType).map(type => UserAssignerUserType[type])),
  showSelected: PropTypes.bool,
  dontSaveOnEntity: PropTypes.bool,
  onChange: PropTypes.func,
  onlyView: PropTypes.bool,
  initialUsers: PropTypes.array,
  hideTooltipName: PropTypes.bool,
  maxAssignments: PropTypes.number,
  projectId: PropTypes.number,
  membersProject: PropTypes.array,
  showConfirmButton: PropTypes.bool,
  transformOnHeader: PropTypes.bool,
  offsetY: PropTypes.number,
  offsetX: PropTypes.number,
  /** Objeto con las traducciones */
  translations: PropTypes.object.isRequired,
  /** Funcion que ejecuta el fetch de los usuarios, con las variables correspondientes */
  fetchUsers: PropTypes.func.isRequired,
  /** Response de la query fetchUsers */
  users: PropTypes.object.isRequired,
  /** Loading del fetchUsers */
  loadingUsers: PropTypes.bool.isRequired,
  /** Funcion que ejecuta el fetch de permisos para usuario */
  fetchPermissions: PropTypes.func,
  /** Response de la query fetchPermissions */
  userPermission: PropTypes.object,
  /** Funcion que ejecuta el fetch de asignar usuario */
  onSelectUser: PropTypes.func.isRequired,
  /** Loading del onSelectUser */
  mutationLoading: PropTypes.bool,
  /** Elemento en el que se renderizara el select de usuarios */
  contentId: PropTypes.string.isRequired,
  /** Elemento en el que se renderizara el modal de cambio de pm o role 6 */
  modalContentId: PropTypes.string,
  /** Prop que indica si se debe mostrar el boton de crear usuario en el select de usuarios */
  showButtonCreate: PropTypes.bool,
  /** Prop que indica si se debe mostrar el boton de crear usuario en el select de usuarios */
  clickButtonCreate: PropTypes.func,
  /** Indicador para el modal de colaborador */
  distribution: PropTypes.bool,
  /** Indicador para mostrar el icono de usuario tipo cliente en los users */
  showRoleClient: PropTypes.bool,
  /** Usuario loggeado en COR, si no se agrega este parametro no se mostrará la opción YO */
  loggedUser: PropTypes.object,
  /** Label cuando no hay ningun usuario seleccionado, por defecto es "-" */
  emptyLabel: PropTypes.string,
  /** Booleano que indica cuando el componente esta en un viewport dinamico (scroll infinito) */
  isDynamicViewport: PropTypes.bool,
  /** Funcion que cierra el modal desde el contenedor padre */
  closeModal: PropTypes.func.isRequired,
}
