export enum PlayStatus {
  play = 'play',
  stop = 'stop',
}

export enum PlayVariant {
  normal = 'normal',
  filled = 'filled',
}
export interface PlayProps {
  // Play counter status (start/stop).
  status: PlayStatus
  // Show or hide de tooltip related to the counter
  showTooltip: boolean
  // Function to handle the click to the play or stop icon
  handleClick: () => void
  // wordingTip
  wordingTip: string
  // robotId
  dataRobotId?: string
  // Play with or without background
  playVariant?: PlayVariant
  // Add margin to play button
  hasMargin?: boolean
  // Add disabled to play button
  isDisabled?: boolean
  // Check if client is inactive
  isInactiveClient?: boolean
}

// Style Component Props
export interface SCPlayProps {
  isStop?: boolean
  hasMargin?: boolean
  playVariant: PlayVariant
  isInactiveClient?: boolean
}
