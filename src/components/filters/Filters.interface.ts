export interface LeaveType {
  id: number
  typeCode: string
  name: string
}

export interface UserLeaveType {
  id: number
  userId: number
  leaveTypeId: number
  start: string
  end: string
  leaveType: LeaveType
}

/**
 * Datos del usuario para el Avatar
 */
export interface AvatarDataTypes {
  id: number
  email: string
  roleId: number
  picture?: string
  lastName: string
  firstName: string
  remainingHours?: number
  leaves?: Array<UserLeaveType>
}

export interface DateType {
  toDate: string
  fromDate: string
}

export interface TextTypes {
  title?: string
  value?: string
}

export interface IPosition {
  name: string
  id: string
  categoryName: string
}

export enum ListTypes {
  text = 'text',
  date = 'date',
  avatars = 'avatars',
  positions = 'positions',
}

interface QueryModelDataTypes {
  [key: string]: TextTypes[] | AvatarDataTypes[] | DateType[]
}

interface GetDataTypes {
  data: QueryModelDataTypes
}
export interface FilterOptionTypes {
  id: string
  format: (id: string, data) => TextTypes[] | AvatarDataTypes[] | DateType[] | IPosition[]
  get: (page: number, name?: string) => GetDataTypes
  data?: TextTypes[] | AvatarDataTypes[] | DateType[] | null | IPosition[]
  title?: string
}

interface ConfigObjectType {
  icon: string
  type: string
  hasSearch: boolean
  isMultiple: boolean
  hasFilter?: boolean
}

export interface FilterConfigTypes {
  [key: string]: ConfigObjectType
}

export interface FiltersTypes {
  filters: FilterOptionTypes
  deleteFilter: (id: string) => void
  appliedFilters?: FilterOptionTypes
  trackEvent: (params) => void
  handleCleanFilters: () => void
  loading?: boolean
  lang?: string
  usersLoading?: boolean
  notTypeable?: boolean
  config: FilterConfigTypes
  eventToDispatch?: string
  addButtonId?: string
  isSimpleFilter?: boolean
  portalElementId: string
}
