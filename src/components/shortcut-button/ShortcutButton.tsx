import { ReactElement, useRef, useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Plus } from '@projectcor/icons/lib/components/Plus'
import { Contact } from '@projectcor/icons/lib/components/Contact'
import { FileContract } from '@projectcor/icons/lib/components/FileContract'
import { UserTeam } from '@projectcor/icons/lib/components/UserTeam'
import { SCHLWrapper } from './style'

import { ShortcutButtonProps } from './ShortcutButton.interface'

export const ShortcutButton = ({ items = [] }: ShortcutButtonProps): ReactElement => {
  const [anchorEl, setAnchorEl] = useState(null)
  const ANCHOR_REF = useRef(null)

  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const IconsComponents = {
    UserTeam,
    Contact,
    FileContract,
  }

  const checkItemsValidations = list => {
    return list.some(item => item.show)
  }

  return (
    <>
      {checkItemsValidations(items) && (
        <SCHLWrapper>
          <IconButton
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
            ref={ANCHOR_REF}
            size="small"
          >
            <Plus />
          </IconButton>
          <Popper open={open} anchorEl={ANCHOR_REF.current} placement="bottom-start" transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button">
                      {items.map(item => {
                        const IconComponent = IconsComponents[item.icon]
                        return (
                          item.show && (
                            <MenuItem onClick={item.action} key={item.label}>
                              <ListItemIcon>
                                <IconComponent width="20px" height="20px" />
                              </ListItemIcon>
                              {item.label}
                            </MenuItem>
                          )
                        )
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </SCHLWrapper>
      )}
    </>
  )
}
