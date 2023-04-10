import Colors from '@projectcor/theme/lib/base/colors'

const {
  tasksStatus: {
    new_status: newStatus,
    in_process: inProcess,
    stuck,
    finished,
    in_design: inDesign,
    in_review: inReview,
  },
} = Colors

export interface EventLogFuc {
  keyConfirm: () => void
  keyCancel: () => void

  hourEdit: () => void
  hourConfirm: () => void
  hourCancel: () => void
  hourDelete: () => void

  suggestedConfirm: () => void
  suggestedEdit: () => void
  suggestedCancel: () => void
  suggestedDelete: () => void

  onHoverInfo: () => void
  onHoverStay: () => void
}

export interface BindedData {
  date: string
  userId: number | string
}

export interface TimeProps {
  hour: number | string
  minutes: number | string
}

interface Wordings {
  buttonEdit: string
  buttonAccept: string
  buttonDecline: string
  buttonDelete: string
  trackedHourInactiveClient: string
  buttonDeleteInactiveClient: string
}

export interface AppcuesClassName {
  trackedHours: string
  suggestedHours: string
  commentButton: string
}

export enum StatusType {
  nueva = newStatus,
  // disable camelcase because this is how was saved in the DB
  // eslint-disable-next-line camelcase
  en_proceso = inProcess,
  estancada = stuck,
  finalizada = finished,
  // eslint-disable-next-line camelcase
  en_diseno = inDesign,
  // eslint-disable-next-line camelcase
  en_revision = inReview,
}
export interface taskInputHourProps {
  /**
   * Charged hour to display
   */
  hourLoad: number | string
  /**
   * Charged minutes to display
   */
  minuteLoad: number | string
  /**
   * Function to remove charged hour
   */
  handleDeleteHour: (arg?) => void
  /**
   * Function to accept charged hour in edit mode.
   */
  handleClickCheckHour: ({ hour, minutes }: TimeProps) => void
  /**
   * Suggested hour to display
   */
  sgHourLoad: number | string
  /**
   * Suggested minutes to display
   */
  sgMinuteLoad: number | string
  /**
   * Function to remove suggested hour
   */
  sgHandleDeleteHour: (arg?) => void
  /**
   * Function to accept charged hour in edit mode.
   */
  sgHandleClickCheckHour: ({ hour, minutes }: TimeProps) => void

  /**
   * size of the icon container
   */
  size?: number
  /**
   * size of the actual icon
   */
  iconSize?: number
  /**
   * distance between chargeHour and suggestedHour in px
   */
  gap?: number
  /**
   * font size of the components
   */
  fontSize?: number
  /**
   * space between icons
   */
  space?: number
  /**
   * eventLogsFunctions
   */
  eventLog?: EventLogFuc
  /**
   * Extra Data needed for differentiate for others components
   */
  bindedData?: BindedData
  /**
   * Change binding Edit open
   */
  onStartEdition: () => void
  /**
   * Change binding Edit close
   */
  onCloseEdition: () => void
  /**
   * info of the suggestion
   */
  contextInfo?: string
  /**
   * extra id for tooltip
   */
  tooltipId?: string | number
  /**
   * name of the client brand name
   */
  brandName?: string
  /**
   * name of the client
   */
  clientName?: string
  /**
   * name of the client project
   */
  projectName?: string
  /**
   * name of the task
   */
  taskName: string
  /**
   * width of the task name section. Cant be lower than 200px
   */
  taskWidth?: string
  /**
   * status of the task
   */
  status: StatusType
  /**
   * onClick for redirect task
   */
  onClickTask?: (id: number | string, EventTarget) => void
  /**
   * onClick Row to redirect to task
   */
  onClickTaskRow: (id: number | string, EventTarget) => void
  /**
   * TaskId
   */
  taskId?: number | string
  /**
   * enable to set custom cursor
   */
  customPointer: string
  /**
   * Muestra o no el input de horas de la tarea
   */
  showHoursInput: boolean
  /**
   * text for empty client
   */
  withoutClientText?: string
  /**
   * text for empty project
   */
  withoutProjectText?: string
  /**
   * permission to edit hours
   */
  enableEditHour?: boolean
  /**
   * permission to delete hours
   */
  enableDeleteHour?: boolean
  /**
   * permission to edit suggestion
   */
  enableEditSuggestion?: boolean
  /**
   * permission to delete suggestion
   */
  enableDeleteSuggestion?: boolean
  /**
   * enabled comments
   */
  enabledComments?: boolean
  iconCommentsEnabled?: boolean
  iconComments?: string
  onClickComment?: () => void
  tooltipButtonComments?: string
  iconCommentsBgColor?: string
  commentsId?: string
  showCommentsIcon?: boolean
  taskTitleWidth?: string
  enabledNewInput?: boolean
  hasComments?: boolean
  wordings: Wordings
  isProgressBar?: boolean
  isInactiveClient?: boolean
  appcuesClassName: AppcuesClassName
}

export interface TaskInputHourStyleProps {
  taskWidth?: string
  statusColor?: string
  customCursor?: string
  isProgressBar?: boolean
  spacing: string
  taskTitleWidth?: string
  enabledNewInput?: string | boolean
}
