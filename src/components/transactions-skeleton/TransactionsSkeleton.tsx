// Styles
import { ReactElement } from 'react'
import { TransactionsSkeletonProps } from './TransactionsSkeleton.interface'
import { SCList, SCItem, SCSmallCircle, SCMediumBar, SCBigBar, SCSmallIcon } from './style'
import { generateHashKey } from '../../utils/generateHashKey'

const TRANSACTIONS_TYPES = {
  outcome: 'outcome',
  income: 'income',
}

export function TransactionsSkeleton({
  quantity = 1,
  type = TRANSACTIONS_TYPES.outcome,
  isSubitem = false,
}: TransactionsSkeletonProps): ReactElement | null {
  return (
    <>
      {Array.from(Array(quantity).keys()).map((_, i) => (
        <SCList key={generateHashKey(`TransactionsSkeleton`, +i)} type={type} isSubitem={isSubitem}>
          <SCItem>
            <SCBigBar />
          </SCItem>
          <SCItem>
            <SCMediumBar />
          </SCItem>
          <SCItem>
            <SCMediumBar />
          </SCItem>
          {!isSubitem && (
            <SCItem>
              <SCSmallCircle />
            </SCItem>
          )}
          <SCItem>
            <SCMediumBar />
          </SCItem>
          {(type === TRANSACTIONS_TYPES.outcome || !isSubitem) && (
            <SCItem>
              <SCMediumBar />
            </SCItem>
          )}
          {!isSubitem && (
            <SCItem>
              <SCSmallIcon />
            </SCItem>
          )}
        </SCList>
      ))}
    </>
  )
}
