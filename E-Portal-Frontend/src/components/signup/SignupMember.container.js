import { connect } from 'react-redux';
import SignupMemberView from "./SignupMember.view";
import SignupCall from "./SignupMember.api";

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
)(SignupMemberView);