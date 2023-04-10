import styled from 'styled-components'
import Pallete from '@projectcor/theme/lib/base/colors'
import { ContentProps } from './CardIntegrations.interface'

export const SCContent = styled.div<ContentProps>`
  height: 242px;
  padding: 12px;
  border-radius: 6px;
  border: solid 1px #f3f3f3;
  display: grid;
  grid-template-rows: ${({ category }) => (category ? '29px min-content auto auto' : 'min-content auto auto')};
  row-gap: 5px;
  position: relative;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
`
export const SCHeader = styled.div`
  display: flex;
  gap: 10px;
  color: #000000;
  font-size: 16px;
  align-items: center;
`

export const SCDescription = styled.div`
  color: #5a5a5a;
  font-size: 14px;
`

export const SCWrapperButton = styled.div`
  width: fit-content;
  align-self: flex-end;
`

export const SCTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  color: ${Pallete.black.main};
`

export const SCContentButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${Pallete.grey[500]};
  font-size: 15px;
  cursor: pointer;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SCActive = styled.div`
  width: 9px;
  height: 9px;
  background: #00a500;
  border-radius: 100%;
`

export const SCCategory = styled.div`
  color: ${Pallete.colors.primary.main};
  background: ${Pallete.buttons.hoverLight};
  padding: 4px 13px;
  border-radius: 40px;
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const SCProvider = styled.div`
  position: absolute;
  bottom: 6px;
  right: 0;
`
