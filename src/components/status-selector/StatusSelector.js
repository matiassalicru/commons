import { useCallback, useState, useMemo, memo } from 'react'
import PropTypes from 'prop-types'
// Constant
import { STATUS_CONFIG, IN_DESIGN, IN_REVISION } from './constant'
// UI Components
import { RemainingStatus } from './remaining-status'
// Styles
import { SCCurrentStatus } from './style'
// Tooltip
import { Tooltip } from '@projectcor/tooltipv2/lib/components/Tooltip'

export const StatusSelector = memo(
  ({
    currentStatus,
    updateStatus,
    ableToEdit,
    isInDesignStatusAllowed = false,
    isInReviewStatusAllowed = false,
    width = 10,
    boxWidth = 50,
    tooltipWording = '',
  }) => {
    const [showList, setShowList] = useState(false)

    /**
     * Renderizo select de status en el mouse enter.
     */
    const handleMouseEnter = useCallback(() => {
      if (ableToEdit) {
        setShowList(true)
      }
    }, [ableToEdit])

    /**
     * Desmonto select de status en el mouse leave.
     */
    const handleMouseLeave = useCallback(() => {
      setShowList(false)
    }, [])

    /**
     * Envío el status seleccionado.
     * Llamo función que desmonta select de status.
     */
    const handleUpdataState = newStatus => {
      updateStatus(newStatus)
      setShowList(false)
    }

    /**
     * Array con todas los status menos el seleccionado por el usuario.
     */
    const REMAINING_STATUS = useMemo(() => {
      if (!isInReviewStatusAllowed) {
        delete STATUS_CONFIG[IN_REVISION]
      }

      if (!isInDesignStatusAllowed) {
        delete STATUS_CONFIG[IN_DESIGN]
      }

      return Object.keys(STATUS_CONFIG).filter(status => status !== currentStatus)
    }, [currentStatus, isInDesignStatusAllowed, isInReviewStatusAllowed])

    return (
      <Tooltip placement="right" title={tooltipWording}>
        <SCCurrentStatus
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          colorStatus={STATUS_CONFIG[currentStatus]?.color}
          ableToEdit={ableToEdit}
          width={width}
          className="current-status-wrapper appcues_current_status"
        >
          {showList && (
            <RemainingStatus boxWidth={boxWidth} statusList={REMAINING_STATUS} setStatus={handleUpdataState} />
          )}
        </SCCurrentStatus>
      </Tooltip>
    )
  }
)

StatusSelector.defaultProps = {
  width: 10,
  boxWidth: 50,
  isInDesignStatusAllowed: false,
  isInReviewStatusAllowed: false,
}

StatusSelector.propTypes = {
  /**
    El estado seleccionado.
  */
  currentStatus: PropTypes.string.isRequired,
  /**
    Función para actualizar el estado.
  */
  updateStatus: PropTypes.func.isRequired,
  /**
    Flag que indica si puede o no hacer un cambio de estado
  */
  ableToEdit: PropTypes.bool.isRequired,
  /**
    Indicador del ancho de la barra. El valor por defecto es 10
  */
  width: PropTypes.number,
  /**
    Flag que indica si se debe mostrar el estado "En diseño" 
  */
  isInDesignStatusAllowed: PropTypes.bool,
  /**
    Flag que indica si se debe mostrar el estado "En revision" 
  */
  isInReviewStatusAllowed: PropTypes.bool,
  /**
    Indicador del ancho de la caja que se observa al hacer hover. El valor por defecto es 50
  */
  boxWidth: PropTypes.number,
  tooltipWording: PropTypes.string,
}
