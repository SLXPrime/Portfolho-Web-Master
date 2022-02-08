import React from 'react'
import './Contraste.scss'
import {useState, useEffect} from 'react'
import $ from 'jquery'


export default function Contraste() {

    const [epa, setEpa] = useState(-1)

    useEffect(function Sim () {
        if (epa === 1) {
            $(".l-Header").removeClass('DarkHeader')
            $(".PostBox").removeClass('DarkPost')
            $(".SocialBoxSS").removeClass('DarkSocial')
            $(".ContrastButton").removeClass('DarkCButton')
            $(".SocialMobile").removeClass('DarkSocialM')
        }else {
            $(".ContrastButton").addClass('DarkCButton')
            $(".l-Header").addClass('DarkHeader')
            $(".PostBox").addClass('DarkPost')
            $(".SocialBoxSS").addClass('DarkSocial')
            $(".SocialMobile").addClass('DarkSocialM')
        }
        
        console.log(epa)

    }, [epa]);

    return (
        <button className='ContrastButton' onClick={() => setEpa(-epa)}>
            <i class="fas fa-adjust fa-1x"></i>
        </button>
    )
}
