import { useMemo, useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
// Containers
import { PlayContainer } from '@projectcor/hours-counter-service-provider/lib/counter'
import { ArchiveContainer } from '../ArchiveContainer'
import { ChargeHoursContainer } from '../ChargeHoursContainer'
// Styles
import { LYWrapper, LYTimer } from './style'
// Global Styles
import { theme } from '../../../style'
// Utils
import {
  checkPermissions,
  ACTION_VIEW,
  ACTION_CREATE,
  ACTION_ARCHIVE,
  SECTION_TASK,
  SECTION_HOURS,
} from '../../../../../utils/permissions'
// Context
import { UserContext } from '../../../../../providers/UserProvider'

const CUSTOM_CSS = {
  size: 36,
  iconSize: 21,
  color: '#898e95',
  onHoverColor: '#333333',
  onHoverBackground: '#e2e2e2',
}

const CLEVEL = 'C-Level'

export const ActionsContainer = ({
  title,
  status,
  taskId,
  deadline,
  getLinks,
  datetime,
  archived,
  childQ = 0,
  reload = false,
  updateTask = () => true,
  afterUpdate = () => true,
  project = {},
  handleClickChargeHours,
  dataCounter,
}) => {
  const user = useContext(UserContext)
  const permissions = user?.permissions || {}
  /**
   * Memorizo la validación de crear horas
   */
  const enabledToCreateHours = useMemo(() => checkPermissions(permissions, SECTION_HOURS, ACTION_CREATE), [])

  /**
   * Memorizo la validación de ver horas
   */
  const enabledToViewHours = useMemo(() => checkPermissions(permissions, SECTION_HOURS, ACTION_VIEW), [])

  /**
   * Memorizo la validacion de mostrar el icono play
   */
  const enabledToShowPlay = useMemo(() => enabledToViewHours || enabledToCreateHours || user?.role === CLEVEL, [])

  /**
   * Memorizo la validacion de mostrar el icono hours
   */
  const enabledToShowHours = useMemo(() => enabledToCreateHours || user?.role === CLEVEL, [])

  /**
   * Memorizo la validación para archivar/desarchivar tareas
   */
  const enabledToArchive = useMemo(
    () => checkPermissions(permissions, SECTION_TASK, ACTION_ARCHIVE) || user?.role === CLEVEL,
    []
  )

  const thisTaskHasPlay = dataCounter.playData?.taskId === taskId

  const showOtherActions = !(dataCounter.playData?.active && thisTaskHasPlay)

  return (
    <LYWrapper>
      <ThemeProvider theme={theme}>
        {enabledToShowPlay && (
          <PlayContainer
            title={title}
            taskId={taskId}
            status={status}
            project={project}
            getLinks={getLinks}
            dataCounter={dataCounter}
            handleUpdate={updateTask}
            thisTaskHasPlay={thisTaskHasPlay}
          />
        )}
        {showOtherActions ? (
          <>
            {enabledToShowHours && (
              <ChargeHoursContainer
                title={title}
                status={status}
                taskId={taskId}
                project={project}
                deadline={deadline}
                datetime={datetime}
                customCSS={CUSTOM_CSS}
                handleClick={handleClickChargeHours}
              />
            )}
            {enabledToArchive && (
              <ArchiveContainer
                taskId={taskId}
                status={status}
                childQ={childQ}
                reload={reload}
                archived={archived}
                customCSS={CUSTOM_CSS}
                handleUpdate={updateTask}
                afterUpdate={afterUpdate}
              />
            )}
          </>
        ) : (
          <LYTimer className={`timeKeeper_${taskId}`} />
        )}
      </ThemeProvider>
    </LYWrapper>
  )
}

ActionsContainer.propTypes = {
  /**
   * Indica si se realiza el reload
   */
  reload: PropTypes.bool,
  /**
   * Indica la cantidad de subtareas
   */
  childQ: PropTypes.number,
  /**
   * Indica el estado de la tarea
   */
  status: PropTypes.string,
  /**
   * Título de la tarea
   */
  title: PropTypes.string,
  /**
   * Datos necesarios para el Play/Stop
   */
  dataCounter: PropTypes.object.isRequired,
  /**
   * Callback a ejecutar luego de archivar/desarchivar
   */
  afterUpdate: PropTypes.func,
  /**
   *  Callback que actualiza la tarea
   * */
  updateTask: PropTypes.func,
  /**
   * ID de la tarea
   */
  taskId: PropTypes.number.isRequired,
  /**
   * Indica si la tarea esta archivada o no
   */
  archived: PropTypes.bool.isRequired,
  /**
   * Datos del project (id, name, client, brand)
   */
  project: PropTypes.object,
  /**
   * Deadline de la tarea
   */
  deadline: PropTypes.string,
  /**
   * Inicio de la tarea
   */
  datetime: PropTypes.string.isRequired,
  /**
   * Callback al dar click en el boton de carga de hora
   */
  handleClickChargeHours: PropTypes.func.isRequired,
  /**
   * Callback que obtiene los links de la tarea
   */
  getLinks: PropTypes.func.isRequired,
}
