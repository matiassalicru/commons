import styled from 'styled-components'

export const SCHeaverAvatarMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #f5f5f5;
    border: 2px solid #d0d0d0;
    border-radius: 50%;
    position: relative;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 26px;
        height: 26px;
        border: 2px solid #ffffff;
        border-radius: 50%;
    }
`

export const SCHeaverAvatarMoreTooltip = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 5px;
    padding: 5px 10px;
    transform: translateY(calc(-100% + 20px));

    &::before {
        content: '';
        position: absolute;
        background: rgba(255, 255, 255, 0);
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% + 10px);
    }
`
