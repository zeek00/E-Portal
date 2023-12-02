import React from 'react';
import axios from 'axios';
import {signinCallSuccess, signinCallError, signCallPending} from './Signin.actions';
import {apiURl} from "../../utils";


function SigninCall(value, handleSuccess, handleFailure) {

    return dispatch => {
        dispatch(signCallPending());
        axios.post(`${apiURl}/e-portal/login`,value)
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(signinCallSuccess(res.data.response));
                handleSuccess()
            })
            .catch(error => {
                console.log(error)
                dispatch(signinCallError(error));
                handleFailure()
            })
    }
}

export default SigninCall;