interface UserType {
  id: number
  roleId?: number
  lastName: string
  picture?: string
  firstName: string
  remainingHours?: number
}

interface UserObjectType {
  page: number
  lastPage: number
  data: Array<UserType>
}

interface Users {
  users: UserObjectType
}

export interface UsersType {
  translations?
  dataUsers: Users
  userType: string
  myData: UserType
  modalElementId: string
  onChange: (data) => void
  fetchUsers: (variables?) => Promise<unknown>
}
