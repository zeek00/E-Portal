import { connect } from 'react-redux';
import SignupCall from "./SignupAdmin.api";
import SignupAdminView from "./SignupAdmin.view";

const mapStateToProps = state => ({
    error: state.signupMember.error,
    message: state.signupMember.message,
    pending: state.signupMember.pending,
    success : state.signupMember.success,
})

const mapDispatchToProps = dispatch => ({
    signupCall: (value, handleSuccess, handleFailure) => dispatch(SignupCall(value, handleSuccess, handleFailure)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupAdminView);