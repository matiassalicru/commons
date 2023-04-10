import { FunctionComponent, memo } from 'react'
// Types
import { Tooltip } from '@projectcor/tooltip/lib'
import { AvatarSize } from '../../../../../user-capacity/UserCapacity.interface'
import { AvatarsTypes } from './Avatars.inteface'
import { AvatarDataTypes } from '../../../../Filters.interface'
// Styles
import { SCWrapper, SCAvatarWrapper } from './styles'
// Components
import { AvatarUser as Avatar } from '../../../../../avatar-user'

export const Avatars: FunctionComponent<AvatarsTypes> = memo(({ data = [] }) => {
  return (
    <SCWrapper>
      {data.map(({ id, firstName, lastName, picture }: AvatarDataTypes) => (
        <Tooltip title={`${firstName} ${lastName}`} key={`avatar-${id}`}>
          <SCAvatarWrapper>
            <Avatar key={id} size={AvatarSize.tiny} firstName={firstName} lastName={lastName} picture={picture || ''} />
          </SCAvatarWrapper>
        </Tooltip>
      ))}
    </SCWrapper>
  )
})
