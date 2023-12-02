export const SIGNIN_CALL_PENDING = 'SIGNIN_CALL_PENDING';
export const SIGNIN_CALL_SUCCESS = 'SIGNIN_CALL_SUCCESS';
export const SIGNIN_CALL_ERROR = 'SIGNIN_CALL_ERROR';

export const signCallPending=()=> {
    return {
        type: SIGNIN_CALL_PENDING
    }
}
export const signinCallSuccess=(message)=> {
    return {
        type: SIGNIN_CALL_SUCCESS,
        message: message
    }
}
export const signinCallError=(error)=> {
    return {
        type: SIGNIN_CALL_ERROR,
        error: error
    }
}