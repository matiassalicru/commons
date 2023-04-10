export interface DotProps {
  selected: boolean
  step: number
  onClickDot: (step: number) => void
}

export interface SCDotProps {
  selected: boolean
  onClick: (step: number) => void
}
