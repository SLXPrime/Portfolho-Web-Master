import React from 'react'
import './SocialBox.scss'
function SocialBox(props) {
    return (
        <a className='SocialBoxSS' href={props.link}>
        <div className='SocialBox'>
            <div className='iconBox'>
                {props.children}
            </div>
            <div className='TextAndButton'>
                <h3>{props.Title}</h3>
                <a href={props.link}>
                </a>
            </div>
        </div>
        </a>
    )
}

export default SocialBox
