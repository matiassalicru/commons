import PropTypes from 'prop-types'
// Wording
import { useTranslation } from 'react-i18next'
// Global components
import { SvgIcon } from '../../../../svg-icon'
// Styles
import { SCChildIndicator, SCTextIndicator, SCIcon } from './style'

export const ChildIndicator = ({ openTaskPanel, getSubTasks = () => {} }) => {
  const { t } = useTranslation('projects')

  return (
    <SCChildIndicator>
      <SCIcon onClick={getSubTasks}>
        <SvgIcon iconName="list-tasks" />
      </SCIcon>
      <SCTextIndicator onClick={getSubTasks}>{t('sub_tasks')}</SCTextIndicator>
      <div onClick={openTaskPanel} data-testid="open-taskpanel-row" />
    </SCChildIndicator>
  )
}

ChildIndicator.propTypes = {
  /**
   * Callback para abrir el panel de tareas.
   */
  openTaskPanel: PropTypes.func,
  /**
   * Callback para expandir las subtareas
   */
  getSubTasks: PropTypes.func,
}
