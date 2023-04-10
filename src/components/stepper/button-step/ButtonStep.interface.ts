export enum Position {
  left = 'left',
  right = 'right',
}

export interface ButtonStepProps {
  position: Position
  icon: string
  title: string
  onClickButton: () => void
  testId?: string
  color?: string
  hoverColor?: string
}

export interface SCContentProps {
  position: Position
  color?: string
  hoverColor?: string
}
