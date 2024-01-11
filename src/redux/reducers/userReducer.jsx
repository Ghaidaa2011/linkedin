// state in redux is a single object
import { SET_USER } from "../actions/actionTypes";
import { setUser } from "../actions/actions";
const initialState = {
    user: null,
}
const userReducer = (state = initialState, action)=> {
    switch(action.type) {
        case SET_USER: 
            return {
                ...state,
                user: action.user,
            }
        default: 
        return state;
    }
}
export default userReducer;