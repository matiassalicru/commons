import PropTypes from 'prop-types'
import React, { useCallback, useState, useEffect, useRef, Suspense, useMemo } from 'react'
import moment from 'moment'
import ReactDOM from 'react-dom'
// Styles
import {
  SCUserAssignerSelectWrapper,
  SCUserAssignerSelectHeader,
  SCSearch,
  SCSearchIcon,
  SCAvatarHeaderWrapper,
  SCAvatarsHeader,
  SCSearchWrapper,
  SCUserAssignerSelectResults,
  SCConfirmButton,
  SCButtonCreate,
} from './style'
// Hooks
import { useArrowCounter } from '../../../hooks/use-arrow-counter'
// UI Components
import { EmptyResult } from '../empty-response/EmptyResponse'
import { AvatarDeleteable } from '../avatar/AvatarDeleteable'
import { UserAssignerMoreUsers } from '../more-users/UserAssignerMoreUsers'
import { UserAssignerSelectItem } from './UserAssignerSelectItem'
import { RoleClientModal } from '../modals/role-client-modal'
import { ModalCollaboratorMessage } from '../modals/collaborator-message'
// Constants
import { UserAssignerUserType } from '../constants'
// Hooks
import { useNearScreen } from '../../../hooks/useNearScreen'
import { useLocalStorage } from '../../../hooks/use-local-storage'
// Global Components
import { SvgIcon } from '../../svg-icon'
import { UserCapacity } from '../../user-capacity'
import { AlertPortal } from '../../alert-portal'
import { ModalPortal } from '../../modal-portal'
// Utils
import { sliceArraMaxElements } from '../utils'
import dispatchAmplitude from '../../../utils/dispatchAmplitude'

const ModalLicenses = React.lazy(() =>
  import('../../user-leave-modal').then(module => ({ default: module.UserLeaveModal }))
)
const MAX_USERS_AVATAR = 5
const TOOLTIP_HEIGHT = 290
const CLIENT_ROLE_ID = 6

const MODAL_TYPE_ROLE1 = 1 //Modal de confirmacion para el cambio de PM o collab de role 6 (tipo cliente)
const MODAL_TYPE_ROLE2 = 2 //Modal de confirmacion para el cambio de PM o collab de role 6 (tipo cliente)
const MODAL_TYPE_LICENSE = 3 //Modal de confirmación para un usuario con una licencia activa

