import { ReactElement, useState, useRef } from 'react'
import IconButton from '@material-ui/core/IconButton'
import uuid from 'react-uuid'

import Collapse from '@material-ui/core/Collapse'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'

import { Contact } from '@projectcor/icons/lib/components/Contact'
import { Notification } from '@projectcor/icons/lib/components/Notification'
import { Calendar } from '@projectcor/icons/lib/components/Calendar'
import { ChevronDown } from '@projectcor/icons/lib/components/ChevronDown'
import { ChevronUp } from '@projectcor/icons/lib/components/ChevronUp'
import { Settings } from '@projectcor/icons/lib/components/Settings'
import { FileContract } from '@projectcor/icons/lib/components/FileContract'
import { Globe } from '@projectcor/icons/lib/components/Globe'
import { Random } from '@projectcor/icons/lib/components/Random'
import { SignOut } from '@projectcor/icons/lib/components/SignOut'
import { User } from '@projectcor/icons/lib/components/User'
import { LogoIconCor } from '@projectcor/icons/lib/components/LogoIconCor'
import { Megaphone } from '@projectcor/icons/lib/components/Megaphone'

import {
  StyledAvatar,
  StyledAvatarAccounts,
  StyledAvatarButton,
  StyledBadge,
  StyledChip,
  StyledItemText,
  StyledPopper,
  StyledAnchor,
} from './style'
import { ProfileButtonProps } from './ProfileButton.interface'

export const ProfileButton = ({ options = [], user }: ProfileButtonProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [collapseState, setCollapseState] = useState({})

  const ANCHOR_REF = useRef(null)

  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleCollapse = i => {
    setCollapseState({ ...collapseState, [i]: !collapseState[i] })
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const IconsComponents = {
    Contact,
    Notification,
    Calendar,
    Settings,
    LogoIconCor,
    FileContract,
    Globe,
    Random,
    Megaphone,
    SignOut,
    User,
  }

  const { firstName, lastName, picture, role } = user

  return (
    <>
      <IconButton
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        ref={ANCHOR_REF}
        size="small"
        id="user_profile_button"
        data-robot-id="profile-button"
      >
        <StyledAvatarButton src={picture}>{`${firstName[0]}${lastName[0]}`}</StyledAvatarButton>
      </IconButton>
      <StyledPopper>
        <Popper open={open} anchorEl={ANCHOR_REF.current} placement="top-end" transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'top-end' ? 'right top' : 'right top',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button">
                    <ListItem>
                      <ListItemAvatar>
                        <StyledAvatar src={picture}>{`${firstName[0]}${lastName[0]}`}</StyledAvatar>
                      </ListItemAvatar>
                      <ListItemText primary={`${firstName} ${lastName}`} secondary={role} />
                    </ListItem>
                    <Divider />
                    {options.map((option, i) => {
                      const IconComponent = option.icon && IconsComponents[option.icon]
                      const LabelComponent = option.labelComponent
                      const iconType = LabelComponent ? 'solid' : 'regular'
                      return (
                        <li key={uuid()}>
                          {option.show && !option.options?.length && (
                            <StyledAnchor href={option.href} target={option.target}>
                              <MenuItem
                                component="div"
                                data-robot-id={option.dataRobotId}
                                disabled={option.disabled}
                                onClick={() => {
                                  handleClose()
                                  option.action && option.action()
                                }}
                              >
                                <ListItemIcon>
                                  {option.icon ? (
                                    <>
                                      {option.badge && (
                                        <StyledBadge badgeContent={option.badge.label} color={option.badge.color}>
                                          <IconComponent width="20px" height="20px" />
                                        </StyledBadge>
                                      )}
                                      {!option.badge && <IconComponent width="20px" height="20px" variant={iconType} />}
                                    </>
                                  ) : (
                                    <StyledAvatarAccounts
                                      src={option.src}
                                    >{`${option.label[0]}${option.label[1]}`}</StyledAvatarAccounts>
                                  )}
                                </ListItemIcon>
                                {LabelComponent ? (
                                  <LabelComponent height="24" />
                                ) : (
                                  <StyledItemText primary={option.label} />
                                )}
                                {option.chip && (
                                  <StyledChip badgeContent={option.chip.label} color={option.chip.color} />
                                )}
                              </MenuItem>
                            </StyledAnchor>
                          )}
                          {option.options?.length && (
                            <>
                              <MenuItem
                                component="div"
                                data-robot-id={option.dataRobotId}
                                disabled={option.disabled}
                                onClick={() => {
                                  option.action && option.action()
                                  handleCollapse(i)
                                }}
                              >
                                <ListItemIcon>
                                  <IconComponent width="20px" height="20px" />
                                </ListItemIcon>
                                <ListItemText primary={option.label} />
                                {collapseState[i] ? <ChevronUp width="14px" /> : <ChevronDown width="14px" />}
                              </MenuItem>
                              <Collapse in={collapseState[i]} timeout="auto" unmountOnExit>
                                {option.options.map(
                                  listItem =>
                                    option.label !== listItem.label && (
                                      <MenuItem
                                        key={uuid()}
                                        component="div"
                                        data-robot-id={listItem.dataRobotId}
                                        onClick={listItem.action}
                                      >
                                        <ListItemText secondary={listItem.label} />
                                      </MenuItem>
                                    )
                                )}
                              </Collapse>
                            </>
                          )}
                          {option.divider && <Divider />}
                        </li>
                      )
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </StyledPopper>
    </>
  )
}
