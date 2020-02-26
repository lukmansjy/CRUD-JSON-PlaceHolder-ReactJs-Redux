import axios from 'axios'

export const getUsers = ()=>{
    return{
        type: 'GET_USERS',
        payload: axios({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        })
    }
}