//Guarda un usuario seleccionado
let USER_SELECTED = null
export function UserAssignerSelect({
  type,
  selected,
  closeInteraction,
  deleteItem,
  dontSaveOnEntity,
  onSelect,
  handleOnConfirm = () => {},
  coordinates: { x = 0, y = 0 },
  offsetY,
  offsetX,
  onlyView = false,
  maxAssignments = null,
  projectId,
  membersProject,
  addUserAsFollower = () => {},
  showConfirmButton = false,
  transformOnHeader = true,
  translations,
  fetchUsers,
  users,
  loadingUsers,
  fetchPermissions = () => {},
  userPermission = {},
  onSelectUser = () => {},
  mutationLoading = false,
  contentId,
  modalContentId,
  showButtonCreate = false,
  clickButtonCreate = () => {},
  distribution,
  showRoleClient,
  loggedUser,
  showTootltipInUser = true,
  isDynamicViewport = false,
  disableTopOffset = false,
}) {
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    icon: 'check',
    variant: 'success',
  })

  const SEARCH_INPUT_REF = useRef(null)
  const SELECT_HEADER_REF = useRef(null)
  const [search, setSearch] = useState('')

  const { isNearScreen, fromRef } = useNearScreen({ once: false })
  const [filterPage, setFilterPage] = useState(1)
  const [filterLastPage, setFilterLastPage] = useState(1)
  const [resultUsers, setResultUsers] = useState([])
  const [promptChangeModal, setPromptChangeModal] = useState({
    open: false,
    user: null,
    modalType: null,
  })

  const [enableMessage, setEnableMessage] = useState({
    show: false,
    type: 0,
    user: null,
  })

  const [checkModal, setCheckModal] = useState(false)
  const [dontShowMessage, setDontShowMessage] = useState(false)
  const [licensesCheck, setLicensesCheck] = useState(false)
  const [localStorageLicenses, setLocalStorageLicenses] = useLocalStorage('checkboxModalUserLicenses', true)

  let selectedList = []

  if (Array.isArray(selected)) {
    selectedList = selected
  } else if (selected) {
    selectedList = [selected]
  }

  const { array, rest } = sliceArraMaxElements(selectedList, onlyView ? selectedList.length : MAX_USERS_AVATAR)

  const total = selectedList.length

  const onChangeSearch = useCallback(e => {
    setResultUsers([])
    setFilterPage(1)
    setSearch(e.target.value)
  }, [])

  const personType = translations.headerType || ''

  useEffect(() => {
    if (SEARCH_INPUT_REF.current) {
      SEARCH_INPUT_REF.current.focus()
    }
  }, [])

  useEffect(() => {
    fetchUsers({
      variables: {
        page: filterPage,
        filters: JSON.stringify({
          name: search,
        }),
      },
    })
  }, [fetchUsers])

  useEffect(() => {
    if (!loadingUsers && isNearScreen && filterPage + 1 <= filterLastPage) {
      fetchUsers({
        variables: {
          page: filterPage + 1,
          filters: JSON.stringify({
            name: search,
          }),
        },
      })
    }
  }, [isNearScreen, loadingUsers])

  useEffect(() => {
    fetchUsers({
      variables: {
        page: 1,
        filters: JSON.stringify({
          name: search,
        }),
      },
    })
  }, [search])

  useEffect(() => {
    if (users?.users) {
      const { data, lastPage, page } = users.users
      setFilterPage(+page)
      setFilterLastPage(+lastPage)
      setResultUsers([...resultUsers, ...data])
    }
  }, [users])

  /**
   * Obtiene el access type Task del usuario seleccionado
   *
   */
  useEffect(() => {
    if (USER_SELECTED && userPermission) {
      if (userPermission.checkTaskAccessType?.status) {
        //Muestro modal 1
        setPromptChangeModal({
          open: true,
          user: USER_SELECTED,
          modalType: MODAL_TYPE_ROLE1,
        })
      } else if (userPermission.checkTaskAccessType?.status === false) {
        /**
         * Status debe estar definido y debe ser false.
         */

        setPromptChangeModal({
          open: true,
          user: USER_SELECTED,
          modalType: MODAL_TYPE_ROLE2,
        })
      }
      USER_SELECTED = null
    }
  }, [userPermission, USER_SELECTED])

  const isModalLicense = useMemo(() => promptChangeModal.modalType === MODAL_TYPE_LICENSE, [promptChangeModal])

  const handleCloseModalPrompt = () => {
    if (isModalLicense) {
      dispatchAmplitude(`MODAL_LEAVES_CLICK_BUTTON_CANCEL`, loggedUser.company_id, { section: 'collapsible_tasks' })
    }
    setPromptChangeModal({
      open: false,
      user: null,
      modalType: null,
    })
  }

  /**
   * Callback al hacer click en el boton aceptar del modal
   */
  const handleAcceptModalPrompt = () => {
    setPromptChangeModal({
      open: false,
      user: null,
      modalType: null,
    })

    if (isModalLicense) {
      localStorage.setItem('checkboxModalUserLicenses', JSON.stringify(!licensesCheck))
      onSelectItem(promptChangeModal.user)
      dispatchAmplitude(`MODAL_LEAVES_CLICK_BUTTON_CONFIRM`, loggedUser.company_id, { section: 'collapsible_tasks' })
      return
    }

    if (checkModal) {
      //Asigno al usuario como seguidor de la tarea
      if (addUserAsFollower) {
        addUserAsFollower(promptChangeModal.user, UserAssignerUserType.FOLLOWER)
      }
    } else {
      //Si es el modal de cambio de pm o si es el modal rol6 y el check no esta seleccionado, agrega al user como PM o collab
      onSelectItem(promptChangeModal.user)
    }
  }

  /**
   * Verifica que el usuario pertenezca al proyecto
   */
  const checkBelongsToProject = useCallback(
    userId => membersProject.some(item => +item.id === userId),
    [membersProject]
  )

  /**
   * Consulto en la API si el usuario tiene permisos Tasks = 2 (solo suyos)
   * Muestro el modal correspondiente a si es verdadero o falso
   * @param {Object} user
   */
  const checkTaskPermissions = user => {
    //hago get de permiso
    fetchPermissions({
      variables: {
        userId: user.id,
      },
    })
  }

  /**
   * Maneja el click en el cancel continue del modal de colaborador
   */
  const handleCloseMessageModalPrompt = () => {
    setEnableMessage({
      show: false,
      type: 0,
      user: null,
    })
  }

  useEffect(() => {
    const showMessageModal = localStorage.getItem('showMessageModal') === 'true'
    //save local storage
    if (dontShowMessage && !showMessageModal) localStorage.setItem('showMessageModal', dontShowMessage)
    if (showMessageModal) setDontShowMessage(showMessageModal)
  }, [dontShowMessage])

  /**
   * Maneja el click en el boton continue del modal de colaborador
   */
  const handleContinueMessageModalPrompt = useCallback(
    dontOpen => {
      switch (enableMessage.type) {
        case 0:
          onSelectItem(enableMessage.user)
          setDontShowMessage(dontOpen)
          setEnableMessage({
            show: false,
            type: 0,
            user: enableMessage.user,
          })
          break
        case 1:
          deallocateUser(enableMessage.user)
          setEnableMessage({
            show: false,
            type: 1,
            user: enableMessage.user,
          })
          break
      }
    },
    [enableMessage.user]
  )

  const onSelectItem = user => {
    // si esta guardando previene la ejecucion
    if (mutationLoading) {
      return
    }

    let newSelected

    if (onSelect) {
      if (Array.isArray(selected)) {
        newSelected = [...selected, user]
      } else {
        newSelected = [selected, user]
      }
      onSelect(newSelected)
    }

    if (!!dontSaveOnEntity) {
      return
    }

    // Cada vez que el usuario hace una selección limpio input y le hago focus
    setSearch(prev => {
      if (prev.length > 0) {
        setResultUsers([])
        SEARCH_INPUT_REF.current && SEARCH_INPUT_REF.current.focus()

        return ''
      }
      return prev
    })

    /** Callback que se ejecuta cuando se selecciona un user, recibe los nuevos user por params */
    onSelectUser(newSelected)
  }

  const assertToOpenModal = useCallback(
    user => {
      // si esta guardando previene la ejecucion
      if (mutationLoading) {
        return
      }

      /* chequea el maximo de asignaciones que se pueden hacer
            si entra en el condicional muestra el alert */
      if (maxAssignments && Array.isArray(selected) && selected.length >= maxAssignments) {
        let text_alert = translations.maxAssignments?.replace('{{max}}', maxAssignments) || ''
        text_alert = text_alert.replace('{{type}}', translations.titleMarker)
        setAlert({
          show: true,
          message: text_alert,
          variant: 'danger',
          icon: 'times',
        })
        return
      }

      //Si el usuario es colaborador o pm y es rol 6, se realizan ciertas validaciones
      //Si el usuario NO pertenece al proyecto, se muestra un alert de confirmacion. Si el usuario pertenece al proyecto, continua el flujo habitual
      if (
        projectId &&
        (type === UserAssignerUserType.COLLABORATOR || type === UserAssignerUserType.PM) &&
        selected &&
        +user.roleId === CLIENT_ROLE_ID &&
        !checkBelongsToProject(user.id)
      ) {
        USER_SELECTED = user
        //Llamo endpoint para saber si tiene permiso Tasks === 2
        checkTaskPermissions(user)
        return
      }

      if (type === UserAssignerUserType.COLLABORATOR && distribution && !dontShowMessage) {
        setEnableMessage({ show: true, type: 0, user })
        return
      }

      if (selected && user.leaves?.length && localStorageLicenses !== false) {
        setPromptChangeModal({
          open: true,
          user,
          modalType: MODAL_TYPE_LICENSE,
        })

        return
      }

      onSelectItem(user)
    },
    [
      selected,
      selected?.length,
      onSelectItem,
      setPromptChangeModal,
      SEARCH_INPUT_REF,
      mutationLoading,
      setEnableMessage,
      dontShowMessage,
    ]
  )

  const closeAlert = useCallback(() => {
    setAlert({
      show: false,
      message: '',
    })
  }, [setAlert])

  const deallocateUser = user => {
    // si esta guardando previene la ejecucion
    if (mutationLoading) {
      return
    }

    setTimeout(() => {
      const newSelected = selected.filter(({ id }) => +id !== +user.id)
      if (onSelect) {
        onSelect(newSelected)
      }

      if (!!dontSaveOnEntity) {
        return
      }

      /** Callback que se ejecuta cuando se selecciona un user, recibe los nuevos user por params */
      onSelectUser(newSelected)
    }, 0)
  }

  const filterResultUsers = resultUsers.filter(p => {
    let exist
    if (Array.isArray(selected)) {
      exist = selected.find(s => Number(s.id) === p.id)
    } else {
      exist = Number(selected?.id) === Number(p.id)
    }
    return !exist
  })

  const onConfirmFromArrow = useCallback(
    userIndex => {
      if (!filterResultUsers?.length) return
      assertToOpenModal(filterResultUsers[userIndex])
    },
    [filterResultUsers]
  )

  const arrowCounter = useArrowCounter({
    dataMax: filterResultUsers.length,
    onConfirm: onConfirmFromArrow,
    onExit: closeInteraction,
    ignoreNext: loadingUsers,
    resetCounter: true,
  })

  const handleDeallocateUser = useCallback(
    user => {
      // si esta guardando previene la ejecucion
      if (mutationLoading) {
        return
      }
      if (type === UserAssignerUserType.COLLABORATOR && distribution) {
        setEnableMessage({ show: true, type: 1, user })
        return
      }
      deallocateUser(user)
    },
    [selected, mutationLoading, setEnableMessage]
  )

  const AvatarWrapper = useMemo(() => (onlyView ? React.Fragment : AvatarDeleteable), [])

  /***
   * Maneja el cambio del checkbox del modal
   */
  const handleCheckboxModal = useCallback(e => {
    setCheckModal(e.target.checked)
  }, [])

  /**
   * Obtiene el titulo para el modal correspondiente al modalType
   */
  const getModalTitle = useCallback(() => {
    if (isModalLicense) {
      return translations.titleModalLicense
    }

    return translations.titleModalRoleClient || ''
  }, [promptChangeModal])

  /**
   * Obtiene el texto para el modal correspondiente al modalType
   */
  const getModalText = () => {
    if (isModalLicense && promptChangeModal.user.leaves.length) {
      const userLeave = promptChangeModal.user.leaves[0]
      const formatInit = moment(userLeave.start, moment.ISO_8601).utc().local().format(translations.leaveDateFormat)
      const formatEnd = moment(userLeave.end, moment.ISO_8601).utc().local().format(translations.leaveDateFormat)
      const licenseText = translations.textModalLicense.replace('INIT', formatInit)

      return `${promptChangeModal.user.firstName} ${promptChangeModal.user.lastName} ${licenseText.replace(
        'END',
        formatEnd
      )}`
    }
    return ''
  }

  /**
   * Obtiene el wording del tooltip para el usuario segun su role
   * @param {Object} user
   */
  const getTooltipWording = useCallback(user => {
    const { roleId, firstName, lastName, remainingHours } = user
    if (+roleId === 6 && showRoleClient) {
      return `${firstName} ${lastName} ${translations.tooltipRoleClient || ''}`
    }

    return `${remainingHours} ${translations.tooltipAvailableCapacity || ''} ${firstName} ${lastName}`
  }, [])

  /**
   * Titulo del selectos con la cantidad de usuarios
   */
  const selectHeaderTitle = useMemo(() => {
    let title = translations.headerTitle?.replace('{{number}}', total) || ''
    title = title.replace('{{type}}', personType)
    return title
  }, [total, personType])

  const handleChangeCheck = () => {
    setLicensesCheck(prev => !prev)
  }

  if (promptChangeModal.open) {
    return (
      <Suspense fallback={<div />}>
        {isModalLicense ? (
          <ModalLicenses
            title={getModalTitle()}
            textContent={getModalText()}
            clickButtonCancel={handleCloseModalPrompt}
            clickButtonAccept={handleAcceptModalPrompt}
            titleAccept={translations.accept}
            titleCancel={translations.cancel}
            checkValue={licensesCheck}
            handleChangeCheck={handleChangeCheck}
            labelCheckbox={translations.labelCheckboxLicenses}
          />
        ) : (
          <ModalPortal
            elementId={modalContentId}
            closeModal={handleCloseModalPrompt}
            clickButtonCancel={handleCloseModalPrompt}
            clickButtonAccept={handleAcceptModalPrompt}
            title={getModalTitle()}
            translations={translations}
            variant={isModalLicense ? 'normal' : 'danger'}
            textContent={getModalText()}
          >
            <RoleClientModal
              translations={translations}
              type={promptChangeModal.modalType}
              checkModal={checkModal}
              handleCheckboxModal={handleCheckboxModal}
            />
          </ModalPortal>
        )}
      </Suspense>
    )
  }

  return ReactDOM.createPortal(
    <>
      <SCUserAssignerSelectWrapper
        left={x}
        top={y}
        offsetY={offsetY}
        offsetX={offsetX}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.2 },
        }}
        height={onlyView ? SELECT_HEADER_REF?.current?.offsetHeight : TOOLTIP_HEIGHT}
        isDynamicViewport={isDynamicViewport}
        disableTopOffset={disableTopOffset}
      >
        <SCUserAssignerSelectHeader ref={SELECT_HEADER_REF} onlyView={onlyView} transformOnHeader={transformOnHeader}>
          {selectHeaderTitle}
          {!!array.length && (
            <SCAvatarHeaderWrapper>
              <SCAvatarsHeader>
                <>
                  {array.map(user =>
                    deleteItem ? (
                      <AvatarWrapper onDelete={() => handleDeallocateUser(user)} key={`user-header-${user.id}`}>
                        <UserCapacity
                          picture={user.picture}
                          remainingHours={user.remainingHours}
                          size="small"
                          firstName={user.firstName}
                          lastName={user.lastName}
                          showTootltip={true}
                          wordingTooltip={getTooltipWording(user)}
                          fromComponent={`user-assigner-select-${user.id}`}
                          place="top"
                          roleId={showRoleClient ? +user.roleId : null}
                        />
                      </AvatarWrapper>
                    ) : (
                      <UserCapacity
                        key={`user-header-no-deleteable-${user.id}`}
                        showTootltip={true}
                        wordingTooltip={getTooltipWording(user)}
                        picture={user.picture}
                        remainingHours={user.remainingHours}
                        size="small"
                        firstName={user.firstName}
                        lastName={user.lastName}
                        fromComponent={`user-assigner-select-${user.id}`}
                        place="top"
                        roleId={showRoleClient ? +user.roleId : null}
                      />
                    )
                  )}
                  {!!rest.length && (
                    <UserAssignerMoreUsers
                      users={rest}
                      handleDelete={deallocateUser}
                      translations={translations}
                      showRoleClient={showRoleClient}
                    />
                  )}
                </>
              </SCAvatarsHeader>
            </SCAvatarHeaderWrapper>
          )}
        </SCUserAssignerSelectHeader>
        {!onlyView && (
          <>
            <SCSearchWrapper>
              <SCSearch
                value={search}
                onChange={onChangeSearch}
                placeholder={translations.searchInputPlaceholder || ''}
                ref={SEARCH_INPUT_REF}
                data-robot-id="user-assigner-select-input"
              />
              <SCSearchIcon>
                <SvgIcon iconName="search" />
              </SCSearchIcon>
            </SCSearchWrapper>
            {filterResultUsers && (
              <SCUserAssignerSelectResults>
                {!!filterResultUsers.length && (
                  <>
                    {/* si el parametro loggerUser existe entonces muestro la opcion YO en la lista en la primera psición
                        si no hay una busqueda activa (!search) entonces muestro la opción YO
                        Si el usuario logueado está seleccionado (!selectedList.some), no muestro la opció YO en la lista
                    */}
                    {loggedUser && !search && !selectedList.some(item => +item.id === +loggedUser.id) && (
                      <UserAssignerSelectItem
                        user={{
                          ...loggedUser,
                          __typename: 'User',
                        }}
                        translations={translations}
                        onSelect={assertToOpenModal}
                        key={`user-item-list-${loggedUser.id}`}
                        showRoleClient={showRoleClient}
                        showMe={true}
                        showTootltipInUser={showTootltipInUser}
                      />
                    )}
                    {filterResultUsers.map((user, index) => {
                      return (
                        /* Si no existe el parametro loggedUser entonces siempre muestro al usuario logueado en la lista
                          si hay una busqueda activa, es decir el search tiene algo, muestro al usuario logueado en la lista
                        */
                        (!loggedUser || search || loggedUser.id !== user.id) && (
                          <UserAssignerSelectItem
                            translations={translations}
                            onSelect={assertToOpenModal}
                            user={user}
                            key={`user-item-list-${user.id}`}
                            showRoleClient={showRoleClient}
                            isSelected={index === arrowCounter}
                            showTootltipInUser={showTootltipInUser}
                            disableScroll={isDynamicViewport}
                          />
                        )
                      )
                    })}
                  </>
                )}

                {!loadingUsers && !filterResultUsers.length && search !== '' && (
                  <EmptyResult translations={translations} />
                )}

                <div ref={fromRef}></div>
              </SCUserAssignerSelectResults>
            )}
            {showButtonCreate && (
              <SCButtonCreate onClick={clickButtonCreate}>{translations.buttonCreate}</SCButtonCreate>
            )}
          </>
        )}

        {showConfirmButton && (
          <SCConfirmButton
            disabled={!selected.length}
            onClick={() => {
              !!selected.length && handleOnConfirm(selected)
            }}
          >
            {translations.confirm || ''}
          </SCConfirmButton>
        )}
      </SCUserAssignerSelectWrapper>

      {alert.show && (
        <AlertPortal
          position="center-bottom"
          text={alert.message}
          onClose={closeAlert}
          variant={alert.variant}
          icon={alert.icon}
        />
      )}
      {enableMessage.show && (
        <Suspense fallback={<div />}>
          <ModalCollaboratorMessage
            typeMenssage={enableMessage.type}
            onContinue={handleContinueMessageModalPrompt}
            onCancel={handleCloseMessageModalPrompt}
            translations={translations}
            contentId={modalContentId}
          />
        </Suspense>
      )}
    </>,
    document.querySelector(contentId)
  )
}

