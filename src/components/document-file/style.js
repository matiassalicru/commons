import styled, { css } from "styled-components";

export const SCItemList = styled.div`
  max-width: ${(props) => (props.variant === "full" ? "370px" : "140px")};
  border: 1px solid #a4adb5;
  background: #ffffff;
  border-radius: 6px;
  padding: 8px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.variant === "full" ? "30px 1fr auto" : "30px 1fr"};
  column-gap: 10px;
  @media (max-width: 576px) {
    ${({ variant }) =>
      variant !== "full" &&
      css`
        max-width: 70px;
        grid-template-columns: 1fr;
        text-align: center;
        justify-items: center;
      `}
  }
`;

export const SCFileName = styled.div`
  word-break: break-all;
  @media (max-width: 576px) {
    ${({ variant }) =>
      variant !== "full" &&
      css`
        width: 100%;
        overflow: hidden;
      `}
  }
`;

export const SCName = styled.span`
  display: block;
  color: #000000;
  font-size: 14px;
  @media (max-width: 576px) {
    ${({ variant }) =>
      variant !== "full" &&
      css`
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
  }
`;

export const SCWeight = styled.span`
  color: #a4adb5;
  font-size: 12px;
  text-transform: uppercase;
  @media (max-width: 576px) {
    ${({ variant }) =>
      variant !== "full" &&
      css`
        display: none;
      `}
  }
`;

export const SCButtons = styled.div`
  display: flex;
  gap: 7px;
`;
