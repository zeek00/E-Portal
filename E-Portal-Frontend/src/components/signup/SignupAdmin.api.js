import React from 'react';
import axios from 'axios';
import { message,Modal } from "antd";
import {signupCallSuccess, signupCallPending, signupCallError} from './SignupAdmin.actions';
import {apiURl} from "../../utils";


function SignupCall(value, handleSuccess, handleFailure) {

    return dispatch => {
        dispatch(signupCallPending());
        axios.post(`${apiURl}/e-portal/clubsignup`,value)
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(signupCallSuccess(res.data.response));
                handleSuccess();
            })
            .catch(error => {
                console.log(error)
                dispatch(signupCallError(error));
                handleFailure();
            })
    }
}

export default SignupCall;