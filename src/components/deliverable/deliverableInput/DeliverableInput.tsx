import { ReactElement, useCallback, useMemo } from 'react'
// Global Component
import { AnimatePresence } from 'framer-motion'
// Wording
import { useTranslation } from 'react-i18next'
// Custom Component
import { ButtonIconCustom } from '../../button-icon-custom'
// style
import { SCDeliverableInputWrapper, SCDeliverableInput, SCDeliverableInputWrapperActions } from './style'
import { DeliverableInputProps, DeliverableStatus } from '../Deliverable.interface'

const MIN_WIDTH = 25
const MAX_WIDTH = 45
const CHAR_WIDTH = 12

export const DeliverableInput = ({
  onKeyDown = () => {
    // default function
  },
  updateValue = () => {
    // default function
  },
  value = 0,
  disabled = true,
  autoComplete = true,
  handleClickSave = () => {
    // default function
  },
  handleClickCancel = () => {
    // default function
  },
  handleFocus = () => {
    // default function
  },
  handleBlur = () => {
    // default function
  },
  editing,
  sv,
  editable,
  collapsed = false,
  deliverableStatus,
  refInput,
}: DeliverableInputProps): ReactElement => {
  const { t } = useTranslation('globals')
  const autoComp = autoComplete ? 'off' : 'on'
  const handleInputFocus = useCallback(event => {
    handleFocus()
    event.target.select()
  }, [])

  const calculateWidthInput = useMemo(() => {
    let width = String(value).length * CHAR_WIDTH

    if (width < MIN_WIDTH) {
      width = MIN_WIDTH
    }

    if (width > MAX_WIDTH) {
      width = MAX_WIDTH
    }

    return `${width}px`
  }, [value])

  return (
    <SCDeliverableInputWrapper sv={sv} editing={editing} collapsed={collapsed}>
      <SCDeliverableInput
        type="text"
        value={value}
        disabled={disabled}
        autoComplete={autoComp}
        onKeyDown={onKeyDown}
        onBlur={handleBlur}
        onChange={updateValue}
        onFocus={handleInputFocus}
        editable={editable && deliverableStatus === DeliverableStatus.COUNTER}
        sv={sv}
        aria-label="deliverableInput"
        deliverableStatus={deliverableStatus}
        maxLength={3}
        ref={refInput}
        style={{
          width: calculateWidthInput,
        }}
      />
      <AnimatePresence>
        {editing && (
          <SCDeliverableInputWrapperActions
            sv={sv}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <ButtonIconCustom
              onClikAction={handleClickSave}
              icon="check"
              background="#00C972"
              onHoverBackground="#00C972"
              color="#ffffff"
              size={20}
              iconSize={12}
              forTooltip="hours-confirm"
              withTip
              wordingTip={t('confirm')}
              dataTestId="check"
            />
            <ButtonIconCustom
              onClikAction={handleClickCancel}
              icon="times"
              background="#E44259"
              onHoverBackground="#E51C38"
              color="#ffffff"
              size={20}
              iconSize={12}
              forTooltip="hours-cancel"
              withTip
              wordingTip={t('cancel')}
              dataTestId="times"
            />
          </SCDeliverableInputWrapperActions>
        )}
      </AnimatePresence>
    </SCDeliverableInputWrapper>
  )
}
