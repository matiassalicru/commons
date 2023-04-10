import Avatar, { AvatarProps } from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import ListItemText from '@material-ui/core/ListItemText'
import { styled as styledMui } from '@material-ui/core/styles'
import styled from 'styled-components'

export const StyledPopper = styled.div`
  div:first-child {
    z-index: 2;
  }

  .MuiList-root {
    max-height: 520px;
    min-width: 260px;
    overflow-y: scroll;
  }
  .MuiAvatar-root {
    margin-right: 16px;
  }
  .MuiListItemIcon-root {
    min-width: 36px;
  }
  .MuiListItemText-primary {
    font-size: 14px;
  }
`

export const StyledAnchor = styled.a`
  &:link,
  &:visited {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
  }
`

export const StyledAvatar = styledMui((props: AvatarProps) => <Avatar {...props} />)(() => ({
  lineHeight: 'initial',
}))

export const StyledAvatarAccounts = styledMui((props: AvatarProps) => <Avatar {...props} />)(() => ({
  width: 20,
  height: 20,
  fontSize: 12,
}))

export const StyledAvatarButton = styledMui((props: AvatarProps) => <Avatar {...props} />)(({ theme }) => ({
  width: 30,
  height: 30,
  lineHeight: 'initial',
  fontSize: theme.typography.fontSize,
}))

export const StyledBadge = styledMui(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 0,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

export const StyledChip = styledMui(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    border: `2px solid ${theme.palette.background.paper}`,
    right: -3,
    transform: 'scale(1) translate(100%, -50%);',
  },
}))

export const StyledItemText = styledMui(ListItemText)(() => ({
  flex: 'inherit',
}))
