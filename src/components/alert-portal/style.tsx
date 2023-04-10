import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import { StyleAlertPortalPropsPosition, StyleAlertPortalPropsVariant } from './AltertPortal.interface'

const centerBottom = css`
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  bottom: 30px;
`

const rightBottom = css`
  bottom: 30px;
  right: 30px;
`

const rightTop = css`
  top: 30px;
  right: 30px;
`

const positions = {
  'center-bottom': centerBottom,
  'right-bottom': rightBottom,
  'right-top': rightTop,
}

const danger = css`
  background: #e34259;
  i {
    color: white;
  }
`
const success = css`
  background: #264048;
  i {
    color: #00c972;
  }
`
const successQb = css`
  background: #00a500;
  span {
    color: #ffffff;
  }
`
const loading = css`
  background: #fbde3f;
  span {
    color: #5a5a5a;
  }
`
const error = css`
  background: #c70505;
  span {
    color: #ffffff;
  }
`
const variants = {
  danger,
  success,
  successQb,
  loading,
  error,
}

export const SCWrapper = styled.div<StyleAlertPortalPropsPosition>`
  position: fixed;
  z-index: 9999999999;
  ${({ position }) => positions[position]};
`

export const SCAlertRedirect = styled.div`
  color: #ffffff;
  transition: color 0.3s, text-decoration 0.3s;
  text-decoration: underline;
  white-space: nowrap;
  font-style: italic;

  &:hover {
    color: #000000;
    cursor: pointer;
  }
`

export const SCAlert = styled(motion.div)<StyleAlertPortalPropsVariant>`
  padding: 20px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 3px 6px #00000029;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  gap: 5px;
  ${({ variant }) => variants[variant]};

  span {
    white-space: nowrap;
  }
`
