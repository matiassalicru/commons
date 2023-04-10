// Utils
import { v4 as uuid } from 'uuid'

// Types
import { ReactElement } from 'react'
import { TaskRowSkeletonProps } from './TaskRowSkeleton.interface'

// Styles
import {
  SCList,
  SCItem,
  SCItemFirst,
  SCItemCheck,
  SCStatus,
  SCCircle,
  SCSmallCircle,
  SCSmallBar,
  SCMediumBar,
  SCBigBar,
  SCWrappperTitle,
  SCWrappperActions,
  SCColumnWrapper,
} from './style'

// Constants
import { defaultColumns } from './utils/constants'

export const TaskRowSkeleton = ({
  quantity = 1,
  isLargeTask = true,
  hasCheckBox = false,
  columns = defaultColumns,
}: TaskRowSkeletonProps): ReactElement => {
  const skeletonsQuantity = Array.from(Array(quantity).keys())

  const columnsObject = {
    title: (
      <SCItem>
        <SCWrappperTitle data-testid="title-skeleton">
          <SCBigBar />
          <SCMediumBar />
        </SCWrappperTitle>
      </SCItem>
    ),
    messages: (
      <SCItem className="center-flex">
        <SCCircle data-testid="messages-skeleton" />
      </SCItem>
    ),
    priority: (
      <SCItem className="center-flex">
        <SCCircle data-testid="priority-skeleton" />
      </SCItem>
    ),
    deadline: (
      <SCItem className="center-flex">
        <SCSmallBar data-testid="deadline-skeleton" />
      </SCItem>
    ),
    progress: (
      <SCItem className="center-flex">
        <SCSmallBar data-testid="progress-skeleton" />
      </SCItem>
    ),
    pm: (
      <SCItem className="center-flex">
        <SCCircle data-testid="pm-skeleton" />
      </SCItem>
    ),
    collaborator: (
      <SCItem className="center-flex">
        <SCCircle data-testid="collaborator-skeleton" />
      </SCItem>
    ),
    actions: (
      <SCItem className="center-flex">
        <SCWrappperActions data-testid="actions-skeleton">
          <SCSmallCircle />
          <SCSmallCircle />
          <SCSmallCircle />
        </SCWrappperActions>
      </SCItem>
    ),
  }

  return (
    <>
      {skeletonsQuantity.map(() => (
        <SCList key={uuid()} hasCheckBox={hasCheckBox} columns={columns} isLargeTask={isLargeTask}>
          {hasCheckBox && (
            <SCItemFirst>
              <SCItemCheck data-testid="check-skeleton" />
            </SCItemFirst>
          )}
          <SCItem>
            <SCStatus data-testid="status-skeleton" />
          </SCItem>
          {columns.map(column => (
            <SCColumnWrapper key={uuid()}>{columnsObject[column]}</SCColumnWrapper>
          ))}
        </SCList>
      ))}
    </>
  )
}
