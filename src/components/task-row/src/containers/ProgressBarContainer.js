import { memo } from 'react'
import PropTypes from 'prop-types'

// UI Components
import { ProgressBar } from '../components/progressbar'

const ProgressBarContainerMemo = ({ progress }) => {
  return <ProgressBar progress={progress} />
}

export const ProgressBarContainer = memo(ProgressBarContainerMemo, (prevProps, nextProps) => {
  return prevProps.progress === nextProps.progress
})

ProgressBarContainerMemo.propTypes = {
  /**
   * Indica el porcentaje del progreso
   */
  progress: PropTypes.number.isRequired,
}
