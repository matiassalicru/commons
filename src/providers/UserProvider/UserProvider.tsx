import { createContext, ReactElement } from 'react'
import { UserProviderInterfaceProps, UserContextProps } from './UserProviderInterface'

const CLIENT_TYPE = '2'

const DEFAULT_USER: UserContextProps = {
  permissions: {},
  id: null,
  userType: '',
  firstName: '',
  lastName: '',
  dailyHours: 0,
  monthlyHours: 0,
  isClient: false,
  remainingHours: 0,
  role: '',
  company: '',
}

export const UserContext = createContext<UserContextProps>(DEFAULT_USER)

/**
 * Context que guarda los datos del usuario
 *
 * @param {Object} user Datos del usuario
 */
export const UserProvider = ({ children, user }: UserProviderInterfaceProps): ReactElement => {
  const { info, permissions, settings } = user
  return (
    <UserContext.Provider
      value={{
        permissions,
        settings,
        lastName: info.last_name,
        userType: info.user_type,
        firstName: info.first_name,
        dailyHours: info.daily_hours,
        monthlyHours: info.monthly_hours,
        isClient: info.type === CLIENT_TYPE,
        remainingHours: info.remaining_hours,
        id: info.id,
        ...info,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
