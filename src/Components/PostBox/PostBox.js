import React from 'react'
import './PostBox.scss'
function PostBox(props) {
    return (
        <div className="PostBox">
            <div className='Top-bar'>
                <div className='info'>
                    <p>{props.Titulo}</p>
                    <p>{props.data}</p>
                </div>
            </div>
            {props.children}
            <div className="button-bar">
                <div className='comment'>
                        <a href='.'>
                            <button className='Go'> <i class="fas fa-share"></i> Vá para o Git da aplicação</button>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default PostBox
