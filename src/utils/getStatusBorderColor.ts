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

const NEW = 'nueva'
const IN_PROCESS = 'en_proceso'
const STUCK = 'estancada'
const FINISHED = 'finalizada'
const IN_DESIGN = 'en_diseno'
const IN_REVISION = 'en_revision'

/**
 * Get the color from a given status name
 *
 * @param status (string)
 * @returns string
 */
export const getStatusBorderColor = (status: string): string => {
  // TODO: Define and Add status default color
  const statusList = {
    [NEW]: newStatusColor,
    [STUCK]: stuckColor,
    [IN_DESIGN]: inDesignColor,
    [IN_PROCESS]: inProcessColor,
    [IN_REVISION]: inReviewColor,
    [FINISHED]: finishedColor,
  }
  return statusList[status] || status
}
