import React from 'react'
import PostBox from '../PostBox/PostBox'
import image from '../../assets/teste-ab.png'
function Api() {
    return (
        <PostBox Titulo="Simm" data="04/03/2004">
            <img src={image} alt='Sim'/>
        </PostBox>
    )
}

export default Api
