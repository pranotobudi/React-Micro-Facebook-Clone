import React from 'react';
import SignupSigninRightContentForm from './SignupSigninRightContentForm';

class SignupSigninRightContent extends React.Component {
    constructor(props) {
        super(props);
        this.isSignupSucess = this.props.isSignupSucess;
    }
    render() {
        return (
            <div>
                <div className="signup-signin-right-content-text">
                    <div className="signup-signin-right-content-h1">Sign Up</div>
                    <div className="signup-signin-right-content-h2">It is free and always will be</div>
                </div>
                <div className="signup-signin-right-content-form"><SignupSigninRightContentForm isSignupSucess={this.props.isSignupSucess} /></div>
            </div>
        );
    }
}

export default SignupSigninRightContent;
