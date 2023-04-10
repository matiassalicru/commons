import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

import { calculateMaxYForModal, calculateMaxYForTooltip } from '../utils'

export const SCUserAssignerSelectResults = styled.ul`
    background: #ffffff;
    height: 197px;
    overflow: auto;
    border-radius: 0 0 5px 5px;
    @media (max-height: 728px) {
        height: 173px;
    }
`

export const SCUserAssignerSelectItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    padding: 10px;
    text-align: left;
    background-color: ${({ isSelected }) => isSelected ? `#f1f1f1` : `#ffffff` };
    transition: background-color 0.2;
    &:hover {
        background-color: #f1f1f1;
    }
`

export const SCAvatarWrapper = styled.div`
    width: 30px;
    height: 30px;
    color: #5a5a5a;
`

export const SCAvatarHeaderWrapper = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`
export const SCAvatarsHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
`
export const SCSearchWrapper = styled.div`
    position: relative;
    background: #f7f7f7;
    padding: 8px 10px;
`

export const SCEmptyResults = styled.div`
    text-align: center;
    padding: 10px;
`

const OFFSET_X = 40
export const SCUserAssignerSelectWrapper = styled(motion.div)`
    position: ${({ isDynamicViewport }) => isDynamicViewport ? 'absolute' : 'fixed' };
    width: 250px;
    box-shadow: 0px 3px 6px #bebebe29;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    background-color: #ffffff;
    font-size: 14px;
    z-index: ${({ isDynamicViewport }) => isDynamicViewport ? '1' : '9999991' };
  
    ${({ isDynamicViewport, left, offsetX, offsetY, top, height }) => isDynamicViewport 
        ? css`
            margin-left: -270px;
            top: ${calculateMaxYForModal(top, offsetY || 0, height)}px;
          `
        : css`
            left: ${left + (offsetX? + offsetX:OFFSET_X)}px;
            top: ${calculateMaxYForTooltip(top + (offsetY ? + offsetY : 0), height)}px;
          `
    }
      
    ${({ disableTopOffset }) => disableTopOffset && css`
      top: 0;
    `}
`

export const SCUserAssignerSelectHeader = styled.div`
    min-height: 25px;
    top: 0;
    left: ${props => !props.transformOnHeader ? '0' : '-1'}px;
    width: calc(100% + 2px);
    transform: ${props =>
        (props.onlyView || !props.transformOnHeader) ? 'none' : 'translate3d(0, calc(-100% + 3px), 0)'};
    border: 1px solid #e3e3e3;
    border-radius: 4px 4px 0 0;
    background: #f7f7f7;
    padding: 7px 10px 0 10px;
    color: #919191;
    font-size: 11px;
    ${props => props.transformOnHeader && ({
        position: 'absolute',
    })}
`
export const SCSearch = styled.input`
    position: relative;
    font-size: 15px;
    height: 36px;
    width: 100%;
    border-radius: 5px;
    outline: 0;
    border: 0;
    border: 1px solid #f2f2f2;
    padding-left: 28px;
`
export const SCSearchIcon = styled.div`
    color: #757575;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 19px;
`

export const SCImage = styled.div`
    max-width: 220px;
`

export const SCText = styled.p`
    font-size: 14px;
    color: #707070;
`

export const SCUserGroup = styled.li`
    background: #efefef;
    padding: 10px 12px;
    color: #4d4d4d;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;

    i {
        font-size: 18px;
    }
`
export const SCConfirmButton = styled.button`
    background-color: ${props => props.disabled ? '#eee' : '#0094CA'};
    border: ${props => props.active ? 'solid 1px #0094CA' : 'transparent'};
    color:#fff;
    transition: background-color .3s;
    margin:5px;
    width: 95%;
    padding: 7px;
    &:hover{
        cursor:${props => !props.disabled ? 'pointer' : 'default'};
        background-color: ${props => !props.disabled ? '#0483b0' : '#eee'};
    }
`

export const SCButtonCreate = styled.button`
    color: #0094ca;
    font-size: 12px;
    padding: 10px;
    background: none;
    border: none;
    cursor: pointer;
`
export const SCEmail = styled.div`
    color: #919191;
    font-size: 10px;
`
