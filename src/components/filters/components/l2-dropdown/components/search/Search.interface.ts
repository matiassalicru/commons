import React from 'react'
import { IPosition } from '../../../../Filters.interface'

export interface SearchTypes {
  onSearch?: (e: React.FormEvent<HTMLInputElement>) => void
  data?: IPosition[]
  setData?: (data: IPosition[]) => void
  isFilter?: boolean
}
