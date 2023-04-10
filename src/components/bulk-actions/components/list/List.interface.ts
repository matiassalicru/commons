export enum ListTypes {
  text = 'text',
  date = 'date',
  avatars = 'avatars',
}

export interface AvatarDataTypes {
  id: number
  email: string
  roleId: number
  picture?: string
  lastName: string
  firstName: string
  remainingHours?: number
}

export interface DateType {
  toDate: string
  fromDate: string
}

export interface TextTypes {
  id?: string
  name?: string
}

export interface ListProps {
  onSelect: (selectedValues) => void
  data?: TextTypes[] | AvatarDataTypes[] | DateType[]
  id: string
}
