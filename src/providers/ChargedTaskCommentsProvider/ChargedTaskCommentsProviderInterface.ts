import { Dispatch, ReactElement, SetStateAction } from 'react'

interface Props {
  taskId: number
  comments: string
}

export interface ChargedTasksCommentsProviderProps {
  children: ReactElement
}
export interface ChargedTasksCommentsCommentsData {
  date: Props
}

export interface ChargedTasksCommentsContextProp {
  comments: ChargedTasksCommentsCommentsData[]
  updateInfo: Dispatch<SetStateAction<ChargedTasksCommentsCommentsData[]>>
}
