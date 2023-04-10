import { ProjectDataTypes, ProjectTypes } from '../../AddTask.interface'

export interface ProjectSearchProps {
  borderColor?: string
  getProjects: (page: number, search: string) => ProjectTypes
  handleSelectProject: (number) => void
  projectDropdownWidth: number
  project: ProjectDataTypes
  hasError?: boolean
  errorMessage?: string
}

export interface InputStylesProps {
  borderColor?: string
  hasError: boolean
}
