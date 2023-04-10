import { ReactElement } from 'react'
import { AttachmentCardSkeletonProps } from './AttachmentCardSkeleton.interface'
// Styles
import { SCListGrid, SCItemGridList, SCCard, SCText } from './style'

const BAR_CARD = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
}

export function AttachmentCardSkeleton({ quantity }: AttachmentCardSkeletonProps): ReactElement {
  const quantityOfSkeletons = new Array(quantity)
  quantityOfSkeletons.fill(1)

  return (
    <>
      {quantityOfSkeletons.map(i => {
        const condition = i % 2 === 0
        return (
          <SCListGrid key={i} initial="initial" animate="animate" data-testid="attachment-card-list">
            <SCItemGridList place={condition}>
              <SCCard place={condition} variants={BAR_CARD} />
              <SCText place={condition} variants={BAR_CARD} />
            </SCItemGridList>
          </SCListGrid>
        )
      })}
    </>
  )
}
