import axios from 'axios'

export const getPosts = ()=>{
    return {
        type: 'GET_POSTS',
        payload: axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        })
    }
}

export const editPosts = (data)=>{
    return {
        type: 'PUT_POST',
        payload: axios({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${data.id}`,
            data: data
        })
    }
}

export const deletePost = (id) =>{
    console.log(id)
    return {
        type: 'DELETE_POST',
        payload: axios({
            method: 'DELETE',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`
        })
    }
}