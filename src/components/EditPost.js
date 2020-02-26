import React, { useState } from 'react'

const EditPost = (props)=>{
    const [state, setState] = useState({
        title: props.title,
        body: props.body,
        id: props.id,
        userId: 1
    })

    const changeTitle = (event) =>{
        setState({
            ...state,
            title: event.target.value
        })
    }

    const changeBody = (event) =>{
        setState({
            ...state,
            body: event.target.value
        })
    }

    return(
        <div><br/>
            <span>Title:</span><br/>
            <input value={state.title} style={{width: 500}} onChange={changeTitle}/><br/><br/>
            <span>Content:</span><br/>
            <textarea cols="80" rows="6" onChange={changeBody} value={state.body}>{state.body}</textarea><br/>
            <button onClick={()=>{
                props.handleSave(state)}
                } className="btnInfo">Save
            </button>
            <button onClick={props.handleEdit} className="btnWarning">Cancel</button>
        </div>
    )
}

export default EditPost