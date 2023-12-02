export const SIGNUP_CALL_PENDING = 'SIGNUP_CALL_PENDING';
export const SIGNUP_CALL_SUCCESS = 'SIGNUP_CALL_SUCCESS';
export const SIGNUP_CALL_ERROR = 'SIGNUP_CALL_ERROR';

export const signupCallPending=()=> {
    return {
        type: SIGNUP_CALL_PENDING
    }
}
export const signupCallSuccess=(message)=> {
    return {
        type: SIGNUP_CALL_SUCCESS,
        message: message
    }
}
export const signupCallError=(error)=> {
    return {
        type: SIGNUP_CALL_ERROR,
        error: error
    }
}