import { ReactElement } from 'react'
import { CalendarIntegrationSkeletonProps } from './CalendarIntegrationSkeleton.interface'
// Styles
import { SCListGrid, SCItemGridList, SCCard, SCTitle, SCHeader } from './style'

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

export function CalendarIntegrationSkeleton({
  quantity,
  padding = '16px',
}: CalendarIntegrationSkeletonProps): ReactElement {
  const quantityOfSkeletons = new Array(quantity)
  quantityOfSkeletons.fill(1)

  return (
    <>
      {quantityOfSkeletons.map(i => {
        const condition = i % 2 === 0
        return (
          <SCListGrid key={i} initial="initial" animate="animate" data-testid="attachment-card-list" padding={padding}>
            <SCItemGridList place={condition}>
              <SCHeader place={condition} variants={BAR_CARD} />
              <SCTitle place={condition} variants={BAR_CARD} />
              <SCCard place={condition} variants={BAR_CARD} />
            </SCItemGridList>
          </SCListGrid>
        )
      })}
    </>
  )
}
