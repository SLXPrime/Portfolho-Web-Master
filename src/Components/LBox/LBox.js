import React from 'react'
import './Lbox.scss'
function LBox(props) {
    return (
        <section className='Lbox'>
            {props.children}
        </section>
    )
}

export default LBox
