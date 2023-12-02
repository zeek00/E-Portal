import { combineReducers } from 'redux';
import MemberSignupReducer from "../components/signup/SignupMember.reducer";
import SigninReducer from "../components/signin/Signin.reducer";

export default combineReducers(
    {
        signupMember: MemberSignupReducer,
        signin: SigninReducer,
    },
);