import styled from 'styled-components'
import Colors from '@projectcor/theme/lib/base/colors'

export const SCSearch = styled.input`
  background: none;
  border: none;
  margin: 5px 5px;
  outline: none;
  width: 100%;
  color: ${Colors.colors.gray.medium};
  font-weight: 400;
  font-family: 'Work sans';

  &::placeholder {
    color: ${Colors.colors.gray.medium};
    font-size: 14px;
    font-weight: 400;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #eaebea;
  padding: 0 10px 0 9px;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
`
