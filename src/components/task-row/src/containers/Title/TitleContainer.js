import { memo, useCallback, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
// Wording
import { useTranslation } from 'react-i18next'
// Context
import { UserContext } from '../../../../../providers/UserProvider'
// Global Components
import { Title } from '../../../../title'
import { checkPermissions, ACTION_EDIT, SECTION_TASK } from '../../../../../utils/permissions'
// Components
import { DeliverableComponent } from '../../../../deliverable'
import { ChildIndicator } from '../../components/child-indicator'
import { CollapsibleButton } from '../../components/colapsible-button'
// Styles
import { SCTitle, SCWrapper, SCTitleDeliverable } from './style'
// containers
import { BreadcrumbContainer } from '../Breadcrumb/BreadcrumbContainer'

export const TitleContainer = memo(
  ({
    title,
    father,
    taskId,
    status,
    project,
    archived,
    childQ = 0,
    showSubtaskIcon,
    updateTask,
    isCollapsed,
    isLargeTask,
    originSection,
    hasBreadcrumb,
    hasDragAndDrop,
    deliverable = 0,
    getSubTasks = () => true,
    openTaskPanel = () => true,
    isDirectFatherRendered = true,
    isCollapsibleButtonVisible,
  }) => {
    const { t } = useTranslation('tooltips')

    const { permissions } = useContext(UserContext)
    /**
     * Memorizo la validacion de permiso de editar el título
     */
    const permissionsEdit = useMemo(() => checkPermissions(permissions, SECTION_TASK, ACTION_EDIT), [])

    /**
     * Memoriza si la tarea tiene hijos o no
     */
    const validateChildQ = useMemo(() => !!(childQ && childQ > 0), [childQ])

    /**
     * Memorizo el tooltip del boton de colapsar
     */
    const tooltipCollapsibleButton = useMemo(
      () => (isCollapsed ? t('open_collapsibleTasks') : t('close_collapsibleTasks')),
      [isCollapsed]
    )
    /**
     * Callback para actualizar una tarea
     */
    const handleChangeTitle = useCallback((id, title) => {
      updateTask({
        title,
      })
    }, [])

    return (
      <SCWrapper isLargeTask={isLargeTask}>
        <BreadcrumbContainer
          father={father}
          project={project}
          originSection={originSection}
          hasBreadcrumb={hasBreadcrumb}
          validateChildQ={validateChildQ}
          isDirectFatherRendered={isDirectFatherRendered}
          deliverable={!!deliverable}
        />
        <SCTitle childQ={isCollapsibleButtonVisible}>
          {isCollapsibleButtonVisible && (
            <CollapsibleButton
              color={status}
              isClosed={isCollapsed}
              clickAction={getSubTasks}
              tooltip={tooltipCollapsibleButton}
            />
          )}
          <SCTitleDeliverable archived={archived} hasDragAndDrop={hasDragAndDrop}>
            {!!deliverable && (
              <DeliverableComponent
                archived={archived}
                deliverable={deliverable}
                simpleVersion
                tooltip
                editable={false}
              />
            )}
            <Title
              showSubtaskIcon={showSubtaskIcon}
              tooltip={title}
              content={title}
              entityId={taskId}
              clickTitle={openTaskPanel}
              ableToEdit={permissionsEdit}
              changeTitle={handleChangeTitle}
              hasDragAndDrop={hasDragAndDrop}
            />
          </SCTitleDeliverable>
        </SCTitle>
        {isCollapsibleButtonVisible && <ChildIndicator openTaskPanel={openTaskPanel} getSubTasks={getSubTasks} />}
      </SCWrapper>
    )
  },
  (prevProps, nextProps) =>
    prevProps.title === nextProps.title &&
    prevProps.hasBreadcrumb === nextProps.hasBreadcrumb &&
    prevProps.father === nextProps.father &&
    prevProps.status === nextProps.status &&
    prevProps.isCollapsibleButtonVisible === nextProps.isCollapsibleButtonVisible
)

TitleContainer.propTypes = {
  /**
   * Callback to execute when expand is clicked
   */
  getSubTasks: PropTypes.func,
  /**
   * Callback  to open panel
   */
  openTaskPanel: PropTypes.func,
  /**
   * title of task
   */
  title: PropTypes.string.isRequired,
  /**
   * father data
   */
  father: PropTypes.object,
  /**
   * Task id
   */
  taskId: PropTypes.string.isRequired,
  /**
   * shows if the task is archived
   */
  status: PropTypes.string.isRequired,
  /**
   * Indica si la tarea está archivadda
   */
  archived: PropTypes.bool.isRequired,
  /**
   * shows number of children of the task
   */
  childQ: PropTypes.number,
  /**
   * shows the section
   */
  originSection: PropTypes.string.isRequired,
  /**
   * Project data
   */
  project: PropTypes.object,
  /**
   * shows if a task is deliverable
   */
  deliverable: PropTypes.number,
  /**
   * Callback to update the task
   */
  updateTask: PropTypes.func.isRequired,
  /**
   * shows if the task was expanded or not
   */
  isCollapsed: PropTypes.bool.isRequired,
  /**
   * shows if there should be a breadcrumb
   */
  hasBreadcrumb: PropTypes.bool.isRequired,
  /**
   * shows if the task will have the styles of the big row or not
   */
  isLargeTask: PropTypes.bool.isRequired,
  /**
   * shows if the ordering is the default
   */
  hasSubtaskOrder: PropTypes.bool,
  /**
   * shows if it has the rendered parent
   */
  isDirectFatherRendered: PropTypes.bool,
  /**
   * show if it has rendered children
   */
  hasChildrenRendered: PropTypes.bool,
  /**
   * Indicates if the task is a subtask
   */
  showSubtaskIcon: PropTypes.bool,
  /**
   * Indicates if the collapsible button should be showed
   */
  isCollapsibleButtonVisible: PropTypes.bool.isRequired,
  /**
   * Indicates if the task is drag and droppable
   */
  hasDragAndDrop: PropTypes.bool.isRequired,
}
