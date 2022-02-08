import React from 'react'
import Contraste from './Contraste/Contraste'
import './header.scss'
import HeaderButton from './HeaderButtons/HeaderButton'
function Header() {
    return (
        <header className='l-Header'>
            <HeaderButton/>
        <Contraste/>
        </header>
    )
}

export default Header
