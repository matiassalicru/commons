import { useContext, ReactElement } from 'react'
import { UserContext } from './UserProvider'

export const UserProviderMock = (): ReactElement => {
  const user = useContext(UserContext)

  return (
    <>
      {user?.id && user?.permissions && (
        <button
          id="handle"
          data-testid="handle"
          onClick={() => {
            // test
          }}
          type="button"
        >
          User provider button working
        </button>
      )}
    </>
  )
}
