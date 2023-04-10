import styled from 'styled-components'
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

const statusColors = {
  nueva: newStatusColor,
  en_proceso: inProcessColor,
  en_diseno: inDesignColor,
  en_revision: inReviewColor,
  estancada: stuckColor,
  finalizada: finishedColor,
}

export const SCButton = styled.div`
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => statusColors[color] || color};
  color: white;
  cursor: pointer;
  font-size: 9px;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    transform-origin: center;
    transition: transform 0.3s;
    transform: ${({ isClosed }) => (!isClosed ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`
