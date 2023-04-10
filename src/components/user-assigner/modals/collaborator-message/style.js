import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SCModalCMAllWrapper = styled(motion.div)`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 99999999;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    background-color: rgba(0, 0, 0, 0.5);
`
export const SCModalCMWrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    width: 600px;
    height: 200px;
    border-radius: 10px;
    padding: 20px 0px;
    background-color: #ffffff;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: 14px;
`
export const SCModalCMTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.63;
    padding-bottom: 10px;
    padding-left: 20px;
    border-bottom: 1px solid #ebebeb;
`
export const SCModalCMMessage = styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    padding-left: 20px;
`
export const SCModalButtons = styled.div``

export const SCModalInput = styled.button`
    width: 120px;
    height: 36px;
    font-size: 15px;
    text-align: center;
    margin-left: 20px;
`
export const SCModalConfirm = styled(SCModalInput)`
    padding: 9px 18.5px 9px 19px;
    background-color: #0094ca;
    color: #ffffff;
`
export const SCModalCancel = styled(SCModalInput)`
    padding: 9px 20px;
    color: #5a5a5a;
`
export const SCModalImgLabel = styled.div`
    height: 14px;
    margin: 2px 0 2px 5px;
    font-size: 10px;
    width: 84px;
    color: #0094ca;
`
export const SCModalImgWrapper = styled.div`
    width: 129px;
    height: 30px;
    border-radius: 15px;
    padding-left: 5px;
    background-color: #ffffff;
    display: flex;
    padding: 5px 0px 5px 8px;
    align-items: center;
    border: 1px solid #0094ca;
    margin-left: 12px;
`

export const SCModalCheckBoxWrapper = styled.div`
    padding-left: 20px;
    display: flex;
`

export const SCModalCheckBox = styled.input`
    margin-right: 5px !important;
`

export const SCModalIcon = styled.div`
    font-size: 20px;
    display: flex;
    color: '#0094ca';
`
