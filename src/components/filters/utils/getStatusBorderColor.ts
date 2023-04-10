import Colors from '@projectcor/theme/lib/base/colors'

const {
  tasksStatus: {
    new_status: newStatusColor,
    in_process: inProcessColor,
    stuck: stuckColor,
    finished: finishedColor,
    in_design: inDesignColor,
    in_review: inReviewColor,
  },
} = Colors

export const getStatusBorderColor = (status: string): string => {
  // TODO: Define and Add status default color
  const statusList = {
    nueva: newStatusColor,
    estancada: stuckColor,
    en_diseno: inDesignColor,
    en_proceso: inProcessColor,
    en_revision: inReviewColor,
    finalizada: finishedColor,
    default: '',
  }
  return statusList[status] || statusList.default
}
