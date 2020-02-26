import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ()=>{
    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
        </div>
    )
}

export default Nav