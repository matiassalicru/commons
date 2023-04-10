import PropTypes from 'prop-types'
import React from 'react'

// Styles
import { SCUserAssignerName } from './style'
export function UserAssignerName({name, translations }) {

    return (
        <SCUserAssignerName>
            <div>{translations.titleMarket || ''}</div>
            {name}
        </SCUserAssignerName>
    )
}

UserAssignerName.propTypes = {
    name: PropTypes.string,
}
