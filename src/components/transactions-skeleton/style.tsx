import styled, { keyframes } from 'styled-components'
import { SCTransactionsSkeletonProps } from './TransactionsSkeleton.interface'

const TEMPLATE_ITEMS = { outcome: '2fr repeat(5, 1fr) 30px', income: '2fr repeat(5, 1fr) 30px' }
const TEMPLATE_SUBITEMS = { outcome: '2fr repeat(2, 1fr) repeat(2, .5fr)', income: '3fr repeat(3, 1fr)' }

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
  }

  100% {
    background-position: 100% 0;
  }
`
const MAIN_BG_COLOR = '#d9d9d9'

export const SCList = styled.ul<SCTransactionsSkeletonProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  grid-template-columns: ${({ type, isSubitem }) => (isSubitem ? TEMPLATE_SUBITEMS[type] : TEMPLATE_ITEMS[type])};
  gap: 8px;
  background: #ffffff;
  height: 54px;
  padding: 0;
  margin: 0;
  position: relative;
  list-style: none;
  padding: 0 15px;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation-name: ${aniHorizontal};
    animation-duration: 2.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #cccccc 2%, #666666 18%, #cccccc 33%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }
`
export const SCItem = styled.li`
  height: inherit;
  list-style: none;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  align-items: center;
`

export const SCSmallCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${MAIN_BG_COLOR};
`

export const SCSmallIcon = styled.div`
  width: 14px;
  height: 14px;
  background: ${MAIN_BG_COLOR};
`

const Bar = styled.div`
  border-radius: 15px;
  background: ${MAIN_BG_COLOR};
`

export const SCSmallBar = styled(Bar)`
  width: 40%;
  height: 14px;
`
export const SCMediumBar = styled(Bar)`
  width: 70%;
  height: 14px;
`
export const SCBigBar = styled(Bar)`
  width: 90%;
  height: 14px;
  margin-bottom: 7px;
`
