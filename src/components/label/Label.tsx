// Styles
import { ReactElement } from 'react'
import { LabelProps } from './Label.interface'
import { SCLabel } from './style'

export function Label({ variant, children }: LabelProps): ReactElement {
  return <SCLabel variant={variant}>{children}</SCLabel>
}
