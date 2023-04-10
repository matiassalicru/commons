export interface TransactionsSkeletonProps {
  /**
   *  Rows quantity to show at skeleton.
   */
  quantity?: number
  /**
   * Transaction type (outcome, income).
   */
  type?: string
  /**
   * Skeleton is for subitems or items.
   */
  isSubitem?: boolean
}

export interface SCTransactionsSkeletonProps {
  type: string
  isSubitem: boolean
}
