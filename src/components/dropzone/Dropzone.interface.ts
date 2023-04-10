import React from 'react'

export interface DropzoneProps {
  children?: React.ReactNode
  onDrop: () => void
  border: boolean
  fromFiles: boolean
  textContent: string
  displayGrid: boolean
}

// Style Component Props
export interface SCDropzoneProps {
  displayGrid?: boolean
  isDragActive?: boolean
  borderDefault?: boolean
  fromFiles?: boolean
}
