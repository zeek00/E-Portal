import { connect } from 'react-redux';
import SigninCall from "./Signin.api";
import Signin from "./Signin";

const mapStateToProps = state => ({
    error: state.signin.error,
    message: state.signin.message,
    pending: state.signin.pending
})

const mapDispatchToProps = dispatch => ({
    signinCall: (value, handleSuccess, handleFailure) => dispatch(SigninCall(value, handleSuccess, handleFailure)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signin);