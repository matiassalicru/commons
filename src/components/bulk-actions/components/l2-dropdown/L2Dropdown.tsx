import { FunctionComponent, ReactElement, useState, useCallback, useContext } from 'react'
// Wording
import { useTranslation } from 'react-i18next'
// Context
import { BulkActionsContext } from '../../Context'
// Types
import { L2DropdownTypes } from './L2Dropdown.interface'
// UI Components
import { List } from '../list'
import { Users } from '../users'
import { Datetime } from '../datetime'
import { TitleContainer } from './components/title-container'
import { UserAssignerUserType } from '../../../user-assigner'
// Styles
import { SCConfirmButton, SCWrapper, SCBackdrop } from './style'
// Constants
import { AMPLITUDE_EVENTS } from '../../utils/config'

export const L2Dropdown: FunctionComponent<L2DropdownTypes> = ({
  data,
  type,
  title,
  users,
  myData,
  onClose,
  onGoBack,
  handleFetcher,
  modalElementId,
  handleSelectValues,
}): ReactElement => {
  const { t } = useTranslation('globals')
  const [selectedOption, setSelectedOption] = useState(null)
  const { trackEvent } = useContext(BulkActionsContext)

  const { values: dataForAction, id } = data

  const handleSubmit = () => {
    trackEvent({
      event: AMPLITUDE_EVENTS.MORE_ACTIONS[id],
    })
    handleSelectValues(id, selectedOption)
    onClose()
  }

  /**
   * Setea la opción seleccionada de la lista
   */
  const handleSelect = useCallback(
    selection => {
      const formatData = {
        deadline: selection,
        status: selection[0]?.id,
        priority: selection[0]?.value,
      }
      setSelectedOption(formatData[id])
    },
    [id]
  )

  const onChangeUsers = useCallback(
    usersSelected => {
      handleSelectValues(id, usersSelected)
    },
    [id]
  )

  const L2Options = {
    date: <Datetime handleChangeDate={handleSelect} lang={myData.lang} />,
    text: <List data={dataForAction} onSelect={handleSelect} id={id} />,
    avatars: (
      <Users
        myData={myData}
        dataUsers={users}
        onChange={onChangeUsers}
        fetchUsers={handleFetcher}
        modalElementId={modalElementId}
        translations={data.translations}
        userType={id === UserAssignerUserType.PM ? id : UserAssignerUserType.COLLABORATOR}
      />
    ),
  }

  return (
    <>
      <SCWrapper>
        <TitleContainer title={title} onClose={onClose} onGoBack={onGoBack} />
        {L2Options[type]}
        <SCConfirmButton onClick={handleSubmit} disabled={!selectedOption}>
          {t('confirm')}
        </SCConfirmButton>
      </SCWrapper>
      <SCBackdrop data-testid="backdrop" onClick={onClose} />
    </>
  )
}
