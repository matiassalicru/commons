import styled from 'styled-components'
import pallete from '@projectcor/theme/lib/base/colors'

export const SCMSOContainer = styled.div`
  position: absolute;
  right: -16px;
  bottom: 12px;
  background: ${pallete.colors.white};
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0px;
    height: 0px;
    right: 44px;
    border-top: 9px solid ${pallete.colors.white};
    border-left: 9px solid ${pallete.colors.transparent};
    border-right: 9px solid ${pallete.colors.transparent};
  }
  &::before {
    z-index: 0;
    transform: translateY(31px);
    border-bottom-color: ${pallete.colors.white};
  }
  &::after {
    z-index: -1;
    top: -8px;
    transform: translateY(39px);
  }
`
export const SCMSOWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  width: 108px;
  height: 32px;
  box-shadow: 0px 4px 16px rgba(18, 18, 18, 0.24);
  padding: 2px 4px;
  gap: 8px;
`
