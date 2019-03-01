import React, { Component } from 'react';
import { Alert } from 'antd';
import SignupSigninHeader from './SignupSigninHeader';
import SignupSigninLeftContent from './SignupSigninLeftContent';
import SignupSigninRightContent from './SignupSigninRightContent';

class SignupSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSignupAlert: false,
            signupAlertMessage: 'Sign Up Success, you can log in now!',
            signupAlertType: 'info',
        };

        this.updateSignupStateHandler = this.updateSignupStateHandler.bind(this);
    }
    updateSignupStateHandler(showSignupAlertValue, signupAlertMessageValue, signupAlertTypeValue) {
        this.setState({
            showSignupAlert: showSignupAlertValue,
            signupAlertMessage: signupAlertMessageValue,
            signupAlertType: signupAlertTypeValue,
        });
    }
    render() {
        const showSignupAlert = this.state.showSignupAlert;
        return (
            <div className="signup-signin">
                <div>
                    <SignupSigninHeader />
                </div>
                {showSignupAlert ? (
                    <div>
                        <Alert
                            message={this.state.signupAlertMessage}
                            style={{ textAlign: 'center' }}
                            type={this.state.signupAlertType}
                        // showIcon
                            closable />
                    </div>

                    ) : (
                        <div />
                )}
                <div className="signup-signin-main-content">
                    <div className="signup-signin-left-content">
                        <SignupSigninLeftContent />
                    </div>
                    <div className="signup-signin-right-content">
                        <SignupSigninRightContent updateSignupStateHandler={this.updateSignupStateHandler} />
                    </div>
                </div>
            </div>
        );
    }
}


export default SignupSignin;
