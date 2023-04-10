import React from 'react'

export interface ButtonSendProps {
  sending: boolean
  handleClick: (buttonRef: React.Ref<HTMLButtonElement>) => void
  isDisabed: boolean
  children?: React.ReactNode
}
