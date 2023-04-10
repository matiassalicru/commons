import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SCList = styled(motion.ul)`
  position: ${({ isDynamicViewport }) => (isDynamicViewport ? 'absolute' : 'fixed')};
  padding: 0;
  margin: 0;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  background-color: #ffffff;
  width: fit-content;
  border-radius: 5px;
  border: 1px solid #eeeeee;
  box-shadow: 0px 3px 6px rgba(129, 129, 129, 0.16);
  overflow: hidden;
  z-index: 1;
`;

export const SCItemList = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 7px 18px 7px 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const SCPriorityName = styled.span`
  font-size: 14px;
  color: #919191;
`;
