import React from 'react'

const ListUser = (props)=>{
    return(
        <div>
            {props.data.length > 0 ? <h1>Data Users</h1> : null}
            {props.data.map( (user)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}

export default ListUser