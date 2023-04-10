interface ProjectDataBreadcrumbTypes {
  name: string
  clientStatusId?: number
}

export interface ProjectDataTypes {
  id?: string
  name: string
  brand: ProjectDataBreadcrumbTypes
  product: ProjectDataBreadcrumbTypes
  client: ProjectDataBreadcrumbTypes
}

export interface ProjectTypes {
  page: string
  lastPage: string
  data: [ProjectDataTypes]
}

interface TrackEventParams {
  event: string
  actionType: string
}

export interface AddTaskProps {
  clientStatusId: number
  id?: string | number
  maxLength?: number
  onSubmit: (taskName: string, project?: string) => void
  trackEvent: (params: TrackEventParams) => void
  handleMaxLengthInputError: () => void
  borderColor?: string
  getProjects?: (page: number, search: string) => ProjectTypes
  projectDropdownWidth?: number
  createWithoutProject?: boolean
}

export interface WrapperStyleProps {
  disabled?: boolean
  borderColor?: string
  hasError: boolean
}
