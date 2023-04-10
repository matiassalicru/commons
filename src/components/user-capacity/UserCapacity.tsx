import { ReactElement } from 'react'
import { Tooltip } from '@projectcor/tooltip/lib'
// UI Components
import { AvatarUser } from '../avatar-user'
import { SvgIcon } from '../svg-icon'
// Styles
import { SCContentPicture, SCWrapperCapcity, SCSvg, SCPath, SCRoleClient, SCWrapperIcon } from './style'
import { UserCapacityProps } from './UserCapacity.interface'

const ROLE_CLIENT = 6

export function UserCapacity({
  picture,
  remainingHours,
  size,
  showTootltip = true,
  place = 'top',
  wordingTooltip,
  fromComponent,
  firstName,
  lastName,
  roleId,
  iconBorderLeft,
}: UserCapacityProps): ReactElement {
  /**
   * Parametro para calcular el porcentaje de la capacidad dibujada de un usuario
   * se setea por defecto a 100% lo que indica que un usuario está totalmente libre por defecto
   *
   * Mientras menor sea el valor menos disponibilidad tiene el usuario
   */
  const rHoursCalc = remainingHours && remainingHours != null ? 100 - remainingHours : 100

  /**
   * Funcion para obtener la clase de la capacidad de un usuario en base a las horas que le quedan
   *
   * @param {*} r_hours
   */
  const getCapacityClass = (rHours: number) => {
    if (rHours < 25) {
      return '25'
    }
    if (rHours < 50) {
      return '50'
    }
    return '100'
  }

  return (
    <Tooltip title={showTootltip ? wordingTooltip : ''} placement={fromComponent === 'from-search' ? 'left' : place}>
      <SCContentPicture>
        <AvatarUser size={size} picture={picture} firstName={firstName} lastName={lastName} />
        <SCWrapperCapcity>
          <SCSvg viewBox="0 0 36 36">
            <SCPath
              color={getCapacityClass(rHoursCalc)}
              strokeDasharray={`${rHoursCalc || 0}, 100`}
              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </SCSvg>
          {roleId === ROLE_CLIENT && (
            <SCRoleClient>
              <SvgIcon iconName="address-book" />
            </SCRoleClient>
          )}
          {iconBorderLeft && <SCWrapperIcon>{iconBorderLeft}</SCWrapperIcon>}
        </SCWrapperCapcity>
      </SCContentPicture>
    </Tooltip>
  )
}
