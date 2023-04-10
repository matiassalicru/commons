import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import Borders from '@projectcor/theme/lib/base/borders'
import Typography from '@projectcor/theme/lib/base/typography'

export const SCCSWrapper = styled.div``

export const SCCSTitle = styled.p`
  color: ${Colors.grey[500]};
  font-size: 12px;
  font-weight: ${Typography.fontWeightMedium};
  text-transform: uppercase;
  margin: 0;
`

export const SCCSWrapperCalendarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${Borders.borderWidth[1]} solid ${Colors.grey[100]};
  border-radius: ${Borders.borderRadius.sm};
  padding: 12px;
  margin-top: 8px;
  cursor: pointer;
`

export const SCCSCalendarName = styled.p`
  max-width: 200px;
  margin: 0;
  font-size: 14px;
  color: ${Colors.grey[500]};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const SCCSWrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  :hover {
    background-color: ${Colors.grey[100]};
  }
`
