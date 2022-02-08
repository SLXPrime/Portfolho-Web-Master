import React from 'react'
import './LContainer.scss'
function LContainer(props) {
    return (
        <div className={`LContainer ${props.Local}`}>
            {props.children}
        </div>
    )
}

export default LContainer
