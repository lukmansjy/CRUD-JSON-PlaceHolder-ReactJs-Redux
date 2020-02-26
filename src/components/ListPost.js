import React from 'react'
import { Link } from 'react-router-dom'

const ListPost = (props)=>{
    return(
        
        <div className="container">
            {props.data.length > 0 ? <h1>Data Post</h1> : null}
            {props.data.map( (post, index) =>(
                <Link key={index} to={`/post/${index+1}`}>
                    <div className="cardPost">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ListPost