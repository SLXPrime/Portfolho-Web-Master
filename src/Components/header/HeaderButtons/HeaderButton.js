import React from 'react'
import './HeaderButton.scss'
function HeaderButton(props) {
    return (
        <div className='HeaderButton'>
            <a href="https://github.com/SLXPrime">
            <button>
                <i class="fab fa-github fa-3x"></i>
            </button>
            </a>
        </div>
    )
}

export default HeaderButton
