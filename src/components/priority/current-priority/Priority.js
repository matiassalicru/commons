/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useCallback, useRef, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
// Constant
import { CONFING_PRIORITIES } from '../constant'
// UI Components
import { IconPriority } from '../icon-priority'
import { RemainingPriorities } from '../remaining-priorities'
// Styles
import { SCWrapper, SCPriorityName } from './style'

const PRIORITIES = [
  CONFING_PRIORITIES['3'].priority,
  CONFING_PRIORITIES['2'].priority,
  CONFING_PRIORITIES['1'].priority,
  CONFING_PRIORITIES['0'].priority,
]

export const Priority = memo(
  ({
    top = 35,
    left = -10,
    priority,
    translations,
    withLabel = true,
    ableToEdit = true,
    updatePriority = () => {},
    isDynamicViewport = false,
  }) => {
    const [showList, setShowList] = useState(false)
    const [{ x, y }, setXy] = useState({ x: left, y: top })
    const PRIORITY_REF = useRef(null)

    useEffect(() => {
      showList && setXy(PRIORITY_REF?.current?.getBoundingClientRect())
    }, [showList])

    const handleToggleList = useCallback(() => {
      if (ableToEdit) {
        setShowList(!showList)
      }
    }, [])

    /**
     * Desmonto select de prioridad.
     */
    const handleCloseList = useCallback(() => setShowList(false), [])

    /**
     * Envío la prioridad seleccionada.
     * Llamo función que desmonta select de prioridad.
     */
    const handleUpdatePriority = useCallback(newPriority => {
      updatePriority(newPriority)
      handleCloseList()
    }, [])

    /**
     * Array con todas las prioridades menos la seleccionada por el usuario.
     */
    const REMAINING_PRIORITIES = useMemo(() => PRIORITIES.filter(priorityItem => priorityItem !== priority), [priority])

    /**
     * Nombre de la prioridad actual.
     */
    const CURRENT_PRIORITY_NAME = useMemo(() => translations[CONFING_PRIORITIES[priority]?.name], [priority])
    return (
      <SCWrapper withLabel={withLabel} ref={PRIORITY_REF}>
        <IconPriority
          priority={priority}
          isTooltip={!withLabel}
          ableToEdit={ableToEdit}
          translations={translations}
          currentPriorityClick={handleToggleList}
        />
        <SCPriorityName onClick={handleToggleList}>{withLabel && CURRENT_PRIORITY_NAME}</SCPriorityName>
        {showList && (
          <RemainingPriorities
            top={isDynamicViewport ? top : y + top}
            left={isDynamicViewport ? left : x + left}
            ableToEdit={ableToEdit}
            closeList={handleCloseList}
            translations={translations}
            priorities={REMAINING_PRIORITIES}
            updatePriority={handleUpdatePriority}
            isDynamicViewport={isDynamicViewport}
          />
        )}
      </SCWrapper>
    )
  },
  (prevProps, nextProps) =>
    prevProps.priority === nextProps.priority &&
    prevProps.ableToEdit === nextProps.ableToEdit &&
    prevProps.isDynamicViewport === nextProps.isDynamicViewport
)

Priority.propTypes = {
  /**
    Prop para posición top custom.
  */
  top: PropTypes.number,
  /**
    Prop para posición left custom.
  */
  left: PropTypes.number,
  /**
    Prop para determiar si muestra label o no.
  */
  withLabel: PropTypes.bool,
  /**
    Prop para determiar si se puede hacer cambio.
  */
  ableToEdit: PropTypes.bool,
  /**
    Función que se ejecuta al cambiar prioridad.
  */
  updatePriority: PropTypes.func,
  /**
    Prioridad seleccionada.
  */
  priority: PropTypes.number.isRequired,
  /**
    Traducciones.
  */
  translations: PropTypes.object.isRequired,
  /** Booleano que indica cuando el componente esta en un viewport dinamico (scroll infinito) */
  isDynamicViewport: PropTypes.bool,
}
