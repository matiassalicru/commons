import PropTypes from 'prop-types'
import { UserProvider } from '../../providers/UserProvider'
// Containers
import PMContainer from './src/containers/Users/PMContainer'
import { TitleContainer } from './src/containers/Title/TitleContainer'
import { StatusContainer } from './src/containers/StatusContainer'
import { MessageContainer } from './src/containers/MessageContainer'
import { DeadlineContainer } from './src/containers/Deadline/DeadlineContainer'
import { PriorityContainer } from './src/containers/PriorityContainer'
import CollaboratorContainer from './src/containers/Users/CollaboratorContainer'
import { ProgressBarContainer } from './src/containers/ProgressBarContainer'
import { ActionsContainer } from './src/containers/Actions/ActionsContainer'

// Styles
import { SCColumnWrapper } from './style'

// Components
import { TableWrapper } from './src/components/table-wrapper'

// Utils
import dispatchAmplitude from '../../utils/dispatchAmplitude'
// Constants
import { EDIT_TASK, UNARCHIVED, ARCHIVED } from './src/constants/dashboard'

const TaskRow = ({
  user,
  columns,
  getLinks,
  showSubtaskIcon = false,
  renderTask,
  dataCounter,
  afterUpdate,
  getSubTasks = () => {},
  isCollapsed,
  isLargeTask,
  openTaskPanel,
  originSection,
  isLastElement,
  hasBreadcrumb,
  hasDragAndDrop = false,
  handleShowError,
  handleUpdateTask,
  handleClickChargeHours,
  handleOpenUserAssigner,
  isDirectFatherRendered,
  isCollapsibleButtonVisible,
}) => {
  const handleUpdate = params => {
    handleAmplitude(params)
    return handleUpdateTask(params)
  }

  const handleAmplitude = params => {
    if (typeof params === 'object') {
      const keysUpdated = Object.keys(params)
      let action = keysUpdated[0]
      if (keysUpdated[0] === ARCHIVED) {
        action = !params.archived ? UNARCHIVED : ARCHIVED
      }
      dispatchAmplitude(EDIT_TASK, user.company_id, {
        action,
        section: originSection,
      })
    }
  }

  const columnObject = {
    status: (
      <StatusContainer
        width={4}
        key={`status-taskrow-${renderTask._id}`}
        getLinks={getLinks}
        taskId={+renderTask._id}
        dataCounter={dataCounter}
        isLargeTask={isLargeTask}
        taskTitle={renderTask.title}
        updateStatus={handleUpdate}
        handleShowError={handleShowError}
        currentStatus={renderTask.status}
        isInactiveClient={renderTask.project?.client?.clientStatusId === 3}
      />
    ),
    title: (
      <TitleContainer
        key={`title${renderTask._id}`}
        showSubtaskIcon={showSubtaskIcon}
        taskId={renderTask._id}
        title={renderTask.title}
        isCollapsed={isCollapsed}
        getSubTasks={getSubTasks}
        isLargeTask={isLargeTask}
        father={renderTask.father}
        status={renderTask.status}
        childQ={renderTask.childQ}
        project={renderTask.project}
        originSection={originSection}
        hasBreadcrumb={hasBreadcrumb}
        updateTask={handleUpdate}
        openTaskPanel={openTaskPanel}
        archived={renderTask.archived}
        hasDragAndDrop={hasDragAndDrop}
        deliverable={renderTask.deliverable}
        isDirectFatherRendered={isDirectFatherRendered}
        isCollapsibleButtonVisible={isCollapsibleButtonVisible}
      />
    ),
    messages: (
      <SCColumnWrapper key={`messages${renderTask._id}`}>
        {!!renderTask.counterGroup?.messages && (
          <MessageContainer
            taskId={renderTask._id}
            totalUnreadMessages={renderTask.unreadMessages}
            click={openTaskPanel}
          />
        )}
      </SCColumnWrapper>
    ),
    priority: (
      <SCColumnWrapper key={`priority${renderTask._id}`}>
        <PriorityContainer updateTask={handleUpdate} isLastElement={isLastElement} priority={renderTask?.priority} />
      </SCColumnWrapper>
    ),
    deadline: (
      <DeadlineContainer
        key={`deadline${renderTask._id}`}
        getLinks={getLinks}
        projectId={renderTask?.project?.id && +renderTask.project.id}
        taskId={renderTask._id}
        title={renderTask.title}
        status={renderTask.status}
        updateTask={handleUpdate}
        datetime={renderTask.datetime}
        deadline={renderTask.deadline}
        estimated={renderTask.estimated}
        handleShowError={handleShowError}
      />
    ),
    progress: <ProgressBarContainer key={`progress${renderTask._id}`} progress={renderTask.progress} />,
    pm: (
      <SCColumnWrapper key={`pm${renderTask._id}`}>
        <PMContainer task={renderTask} onChange={handleOpenUserAssigner} />
      </SCColumnWrapper>
    ),
    collaborator: (
      <SCColumnWrapper key={`collaborator${renderTask._id}`}>
        <CollaboratorContainer task={renderTask} onChange={handleOpenUserAssigner} />
      </SCColumnWrapper>
    ),
    actions: (
      <SCColumnWrapper key={`actions${renderTask._id}`}>
        <ActionsContainer
          project={renderTask.project}
          getLinks={getLinks}
          reload={!isCollapsed}
          taskId={+renderTask._id}
          title={renderTask.title}
          dataCounter={dataCounter}
          status={renderTask.status}
          childQ={renderTask.childQ}
          updateTask={handleUpdate}
          archived={renderTask.archived}
          afterUpdate={afterUpdate}
          deadline={renderTask.deadline}
          datetime={renderTask.datetime}
          handleClickChargeHours={handleClickChargeHours}
        />
      </SCColumnWrapper>
    ),
  }

  return <UserProvider user={user}>{columns.map(column => columnObject[column])}</UserProvider>
}

