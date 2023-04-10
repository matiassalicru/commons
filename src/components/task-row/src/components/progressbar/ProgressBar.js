import PropTypes from 'prop-types'

// Global components
import { BarProgress } from '../../../../bar-progress'
// Styles
import { SCProgressContainer, SCProgressLabel } from './style'

const MAX_PERCENT = 100
const ALERT_BG = '#e44259'
const PRIMARY_BG = '#1890FF'
export const ProgressBar = ({ progress }) => {
  return (
    <SCProgressContainer>
      <SCProgressLabel data-testid="progress-number" progress={progress}>
        {progress}%
      </SCProgressLabel>
      <BarProgress
        height={6}
        borderRadius={50}
        progress={progress}
        colorBaseBar="#ededed"
        colorPrimaryBar={(progress > MAX_PERCENT && ALERT_BG) || PRIMARY_BG}
      />
    </SCProgressContainer>
  )
}

ProgressBar.propTypes = {
  /**
   * Indica el porcentje de progreso
   */
  progress: PropTypes.number.isRequired,
}
