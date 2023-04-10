import { Wordings } from '../../InputHourButton.interface'

export interface ModalSuggestionOptionsProps {
  handleConfirmHour: (value?) => void
  handleDenyHour: (value?) => void
  handleEditHour: (value?) => void
  wordings: Wordings
}
