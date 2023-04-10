import styled from 'styled-components';

export const SCCurrentStatus = styled.div`
  position: relative;
  width: ${({ width }) => `${width}px`};
  height: calc(100% + 1px);
  transition: background-color 0.3s;
  background-color: ${({ colorStatus }) => colorStatus};
  cursor: ${({ ableToEdit }) => (ableToEdit ? 'pointer' : 'not-allowed')};
  transition: width 0.23s ease-in-out;
`;
