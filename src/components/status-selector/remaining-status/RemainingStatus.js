import PropTypes from 'prop-types'
// Traducciones
import { useTranslation } from 'react-i18next'
// UI Components
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'
// Constant
import { STATUS_CONFIG } from '../constant'
// Styles
import { SCWrapperList, SCList, SCStatusBoxItem } from './style'

export const RemainingStatus = ({ setStatus, statusList, boxWidth = 50 }) => {
  const { t } = useTranslation(['globals', 'task'])

  /**
   * Envío status seleccionado.
   */
  const handleClickStatus = newStatus => {
    setStatus(newStatus)
  }

  return (
    <SCWrapperList>
      <SCList initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.2 } }}>
        {statusList.map((status, i) => (
          <Tooltip
            key={`tooltip-${status}-${i}`}
            title={`${t('task:status-tooltip')} ${t(`globals:${status}`)}`}
            placement="top"
          >
            <SCStatusBoxItem
              boxWidth={boxWidth}
              colorStatus={STATUS_CONFIG[status].color}
              onClick={() => handleClickStatus(status)}
            >
              <span>{t(`globals:${STATUS_CONFIG[status].name}`)}</span>
            </SCStatusBoxItem>
          </Tooltip>
        ))}
      </SCList>
    </SCWrapperList>
  )
}

RemainingStatus.defaultProps = {
  boxWidth: 50,
}

RemainingStatus.propTypes = {
  /**
    Función para seleccionar el estado.
  */
  setStatus: PropTypes.func.isRequired,
  /**
    Lista de estados para mostrar
  */
  statusList: PropTypes.array.isRequired,
  /**
    Width of status box
  */
  boxWidth: PropTypes.number,
}
