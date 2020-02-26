const initialState = {
    data: [],
    dataEdit: [],
    isLoading: false
}

const posts = (state = initialState, action) => {
    switch(action.type){
        
        // GET ALL POSTS
        case 'GET_POSTS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_POSTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data
            }
        case 'GET_POSTS_REJECTED':
            return {
                ...state,
                isLoading: true,
                error: true
            }

        // EDIT POSTS
        case 'PUT_POST_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'PUT_POST_FULFILLED':
            let newData = state.data
            newData[action.payload.data.id - 1] = action.payload.data
            return {
                ...state,
                isLoading: false,
                data: newData
            }
        case 'PUT_POST_REJECTED':
            return {
                ...state,
                isLoading: true,
                error: true
            }

        // DELETE POSTS
        case 'DELETE_POST_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_POST_FULFILLED':
            let idPost = window.location.pathname.split('/')[2] - 1
            let newData2 = state.data
            newData2.splice(idPost, 1)
            return {
                ...state,
                isLoading: false,
                data: newData2
            }
        case 'DELETE_POST_REJECTED':
            return {
                ...state,
                isLoading: true,
                error: true
            }
        default :
            return state
    }
}

export default posts