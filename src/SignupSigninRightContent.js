import React from 'react';
import SignupSigninRightContentForm from './SignupSigninRightContentForm';

class SignupSigninRightContent extends React.Component {
    constructor(props) {
        super(props);
        this.isSignupSuccess = this.props.isSignupSuccess;
    }
    render() {
        return (
            <div>
                <div className="signup-signin-right-content-text">
                    <div className="signup-signin-right-content-h1">Sign Up</div>
                    <div className="signup-signin-right-content-h2">It is free and always will be</div>
                </div>
                <div className="signup-signin-right-content-form"><SignupSigninRightContentForm updateSignupStateHandler={this.props.updateSignupStateHandler} /></div>
            </div>
        );
    }
}

export default SignupSigninRightContent;
