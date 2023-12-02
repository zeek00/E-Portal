import {SIGNUP_CALL_SUCCESS, SIGNUP_CALL_ERROR, SIGNUP_CALL_PENDING } from './SignupAdmin.actions';

const INITIAL_STATE={
    message:"",
    success:false,
    pending: false,
    error: null
}
const AdminSignupReducer = (state=INITIAL_STATE ,action)=>{
    switch(action.type){
        case SIGNUP_CALL_PENDING:
            return {
                ...state,
                pending: true
            }
        case SIGNUP_CALL_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                message: action.message
            }
        case SIGNUP_CALL_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;

    }
}

export default AdminSignupReducer;