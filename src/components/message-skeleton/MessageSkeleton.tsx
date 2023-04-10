// Styles
import { ReactElement } from 'react'
import { MessageSkeletonProps } from './MessageSkeleton.interface'
import { SCListGrid, SCItemGridList, SCCircle, SCBar } from './style'

const BAR_CIRCLE = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
}

export function MessageSkeleton({ quantity }: MessageSkeletonProps): ReactElement {
  const quantityOfSkeletons = new Array(quantity)
  quantityOfSkeletons.fill(1)

  return (
    <SCListGrid initial="initial" animate="animate">
      {quantityOfSkeletons.map((_skeleton, i) => {
        const condition = i % 2 === 0
        return (
          <SCItemGridList key={Math.floor(Math.random() * 100)} place={condition} data-testid="message-skeleton-list">
            <SCCircle place={condition} variants={BAR_CIRCLE} />
            <SCBar place={condition} variants={BAR_CIRCLE} />
          </SCItemGridList>
        )
      })}
    </SCListGrid>
  )
}
