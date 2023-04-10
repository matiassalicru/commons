/* eslint-disable consistent-return */
import { ReactElement, useCallback, useState, lazy, Suspense, useMemo, useEffect } from 'react'

// Utils
import Colors from '@projectcor/theme/lib/base/colors'

// Wordings
import { useTranslation } from 'react-i18next'

// Icons
import { Check } from '@projectcor/icons/lib/components/Check'

// Tooltips
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'

// Interface
import { AddTaskProps, ProjectDataTypes } from './AddTask.interface'

// Styles
import { SCWrapper, SCInput, SCButton, SCSearchWrapper } from './style'

// Constants
import { I18N_SECTION, AMPLITUDE_EVENTS, AMPLITUDE_ACTIONS } from './utils/config'
import { KEY_ENTER } from '../../constants'

// Components
const ProjectSearch = lazy(() => import('./components/ProjectSearch'))

export const AddTask = ({
  clientStatusId,
  id = 1,
  maxLength = 255,
  onSubmit,
  trackEvent,
  handleMaxLengthInputError,
  borderColor = '#b0dded',
  getProjects,
  projectDropdownWidth = 360,
  createWithoutProject = false,
}: AddTaskProps): ReactElement => {
  const [taskName, setTaskName] = useState('')
  const [error, setError] = useState(false)
  const [project, setProject] = useState({} as ProjectDataTypes)
  const { t } = useTranslation(I18N_SECTION)
  const isProjectSearchEnabled = !!getProjects

  const handleChange = useCallback(({ target: { value } }) => {
    if (value.length > maxLength) {
      const validateLengthName = value.substring(0, value.length - 1)
      setTaskName(validateLengthName)
      handleMaxLengthInputError()
    } else {
      setTaskName(value)
    }
  }, [])

  const inactiveClient = useMemo(() => clientStatusId === 3, [clientStatusId])

  const isDisabled = useMemo(
    () =>
      isProjectSearchEnabled && !createWithoutProject && inactiveClient
        ? !(Object.keys(project).length > 0 && taskName.replace(/\s+/g, '').length > 0)
        : taskName.replace(/\s+/g, '').length === 0,
    [isProjectSearchEnabled, project, taskName, inactiveClient]
  )

  const handleSubmit = useCallback(
    (_, withKeyboard) => {
      if (!taskName || isDisabled) return setError(true)
      if (error) setError(false)
      const { KEYBOARD, CLICK } = AMPLITUDE_ACTIONS
      onSubmit(taskName, project.id)
      setTaskName('')
      setProject({} as ProjectDataTypes)
      trackEvent({
        event: AMPLITUDE_EVENTS.CREATE_TASK,
        actionType: withKeyboard ? KEYBOARD : CLICK,
      })
    },
    [taskName, project, error, isDisabled]
  )

  const handleSubmitWithKeyboard = useCallback(
    event => {
      const { keyCode } = event
      if (keyCode === KEY_ENTER) {
        taskName && !isDisabled ? handleSubmit(event, AMPLITUDE_ACTIONS.KEYBOARD) : setError(true)
      }
    },
    [taskName, isDisabled]
  )

  useEffect(() => {
    if (Object.keys(project).length && error) setError(false)
  }, [project])

  return (
    <Tooltip title={inactiveClient ? t('create_task_inactive_client') : ''} placement="top">
      <SCWrapper
        data-js={`add-task-component-${id}`}
        borderColor={borderColor}
        onKeyDown={handleSubmitWithKeyboard}
        hasError={error}
        onBlur={() => setError(false)}
      >
        <SCInput
          value={taskName}
          onChange={handleChange}
          placeholder={`+ ${t('add')}`}
          maxLength={maxLength + 1}
          data-robot-id="addTask-input"
          id="addTask_input_experience"
          autoComplete="off"
          disabled={inactiveClient}
        />
        {isProjectSearchEnabled && (
          <Suspense fallback={<div />}>
            <SCSearchWrapper>
              <ProjectSearch
                project={project}
                borderColor={borderColor}
                getProjects={getProjects}
                handleSelectProject={setProject}
                projectDropdownWidth={error ? 450 : projectDropdownWidth}
                hasError={error}
                errorMessage={t('select-error-message')}
              />
            </SCSearchWrapper>
          </Suspense>
        )}
        <SCButton onClick={handleSubmit} borderColor={borderColor} data-robot-id="addTask-button">
          <Check color={Colors.white.main} width="16" height="16" />
        </SCButton>
      </SCWrapper>
    </Tooltip>
  )
}
