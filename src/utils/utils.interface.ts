/* eslint-disable camelcase */

import { Moment } from 'moment'

// concatenatedStatus
export interface linksProps {
  source: { status: string; deadline: string }[]
  target: { status: string }[]
}

export interface warnConcatenatedReturn {
  hasDependencies: boolean
  type: string
  status: string
}

// datesManagements
export interface linkOption {
  change_type?: string
  option: string
  data?: {
    date_diff: number
    deadline_diff: number
  }
  filterByDate?: string
  filterByDeadline?: string | null
  filterByProject?: number
}

export interface datesManagementsWarnConcatenatedReturn {
  showModal: boolean
  linkOption?: linkOption
  deleteOption?: {
    datetime: string
    deadline: string | null
    linkOption: linkOption
  }
  changeDate?: {
    datetime: string
    deadline: string
    linkOption: linkOption
  }
}

export interface verifyDatetimeAndUpdateProps {
  start: string
  deadline: string
  projectId: number
  estimated
  permissionDelete?
  dateChanged: Moment
  concatenatedData: linksProps
  callbackUpdate: (
    newStart?: string,
    newDeadline?: string | null,
    concatenate?: datesManagementsWarnConcatenatedReturn
  ) => void
}

export interface langObject {
  lang: string
}
