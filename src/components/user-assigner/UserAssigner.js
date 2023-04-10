import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { useState, useEffect, useRef, useCallback } from 'react'
// Global Components
import { TitleMaker } from '../title-maker'
// Styles
import { SCWrapperAvatar, SCUserAssignerWrapper, SCUserAssignerAllWrapper } from './style'
import { SCUserAssignerName } from './name/style'
// UI Components
import { UserAssignerAvatar } from './avatar/UserAssignerAvatar'
import { UserAssignerSelect } from './select/UserAssignerSelect'
// Constants
import { UserAssignerUserType } from './constants'
// Hooks
import { useUserAssignerData } from './useUserAssignerData'
export function UserAssigner({
  userType,
  onChange,
  showSelected = true,
  dontSaveOnEntity = false,
  onlyView = false,
  initialUsers = [],
  hideTooltipName = false,
  maxAssignments = null,
  projectId,
  membersProject,
  addUserAsFollower = () => {},
  showConfirmButton = false,
  transformOnHeader = true,
  containerPosition = false,
  offsetY,
  offsetX,
  autoOpenModal = false,
  //
  translations = {},
  fetchUsers,
  users,
  loadingUsers,
  fetchPermissions,
  userPermission,
  onSelectUser,
  mutationLoading,
  contentId,
  modalContentId,
  showButtonCreate = false,
  clickButtonCreate = () => {},
  distribution = false,
  showRoleClient,
  loggedUser,
  emptyLabel,
  isDynamicViewport = false,
}) {
  const [newUsers, setNewUsers] = useState(users)
  const [selectedUsers, setSelectedUsers] = useState(initialUsers)
  const [openModal, setOpenModal] = useState(false)
  const WRAPPER_AVATAR_REF = useRef(null)
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  const { selectedAvatarMapped, selectedNameMapped, selectedDataList, setUserList } = useUserAssignerData(
    dontSaveOnEntity,
    selectedUsers
  )

  useEffect(() => {
    const evalClick = event => {
      const path = event?.path || (event?.composedPath && event.composedPath())

      if (
        openModal &&
        !WRAPPER_AVATAR_REF.current.contains(event.target) &&
        !path?.some(({ id }) => `#${id}` === contentId || `#${id}` === modalContentId || id === 'modals-portal')
      ) {
        setOpenModal(false)
        setNewUsers({})
        if (onChange && !showConfirmButton) {
          onChange(selectedDataList)
        }
      }
    }

    document.addEventListener('click', evalClick)

    return () => {
      document.removeEventListener('click', evalClick)
    }
  }, [openModal, WRAPPER_AVATAR_REF, onChange, selectedDataList])

  const openModalHandler = useCallback(() => {
    if (onlyView && (!Array.isArray(selectedDataList) || selectedDataList.length < 2)) {
      return
    }

    setPosition(containerPosition || WRAPPER_AVATAR_REF.current.getBoundingClientRect())
    setOpenModal(true)
  }, [WRAPPER_AVATAR_REF])

  useEffect(() => {
    if (autoOpenModal) {
      openModalHandler()
    }
  }, [autoOpenModal, openModalHandler])

  const onCloseSelect = useCallback(() => {
    setOpenModal(false)
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

  const isEmptyState = useMemo(() => selectedNameMapped === '-' && emptyLabel, [selectedNameMapped])

  return (
    <SCUserAssignerAllWrapper>
      <SCUserAssignerWrapper>
        <SCWrapperAvatar onClick={openModalHandler} ref={WRAPPER_AVATAR_REF}>
          <UserAssignerAvatar
            avatarMapped={selectedAvatarMapped}
            userType={userType}
            hideTooltipName={hideTooltipName}
            translations={translations}
            users={selectedDataList}
          />
        </SCWrapperAvatar>
        {showSelected && (
          <SCUserAssignerName onClick={openModalHandler}>
            <TitleMaker
              text={translations.titleMarket || ''}
              textColor="#b2b2b2"
              textSize={14}
              textVariant="initial"
              textWeight={400}
              letterSpacing="0"
            />
            {isEmptyState ? emptyLabel : selectedNameMapped}
          </SCUserAssignerName>
        )}
      </SCUserAssignerWrapper>

      {openModal && (
        <UserAssignerSelect
          selected={selectedDataList}
          type={userType}
          closeInteraction={onCloseSelect}
          deleteItem={userType !== UserAssignerUserType.PM}
          coordinates={position}
          offsetY={offsetY}
          offsetX={offsetX}
          dontSaveOnEntity={dontSaveOnEntity}
          onSelect={handleOnSelect}
          handleOnConfirm={handleOnConfirm}
          onlyView={onlyView}
          maxAssignments={maxAssignments}
          projectId={projectId}
          membersProject={membersProject}
          addUserAsFollower={addUserAsFollower}
          showConfirmButton={showConfirmButton}
          transformOnHeader={transformOnHeader}
          translations={translations}
          fetchUsers={fetchUsers}
          users={newUsers}
          loadingUsers={loadingUsers}
          fetchPermissions={fetchPermissions}
          userPermission={userPermission}
          onSelectUser={onSelectUser}
          mutationLoading={mutationLoading}
          contentId={contentId}
          modalContentId={modalContentId}
          showButtonCreate={showButtonCreate}
          clickButtonCreate={clickButtonCreate}
          distribution={distribution}
          showRoleClient={showRoleClient}
          loggedUser={loggedUser}
          isDynamicViewport={isDynamicViewport}
        />
      )}
    </SCUserAssignerAllWrapper>
  )
}

UserAssigner.propTypes = {
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
}
