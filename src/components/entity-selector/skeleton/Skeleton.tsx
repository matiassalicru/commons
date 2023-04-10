import { ReactElement } from 'react'
import { SCWrapper, SCTitle, SCInfo } from './style'

export const Skeleton = (): ReactElement => {
  return (
    <SCWrapper>
      <SCTitle />
      <SCInfo />
      <SCTitle />
    </SCWrapper>
  )
}
