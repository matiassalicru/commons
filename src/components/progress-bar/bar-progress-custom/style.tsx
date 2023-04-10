import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import pallete from '@projectcor/theme/lib/base/colors'
import { BPCStyleProp } from './BarProccessCustom.interface'

const arrayColor = { error: pallete.colors.error.main, warning: pallete.colors.warning.main, success: '#00A500' }

export const SCBPCWrapper = styled.div<Pick<BPCStyleProp, 'height' | 'borderRadius' | 'baseColor' | 'isEmpty'>>`
  width: 168px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
  display: flex;
  background-color: ${({ baseColor }) => baseColor};
  border: none;
  transition: background-color easy-in-out 0.5s;
`

export const SCBPCInsideWrapper = styled(motion.div)<Pick<BPCStyleProp, 'height' | 'progress'>>`
  width: ${({ progress }) => progress}%;
  height: 100%;
`

export const SCBPChargedBar = styled.div<BPCStyleProp>`
  box-sizing: border-box;
  height: 100%;
  border: ${({ typeColor, progress }) => progress !== 0 && `solid 0.5px ${arrayColor[typeColor as string]}`};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  ${({ notFullProgress }) =>
    notFullProgress &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 0px;
    `};
  ${({ withSecondBar, notFullProgress }) =>
    withSecondBar &&
    notFullProgress &&
    css`
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      margin-right: 0px;
    `}
  background: ${({ typeColor }) => arrayColor[typeColor as string]};
`

export const SCBPCSuggestedBar = styled.div<BPCStyleProp>`
  height: 100%;
  box-sizing: border-box;
  border: solid 0.5px #0094ca;
  border-style: dashed;
  background: #d9f4ff;
  margin-right: -1px;
  ${({ withFirstBar, borderRadius }) =>
    withFirstBar
      ? 'border-left: 0'
      : css`
          border-top-left-radius: ${borderRadius}px;
          border-bottom-left-radius: ${borderRadius}px;
          margin-left: -1px;
        `};
  ${({ notFullProgress, borderRadius }) =>
    !notFullProgress
      ? css`
          border-top-right-radius: ${borderRadius}px;
          border-bottom-right-radius: ${borderRadius}px;
        `
      : css`
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        `};
  ${({ isRoundedSuggestionBar, borderRadius }) =>
    !isRoundedSuggestionBar &&
    css`
      border-top-right-radius: ${borderRadius}px;
      border-bottom-right-radius: ${borderRadius}px;
    `}
`