UserAssignerSelect.propTypes = {
  type: PropTypes.oneOf(Object.keys(UserAssignerUserType).map(type => UserAssignerUserType[type])),
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  closeInteraction: PropTypes.func.isRequired,
  deleteItem: PropTypes.bool.isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  dontSaveOnEntity: PropTypes.bool,
  onSelect: PropTypes.func,
  handleOnConfirm: PropTypes.func,
  onlyView: PropTypes.bool,
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
  onSelectUser: PropTypes.func,
  /** Loading del onSelectUser */
  mutationLoading: PropTypes.bool,
  /** Prop que indica si se debe mostrar el boton de crear usuario en el select de usuarios */
  showButtonCreate: PropTypes.bool,
  /** Prop que indica si se debe mostrar el boton de crear usuario en el select de usuarios */
  clickButtonCreate: PropTypes.func,
  /** Indicador para el modal de colaborador */
  distribution: PropTypes.bool,
  /** Indicador para mostrar el icono de usuario tipo cliente en los users */
  showRoleClient: PropTypes.bool,
  /** Usuario loggeado en COR */
  loggedUser: PropTypes.object,
  /** indicador para mostrar el tooltip de capacidad en un usuario */
  showTootltipInUser: PropTypes.bool,
  /** Booleano que indica cuando el componente esta en un viewport dinamico (scroll infinito) */
  isDynamicViewport: PropTypes.bool,
}
