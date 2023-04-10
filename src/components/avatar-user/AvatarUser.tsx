import { useState, useCallback, useMemo, useEffect, ReactElement } from 'react'
// Styles
import { SCAvatar, SCAvatarFallback, SCInitialsName } from './style'
import { AvatarSize, AvatarUserProps } from './AvatarUser.interface'

const USER_IMAGE_DEFAULT = '/images/user.png'

export function AvatarUser({
  picture = USER_IMAGE_DEFAULT,
  size = AvatarSize.small,
  firstName,
  lastName,
}: AvatarUserProps): ReactElement {
  const [error, setError] = useState(false)

  /*
    Cada vez que se actualiza la picture
    vuelve a resetear el error
    */
  useEffect(() => {
    setError(false)
  }, [picture])

  const handleImageError = useCallback(() => {
    setError(true)
  }, [])

  const HAS_DEFAULT_IMAGE = useMemo(() => picture?.includes('user.png'), [])

  const USER_DELETED = useMemo(() => firstName && lastName, [firstName, lastName])

  return (
    <>
      {HAS_DEFAULT_IMAGE || !picture || error ? (
        <SCAvatarFallback size={size} bgColor={USER_DELETED}>
          <SCInitialsName>
            {firstName && firstName[0]}
            {lastName && lastName[0]}
          </SCInitialsName>
        </SCAvatarFallback>
      ) : (
        <SCAvatar
          alt={`${firstName && firstName} ${lastName && lastName}`}
          src={picture}
          size={size}
          onError={handleImageError}
        />
      )}
    </>
  )
}
