import styled from 'styled-components'

export const SCUserDeleteable = styled.div`
    position: relative;
`

export const SCUserDeleteableIcon = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #000000;
    color: #ffffff;
    z-index: 2;
    font-size: 9px;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    ${SCUserDeleteable}:hover & {
        opacity: 1;
        visibility: visible;
    }
`

export const SCEmptyState = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed;
    border-color: #b7b7b7;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border-radius: 50%;
    font-size: 18px;
    color: #919191;
    position: relative;
    transition: boder-color 0.3s;
    &:hover {
        border-color: #707070;
    }
`
