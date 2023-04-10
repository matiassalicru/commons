import styled from 'styled-components'
import { TrackHoursButtonStyleProp } from './TrackHoursButton.interface'

export const SCHLWrapper = styled.button<TrackHoursButtonStyleProp>`
  align-items: center;
  background-color: #d9f4ff;
  border-radius: 30px;
  border: none;
  color: #0094ca;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  height: 30px;
  justify-content: center;
  margin-left: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0094ca;
    color: #d9f4ff;
    path {
      fill: #d9f4ff;
    }
  }
`

export const SCSpan = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
`

export const SCIcon = styled.i`
  display: flex;

  svg {
    display: inline-block;
    height: 1em;
    margin-right: 5px;
    width: 1em;
  }

  path {
    fill: #0094ca;
    transition: fill 0.3s;
  }

  &:hover {
    path {
      fill: #d9f4ff;
    }
  }
`
