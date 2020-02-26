const initialState = {
    data: [],
    isLoading: false
}

const users = (state = initialState, action) =>{
    switch(action.type){
        case 'GET_USERS_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_USERS_FULFILLED':
            return{
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_USERS_REJECTED':
            return{
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}

export default users