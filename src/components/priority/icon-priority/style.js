import styled, { css } from 'styled-components'

export const SCWrapperIcon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${({ setBg }) => setBg};
    color: ${({ setColor }) => setColor};
    font-size: 13px;
    cursor: ${({ ableToEdit }) => (ableToEdit ? 'pointer' : 'not-allowed')};
    transition: background-color 0.3s;
    ${({ isSelected }) =>
        isSelected &&
        css`
            &:hover {
                background-color: ${({ setBgHover }) => setBgHover};
            }
        `}
`