TaskRow.propTypes = {
  /**
   * Object with user Info
   */
  user: PropTypes.object.isRequired,
  /**
   * Array with columns to render
   */
  columns: PropTypes.array.isRequired,
  /**
   * Callback to get tasks links
   */
  getLinks: PropTypes.func.isRequired,
  /**
   * Task information
   */
  renderTask: PropTypes.object.isRequired,
  /**
   * Data counter information
   */
  dataCounter: PropTypes.object.isRequired,
  /**
   * Callback after update
   */
  afterUpdate: PropTypes.func.isRequired,
  /**
   * Callback to get subtasks
   */
  getSubTasks: PropTypes.func,
  /*
   * Indicates if the task will have the styles of the large row
   */
  isCollapsed: PropTypes.bool.isRequired,
  /*
   * Indicates if the task will have the styles of the large row
   */
  isLargeTask: PropTypes.bool.isRequired,
  /**
   * Callback for opening task panel
   */
  openTaskPanel: PropTypes.func.isRequired,
  /**
   * Indicates in which section we are rendering the task-row
   */
  originSection: PropTypes.string.isRequired,
  /**
   * Flag for knowing if the item is the last of the list
   */
  isLastElement: PropTypes.bool.isRequired,
  /**
   * Indicates if it should show the breadcrumb
   */
  hasBreadcrumb: PropTypes.bool.isRequired,
  /**
   * Callback for showing the default error alert
   */
  handleShowError: PropTypes.func.isRequired,
  /**
   * Callback for updating task
   */
  handleUpdateTask: PropTypes.func.isRequired,
  /**
   * Callback for charging hours.
   */
  handleClickChargeHours: PropTypes.func.isRequired,
  /**
   * Callback for open userAssigner
   */
  handleOpenUserAssigner: PropTypes.func.isRequired,
  /**
   * Indicates if the direct task father is rendered
   */
  isDirectFatherRendered: PropTypes.bool.isRequired,
  /**
   * Indicates if the collapsible button should be visible
   */
  isCollapsibleButtonVisible: PropTypes.bool.isRequired,
  /**
   * Indicates if the task is a subtask
   */
  showSubtaskIcon: PropTypes.bool,
  /**
   * Indicates if the collapsible button should be visible
   */
  hasDragAndDrop: PropTypes.bool,
}

export { TaskRow, TableWrapper }
