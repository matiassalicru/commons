import styled, { css } from 'styled-components'
import pallete from '@projectcor/theme/lib/base/colors'
import { TrackedHoursButtonStyles } from './TrackedHourButton.interface'

const isActive = css`
  background-color: ${pallete.colors.gray.light};
  gap: 2px;
  padding: 4px 8px 3px 8px;
`

const notActiveWithHover = css`
  gap: 4px;
  padding: 4px 8px;
  &:hover {
    background-color: ${pallete.colors.gray.light};
  }
`

const stylesNotActive = (editPermission: boolean) => {
  if (!editPermission) {
    return css`
      gap: 4px;
      padding: 4px 8px;
    `
  }
  return notActiveWithHover
}

export const SCTHBWrapper = styled.div<TrackedHoursButtonStyles>`
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ editPermission }) => (editPermission ? 'pointer' : 'default')};
  min-width: 84px;
  ${({ active, editPermission }) => (active && editPermission ? isActive : stylesNotActive(editPermission))}
`
