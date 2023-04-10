export interface TrialButtonProps {
  /*
   * The text to display on the button
   */
  title: string
  /*
   * The action to perform when the button confirm in the modal is clicked
   */
  onClickAction?: () => void
  /*
   * Boolean to define if the button should be interactive
   */
  isInteractive?: boolean
  captionTextContent?: string
  modalTitle?: string
  modalTextContent?: string
  modalConfirmButtonLabel?: string
  idToRenderModal?: string
  showConfirmButton?: boolean
}

export interface TrialButtonStylesProps {
  isInteractive: boolean
}
