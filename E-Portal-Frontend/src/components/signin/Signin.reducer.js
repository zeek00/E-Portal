import {SIGNIN_CALL_SUCCESS, SIGNIN_CALL_PENDING, SIGNIN_CALL_ERROR} from './Signin.actions';

const INITIAL_STATE={
    message:"",
    pending: false,
    error: null
}
const SigninReducer = (state=INITIAL_STATE ,action)=>{
    switch(action.type){
        case SIGNIN_CALL_PENDING:
            return {
                ...state,
                pending: true
            }
        case SIGNIN_CALL_SUCCESS:
            return {
                ...state,
                pending: false,
                message: action.message
            }
        case SIGNIN_CALL_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;

    }
}

export default SigninReducer;