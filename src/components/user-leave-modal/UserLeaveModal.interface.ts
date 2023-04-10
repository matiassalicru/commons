export interface UserLeaveModalProps {
  title: string
  textContent: string
  clickButtonCancel: () => void
  clickButtonAccept: () => void
  titleAccept: string
  titleCancel: string
  handleChangeCheck
  checkValue: boolean
  labelCheckbox: string
}
