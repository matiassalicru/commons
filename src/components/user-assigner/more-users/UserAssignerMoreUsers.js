import React, { useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
// Styles
import { SCAvatarsHeader } from "../select/style";
import { SCHeaverAvatarMore, SCHeaverAvatarMoreTooltip } from "./style";
// UI Components
import { AvatarDeleteable } from "../avatar/AvatarDeleteable";
// Global Components
import { UserCapacity } from "../../user-capacity";
// Global constants
import { ROLE_CLIENT } from "../../../utils/globalConstants";

const DELAY_TIMEOUT = 250

export function UserAssignerMoreUsers({
  users,
  handleDelete,
  translations,
  showRoleClient,
}) {
  const [openTooltip, setOpenTooltip] = useState(false);
  const timer = useRef(null)

  const handleMouseEnter = useCallback(() => {
    clearTimeout(timer.current)
    setOpenTooltip(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    /* Se agrega time out para darle tiempo al usuario a posicionarse
        sobre el modal en donde se visualice el resto
        de los usuarios asignados y que este no se cierre */
        timer.current = setTimeout(() => setOpenTooltip(false),
            DELAY_TIMEOUT
        )
  }, []);

  /**
   * Obtiene el wording del tooltip para el usuario segun su role
   * @param {Object} user
   */
  const getTooltipWording = useCallback((user) => {
    const { roleId, firstName, lastName, remainingHours } = user;
    if (+roleId === ROLE_CLIENT && showRoleClient) {
      return `${firstName} ${lastName} ${translations.tooltipRoleClient || ""}`;
    }

    return `${remainingHours} ${
      translations.tooltipAvailableCapacity || ""
    } ${firstName} ${lastName}`;
  }, []);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SCHeaverAvatarMore>{`+${users.length}`}</SCHeaverAvatarMore>
      {openTooltip && (
        <SCHeaverAvatarMoreTooltip>
          <SCAvatarsHeader>
            {users.map((user) => (
              <AvatarDeleteable
                onDelete={() => handleDelete(user)}
                key={`user-more-list-${user.id}`}
              >
                <UserCapacity
                  picture={user.picture}
                  remainingHours={user.remainingHours}
                  size="small"
                  firstName={user.firstName}
                  lastName={user.lastName}
                  showTootltip={true}
                  wordingTooltip={getTooltipWording(user)}
                  fromComponent={`user-assigner-more-${user.id}`}
                  place="top"
                  roleId={showRoleClient ? +user.roleId : null}
                />
              </AvatarDeleteable>
            ))}
          </SCAvatarsHeader>
        </SCHeaverAvatarMoreTooltip>
      )}
    </div>
  );
}

UserAssignerMoreUsers.propTypes = {
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  /** Objeto con las traducciones */
  translations: PropTypes.object.isRequired,
  /** Indicador para mostrar el icono de usuario tipo cliente en los users */
  showRoleClient: PropTypes.bool,
};
