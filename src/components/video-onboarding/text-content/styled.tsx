import styled, { css } from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'
import { TextContentStyleProps } from './TextContent.interface'

export const SCTextWrapper = styled.div<Pick<TextContentStyleProps, 'isCollapsed'>>`
  display: grid;
  grid-gap: 8px;
  align-self: center;

  ${({ isCollapsed }) =>
    isCollapsed
      ? css`
          padding: 0 20px;
          margin-right: auto;
        `
      : css`
          padding: 20px;
          margin-right: 0;
        `}
`

export const SCTitle = styled.h4`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: ${Colors.black.main};
`

export const SCText = styled.p<TextContentStyleProps>`
  color: ${({ hasAction }) => (hasAction ? Colors.info.main : Colors.grey[500])};
  cursor: ${({ hasAction }) => (hasAction ? 'pointer' : 'default')};
  font-size: 14px;
  margin: 0;
  ${({ textOverflow }) =>
    (textOverflow &&
      css`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `) ||
    (!textOverflow &&
      css`
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      `)}
  ${({ hasTutorialLink }) =>
    hasTutorialLink &&
    css`
      margin-bottom: 15px;
    `}
`

export const SCLink = styled.a`
  color: ${Colors.info.main};
  text-decoration: none;
`
