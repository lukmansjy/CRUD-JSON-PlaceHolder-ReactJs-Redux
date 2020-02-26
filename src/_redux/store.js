import { combineReducers, createStore, applyMiddleware } from "redux";

import {logger, promise} from './middleware'

import users from '../_reducers/usersR'
import posts from '../_reducers/postsR'

const reducer = combineReducers({
    users,
    posts
})

const store = createStore(reducer, applyMiddleware(logger, promise))

export default store