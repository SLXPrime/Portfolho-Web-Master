import React from 'react'
import './SocialMobile.scss'
export default function SocialMobile(props) {
    return (
        <div className='SocialMobile'>
            <div className='SocialCompMobile'>
                <a href={props.WhatsApp}>
                    <i class="fab fa-whatsapp"></i>
                </a>
            </div>
            <div className='SocialCompMobile'>
                <a href={props.Linkedin}>
                <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    )
}
