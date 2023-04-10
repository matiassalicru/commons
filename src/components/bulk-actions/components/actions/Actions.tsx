import { FunctionComponent, useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
// Context
import { BulkActionsContext } from '../../Context'
// UI Components
import { ButtonIconCustomWithTooltip } from '../../../button-icon-custom'
// Interfaces
import { ActionsTypes } from './Actions.interface'
import { AMPLITUDE_EVENTS, I18N_SECTION } from '../../utils/config'
/**
 * Estilos globales del icono de una acción
 */
const BUTTON_STYLE = {
  iconSize: 16,
  color: '#5a5a5a',
  background: '#ffffff',
  onHoverBackground: '#eaeceb',
}

export const Actions: FunctionComponent<ActionsTypes> = ({
  openL1,
  actions,
  hideWidget,
  selectedItems,
  handleSelectValues,
}) => {
  const { trackEvent } = useContext(BulkActionsContext)
  const { t } = useTranslation(I18N_SECTION)

  const handleClickOption = (actionId, value?) => {
    trackEvent({
      event: AMPLITUDE_EVENTS.ACTIONS[actionId],
    })
    handleSelectValues(actionId, value)
  }

  const handleClickMoreOptions = useCallback(() => {
    trackEvent({
      event: AMPLITUDE_EVENTS.MORE_OPTIONS,
    })
    openL1()
  }, [])

  const UIActions = {
    archive: (
      <ButtonIconCustomWithTooltip
        icon="archive"
        dataTestId="option-widget-button"
        wordingTip={t('bulk_archive_tasks')}
        onClikAction={() => handleClickOption('archive', true)}
        {...BUTTON_STYLE}
      />
    ),
    unarchive: (
      <ButtonIconCustomWithTooltip
        icon="inbox-out"
        dataTestId="option-widget-button"
        wordingTip={t('bulk_unarchive_tasks')}
        onClikAction={() => handleClickOption('archive', false)}
        {...BUTTON_STYLE}
      />
    ),
    delete: (
      <ButtonIconCustomWithTooltip
        icon="trash-alt"
        dataTestId="option-widget-button"
        wordingTip={t('bulk_delete_tasks')}
        onClikAction={() => handleClickOption('delete')}
        {...BUTTON_STYLE}
      />
    ),
    copyLinks: (
      <ButtonIconCustomWithTooltip
        icon="link-light"
        dataTestId="option-widget-button"
        onClikAction={() => handleClickOption('copyLinks')}
        wordingTip={t(`bulk_copy_task${selectedItems > 1 ? 's' : ''}_url`)}
        {...BUTTON_STYLE}
      />
    ),
    actions: (
      <ButtonIconCustomWithTooltip
        icon="ellipsis-v"
        dataTestId="more-actions-widget-button"
        onClikAction={handleClickMoreOptions}
        wordingTip={t('bulk_more_options')}
        {...BUTTON_STYLE}
      />
    ),
  }

  const iterableActions = useMemo(
    () => Object.keys(actions).map(actionId => <div key={`${actionId}-option`}>{UIActions[actionId]}</div>),
    [handleClickOption, selectedItems]
  )

  return (
    <>
      {iterableActions}
      <ButtonIconCustomWithTooltip
        icon="times"
        dataTestId="close-widget-button"
        onClikAction={hideWidget}
        {...BUTTON_STYLE}
      />
    </>
  )
}
