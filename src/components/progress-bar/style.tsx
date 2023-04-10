import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { SCPBStylesProps } from './ProgressBar.interface'

export const SCPBWrapperIcon = styled.div`
  display: flex;
  opacity: 0;
  padding-left: 0;
  transition: opacity padding-left ease-in-out 0.2s;
`

export const SCPBContent = styled.div<Pick<SCPBStylesProps, 'margin'>>`
  display: flex;
  border-radius: 4px;
  padding: 6px 8px;
  flex-direction: column;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  :hover {
    background-color: rgba(0, 136, 204, 0.1);
    ${SCPBWrapperIcon} {
      opacity: 1;
      padding-left: 6px;
    }
  }
  transition: background-color ease-in-out 0.2s;
`

export const SCPBWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
  justify-content: space-between;
  width: 168px;
`

export const SCPBProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SCPBPercentageHour = styled.p`
  color: ${Colors.grey[500]};
  font-size: 12px;
  font-weight: 700;
  margin: 0;
`
