import styled, { css } from 'styled-components'

export const SCWrapper = styled.div`
    position: relative;
    ${({ withLabel }) =>
        withLabel &&
        css`
            display: flex;
            align-items: center;
            gap: 8px;
        `}
`

export const SCPriorityName = styled.span`
    text-transform: capitalize;
    font-size: 14px;
    color: #919191;
    cursor: pointer;
`
