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

export const NEW = 'nueva'
export const IN_PROCESS = 'en_proceso'
export const STUCK = 'estancada'
export const FINISHED = 'finalizada'
export const IN_DESIGN = 'en_diseno'
export const IN_REVISION = 'en_revision'

export const STATUS_CONFIG = {
  [NEW]: {
    name: 'n',
    color: newStatusColor,
  },
  [IN_PROCESS]: {
    name: 'en_proceso_letter',
    color: inProcessColor,
  },
  [IN_REVISION]: {
    name: 'en_revision_letter',
    color: inReviewColor,
  },
  [IN_DESIGN]: {
    name: 'en_diseno_letter',
    color: inDesignColor,
  },
  [STUCK]: {
    name: 'estancada_letter',
    color: stuckColor,
  },
  [FINISHED]: {
    name: 'f',
    color: finishedColor,
  },
}
