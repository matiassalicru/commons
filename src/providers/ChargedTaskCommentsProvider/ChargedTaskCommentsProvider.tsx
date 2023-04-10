import { createContext, ReactElement, useState } from 'react'
import {
  ChargedTasksCommentsCommentsData,
  ChargedTasksCommentsContextProp,
  ChargedTasksCommentsProviderProps,
} from './ChargedTaskCommentsProviderInterface'

const DEFAULT_PROPS: ChargedTasksCommentsContextProp = {
  comments: [],
  updateInfo: () => null,
}

export const ChargedTaskCommentsContext = createContext<ChargedTasksCommentsContextProp>(DEFAULT_PROPS)

export const ChargedTaskCommentsProvider = ({ children }: ChargedTasksCommentsProviderProps): ReactElement => {
  const [apolloComment, setApolloComments] = useState<ChargedTasksCommentsCommentsData[]>([])

  return (
    <ChargedTaskCommentsContext.Provider value={{ comments: apolloComment, updateInfo: setApolloComments }}>
      {children}
    </ChargedTaskCommentsContext.Provider>
  )
}
