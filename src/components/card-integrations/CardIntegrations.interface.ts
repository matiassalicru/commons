import React from 'react'

export interface CardIntegrationsProps {
  type: string
  link?: string
  onConnect: () => void
  infoButton?: boolean
  handleClickInfoButton?: () => void
  isActive?: boolean
  description: string
  title: string
  category?: string
  isLoading?: boolean
  appLogo: React.ReactNode
  tooltipInfoButton?: string
  provider?: React.ReactNode
}

export interface ContentProps {
  category?: string
}
