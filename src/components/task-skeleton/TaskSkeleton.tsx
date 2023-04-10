// Styles
import { ReactElement } from 'react'
import { TaskSkeletonProps } from './TaskSkeleton.interface'
import {
  SCList,
  SCItem,
  SCItemFirst,
  SCStatus,
  SCCircle,
  SCSmallCircle,
  SCSmallBar,
  SCMediumBar,
  SCBigBar,
  SCWrappperTitle,
  SCWrappperActions,
} from './style'
import { generateHashKey } from '../../utils/generateHashKey'

export function TaskSkeleton({
  quantity = 1,
  withFirstItem = false,
  withActions = true,
}: TaskSkeletonProps): ReactElement | null {
  return (
    <>
      {Array.from(Array(quantity).keys()).map((el, i) => (
        <SCList key={generateHashKey(`TaskSkeletonCollapsibleTasks`, +i)} withFirstItem={withFirstItem}>
          {withFirstItem && <SCItemFirst />}
          <SCItem>
            <SCStatus />
          </SCItem>
          <SCItem>
            <SCWrappperTitle>
              <SCBigBar />
              <SCMediumBar />
            </SCWrappperTitle>
          </SCItem>
          <SCItem className="center-flex">
            <SCCircle />
          </SCItem>
          <SCItem className="center-flex">
            <SCSmallBar />
          </SCItem>
          <SCItem className="center-flex">
            <SCCircle />
          </SCItem>
          {withActions && (
            <SCItem className="center-flex">
              <SCWrappperActions>
                <SCSmallCircle />
                <SCSmallCircle />
                <SCSmallCircle />
              </SCWrappperActions>
            </SCItem>
          )}
        </SCList>
      ))}
    </>
  )
}
