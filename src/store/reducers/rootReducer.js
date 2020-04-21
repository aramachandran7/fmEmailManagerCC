import authReducer from'./authReducer'
import emailReducer from './emailReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    email: emailReducer,
});

export default rootReducer
