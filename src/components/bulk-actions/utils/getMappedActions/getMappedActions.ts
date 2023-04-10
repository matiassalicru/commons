import Colors from '@projectcor/theme/lib/base/colors'
import { BULK_ACTIONS_TYPE } from '../../../../constants/bulkActions/types'

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

interface MappedAction {
  id: string
  type: string
  value: Array<unknown>
}

const statusColors = {
  nueva: newStatusColor,
  en_proceso: inProcessColor,
  en_diseno: inDesignColor,
  en_revision: inReviewColor,
  estancada: stuckColor,
  finalizada: finishedColor,
}

const priorityIcons = {
  low: {
    icon: 'arrow-down',
    color: '#00C972',
  },
  normal: {
    icon: 'arrow-right',
    color: '#ffac2c',
  },
  high: {
    icon: 'arrow-up',
    color: '#e44259',
  },
  urgent: {
    icon: 'exclamation-triangle',
    color: '#e44259',
  },
}

export const getMappedActions = (action: string, data: Array<unknown>): MappedAction => {
  switch (action) {
    case BULK_ACTIONS_TYPE.STATUS:
      return {
        id: BULK_ACTIONS_TYPE.STATUS,
        type: 'text',
        values: data.map(value => ({
          id: value,
          color: statusColors[value],
        })),
      }
    case BULK_ACTIONS_TYPE.PRIORITY:
      return {
        id: BULK_ACTIONS_TYPE.PRIORITY,
        type: 'text',
        values: data.map(value => ({
          id: value.name,
          value: value.id,
          iconSpecs: priorityIcons[value.name],
        })),
      }
    default:
      return {}
  }
}
