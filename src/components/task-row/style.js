import styled, { keyframes } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { createMuiTheme } from '@material-ui/core/styles'

export const SCColumnWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const GlobalStyles = createGlobalStyle`
  h1, h2, h3, h4, h5, h6, p, ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    padding: 0;
    border: 0;
  }

  .ck.ck-toolbar {
    border: 0;
  }

  .ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
    border-color: white;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #dedede;
    border-radius: 6px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #b1b1b1;
    border-radius: 6px;
    width: 3px;
  }
`

export const theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      root: {
        zIndex: '9999999 !important',
      },
    },
    MuiFilledInput: {
      root: {
        backgroundColor: '#F9F9F9',
        '&:hover': {
          backgroundColor: '#F5F5F5',
        },
        '&.Mui-focused': {
          backgroundColor: '#F5F5F5',
        },
        '&.Mui-disabled': {
          backgroundColor: '#F5F5F5',
        },
      },
    },
    MuiDialog: {
      root: {
        zIndex: '999999999 !important',
      },
    },
  },
  palette: {
    primary: {
      main: '#0094CA',
    },
    error: {
      main: '#E34259',
    },
  },
  typography: {
    htmlFontSize: 13,
  },
})

const animSkeleton = keyframes`
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
`

export const SGWrapperSkeleton = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    animation-name: ${animSkeleton};
    animation-duration: 2.8s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    background: linear-gradient(to right, #cccccc 0%, #696969 39%, #cccccc 75%);
    background-size: 50%;
    mix-blend-mode: overlay;
  }
`
