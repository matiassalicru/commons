import styled from 'styled-components'

const MAX_PERCENT = 100
const ALERT_COLOR = '#e44259'
const PRIMARY_COLOR = '#707070'

export const SCProgressContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 45px;
`

export const SCProgressLabel = styled.span`
  color: ${({ progress }) => (progress > MAX_PERCENT && ALERT_COLOR) || PRIMARY_COLOR};
  font-size: 14px;
`
