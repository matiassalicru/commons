import { createContext } from 'react'
import { FilterConfigTypes } from './Filters.interface'

export interface ContextTypes {
  trackEvent?: (params) => void
  lang: string
  config: FilterConfigTypes
}

export const FilterContext = createContext<ContextTypes | null>(null)
