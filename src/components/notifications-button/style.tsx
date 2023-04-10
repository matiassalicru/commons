import Badge from '@material-ui/core/Badge'
import { styled as styledMui } from '@material-ui/core/styles'
import Colors from '@projectcor/theme/lib/base/colors'
import Typography from '@projectcor/theme/lib/base/typography'

const {
  error: { main: errorColor },
} = Colors
const {
  size: { xs: badgeFontSize },
} = Typography

export const StyledBadge = styledMui(Badge)(() => ({
  '& svg': {
    padding: 2,
  },
  '& span': {
    fontSize: badgeFontSize,
  },
  '& .MuiBadge-badge': {
    top: 8,
    right: 8,
    background: errorColor,
  },
}))
