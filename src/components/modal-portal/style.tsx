import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { SCModalPortalProps } from './ModalPortal.interface'

export const SCBackDrop = styled(motion.div)<SCModalPortalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1111;
  ${({ display }) => `display: ${display}`};
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(2px);
  background-color: rgba(0, 0, 0, 0.5);
`

export const SCContent = styled.div<SCModalPortalProps>`
  background: #ffffff;
  ${({ withMaxWidth, maxWidth }) =>
    withMaxWidth &&
    css`
      max-width: ${maxWidth || '344px'};
    `}
  border-radius: 5px;
`

const danger = css`
  color: #e34259;
`

const normal = css`
  color: #000000;
`

const variants = {
  danger,
  normal,
}

export const SCHeader = styled.div`
  padding: 20px 19px;
  border-bottom: 1px solid #ededed;
  position: relative;
`

export const SCTitle = styled.h4<SCModalPortalProps>`
  ${({ variant }) => variants[variant as string]};
  font-weight: 500;
  font-size: 15px;
  cursor: default;
`

export const SCBody = styled.div`
  padding: 15px 19px;
`

export const SCText = styled.p`
  cursor: default;
`

export const SCFooter = styled.div`
  padding: 0px 19px 20px 19px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`

export const SCContentClose = styled.div`
  position: absolute;
  top: 50%;
  right: 19px;
  transform: translate3d(0, -50%, 0);
  height: 16px;
  cursor: pointer;
  color: #888888;
`
