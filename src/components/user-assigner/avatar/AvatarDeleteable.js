import React from 'react'
import PropTypes from 'prop-types'
// Styles
import { SCUserDeleteable, SCUserDeleteableIcon } from './style'
// Global Components
import { SvgIcon } from '../../svg-icon'

export function AvatarDeleteable({ children, onDelete }) {
    return (
        <SCUserDeleteable>
            {children}
            <SCUserDeleteableIcon onClick={onDelete}>
                <SvgIcon iconName="times" />
            </SCUserDeleteableIcon>
        </SCUserDeleteable>
    )
}

AvatarDeleteable.propTypes = {
    children: PropTypes.element.isRequired,
    onDelete: PropTypes.func.isRequired,
}
