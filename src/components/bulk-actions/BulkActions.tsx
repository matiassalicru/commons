import { useState, useCallback, FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
// Context
import { BulkActionsContext } from './Context'
// UI Components
import { Dropdown } from '../dropdown'
import { Actions } from './components/actions'
import { L2Dropdown } from './components/l2-dropdown'
// Styles
import { SCActionBar, SCCounter, SCBarIcons, SCMenus } from './styles'
// Interfaces
import { BulkActionsType } from './BulkActions.interface'
import { ItemType } from '../dropdown/Dropdown.interface'
// Utils
import { getMappedActions } from './utils/getMappedActions'
// Constants
import { BULK_ACTIONS_TYPE } from '../../constants/bulkActions/types'
import { AMPLITUDE_EVENTS, I18N_SECTION } from './utils/config'
import { AVAILABLE_KEYS_TRANSLATES } from './utils/actions-translates'

export const BulkActions: FunctionComponent<BulkActionsType> = ({
  users,
  myData,
  trackEvent,
  bulkActions,
  selectedItems,
  handleFetcher,
  modalElementId,
  handleCloseWidget,
  handleSelectValues,
}) => {
  const [dataForL2, setDataForL2] = useState({})
  const [isL2Open, setIsL2Open] = useState(false)
  const [isL1Open, setIsL1Open] = useState(false)
  const [showWidget, setShowWidget] = useState(true)
  const { t } = useTranslation(I18N_SECTION)

  const openL1 = useCallback(() => {
    setIsL1Open(true)
  }, [])
  /**
   * Abre el L2
   */
  const openL2 = useCallback(() => {
    setIsL2Open(true)
  }, [])

  /**
   * Cierra el L2
   */
  const closeL2 = useCallback((e?) => {
    e?.stopPropagation()
    setIsL2Open(false)
  }, [])

  /**
   * Cierra el L1
   */
  const closeL1 = useCallback(() => {
    setIsL1Open(false)
  }, [])

  const handleCloseMenus = useCallback(() => {
    closeL1()
    closeL2()
  }, [])

  /**
   * Oculta el widget
   */
  const hideWidget = useCallback(() => {
    setShowWidget(false)
    handleCloseMenus()
    handleCloseWidget()
    trackEvent({
      event: AMPLITUDE_EVENTS.CLOSE_WIDGET,
    })
  }, [])

  /**
   * Cierra el L2 y abre el L1
   */
  const onGoBack = useCallback(() => {
    closeL2()
    openL1()
  }, [])

  const handleTrackEventOptionClick = useCallback(({ id }, inputType) => {
    trackEvent({
      event: AMPLITUDE_EVENTS.SELECT_OPTION,
      option: id,
      type: inputType,
    })
  }, [])

  const handleSelectItem = useCallback(async (data: ItemType, inputType) => {
    handleTrackEventOptionClick(data, inputType)
    if (data.id === BULK_ACTIONS_TYPE.STATUS || data.id === BULK_ACTIONS_TYPE.PRIORITY) {
      if (data.data) {
        const dataMapped = getMappedActions(data.id, data.data)
        setDataForL2(dataMapped)
      }
    } else {
      setDataForL2(data)
    }

    openL2()
    closeL1()
  }, [])

  const contextData = {
    trackEvent,
  }

  const handleSelectValueData = (type, data) => {
    closeL2()
    setDataForL2({})
    handleSelectValues(type, data)
  }

  return (
    <BulkActionsContext.Provider value={contextData}>
      {showWidget && (
        <SCActionBar id="wrapper-bulk-actions-options">
          <SCCounter>
            {+selectedItems === 1
              ? `${selectedItems} ${t('bulk_selected_task')}`
              : `${selectedItems} ${t('bulk_selected_tasks')}`}
          </SCCounter>
          <SCBarIcons>
            <Actions
              openL1={openL1}
              actions={bulkActions}
              hideWidget={hideWidget}
              selectedItems={selectedItems}
              handleSelectValues={handleSelectValueData}
            />
          </SCBarIcons>
          <SCMenus>
            {isL1Open && (
              <Dropdown
                onClose={handleCloseMenus}
                handleSelectItem={handleSelectItem}
                items={bulkActions.actions.actions}
                translatesKeyMapper={AVAILABLE_KEYS_TRANSLATES}
                i18nSection={I18N_SECTION}
                isKeyboardNavigationAvailable={false}
              />
            )}
            {isL2Open && dataForL2 && (
              <L2Dropdown
                users={users}
                myData={myData}
                data={dataForL2}
                onClose={closeL2}
                onGoBack={onGoBack}
                type={dataForL2.type}
                handleFetcher={handleFetcher}
                modalElementId={modalElementId}
                title={t(AVAILABLE_KEYS_TRANSLATES[dataForL2.id])}
                handleSelectValues={handleSelectValueData}
              />
            )}
          </SCMenus>
        </SCActionBar>
      )}
    </BulkActionsContext.Provider>
  )
}
