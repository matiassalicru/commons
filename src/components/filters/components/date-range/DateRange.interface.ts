interface DatesTypes {
  toDate?: string | null
  fromDate?: string | null
}

interface OnSelectDataTypes {
  value: DatesTypes
  type: string
}

export interface DateRangeTypes {
  onSelect: (data: OnSelectDataTypes[]) => void
  dataSelected?: OnSelectDataTypes
  filterId: string
}
