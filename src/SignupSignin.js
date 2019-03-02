import React, { Component } from 'react';
import { Alert, Spin } from 'antd';
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
            showLoginAlert: false,
            loginAlertMessage: 'Log in Failed, please check again your email and password!',
            loginAlertType: 'error',
            showSpinningLogin: false,
        };

        this.updateSignupStateHandler = this.updateSignupStateHandler.bind(this);
        this.updateLoginStateHandler = this.updateLoginStateHandler.bind(this);
        this.loginAlertOnCloseHandler = this.loginAlertOnCloseHandler.bind(this);
        this.signupAlertOnCloseHandler = this.signupAlertOnCloseHandler.bind(this);
        this.updateSpinningLoginHandler = this.updateSpinningLoginHandler.bind(this);
    }

    signupAlertOnCloseHandler() {
        this.setState({
            showSignupAlert: false,
        });
    }

    loginAlertOnCloseHandler() {
        this.setState({
            showLoginAlert: false,
        });
    }

    updateSignupStateHandler(showSignupAlertValue, signupAlertMessageValue, signupAlertTypeValue) {
        this.setState({
            showSignupAlert: showSignupAlertValue,
            signupAlertMessage: signupAlertMessageValue,
            signupAlertType: signupAlertTypeValue,
        });
    }
    updateLoginStateHandler(showLoginAlertValue, loginAlertMessageValue, loginAlertTypeValue) {
        this.setState({
            showLoginAlert: showLoginAlertValue,
            loginAlertMessage: loginAlertMessageValue,
            loginAlertType: loginAlertTypeValue,
        });
    }

    updateSpinningLoginHandler(showSpinningLoginValue) {
        this.setState({ showSpinningLogin: showSpinningLoginValue });
    }
    render() {
        const showSignupAlert = this.state.showSignupAlert;
        const showLoginAlert = this.state.showLoginAlert;
        return (
            <div className="signup-signin">
                <div>
                    <SignupSigninHeader
                        updateLoginStateHandler={this.updateLoginStateHandler}
                        updateSpinningLoginHandler={this.updateSpinningLoginHandler} />
                </div>
                <div>
                    <Alert
                        message='if you have not signed up, you can use "email: guest@gmail.com", "password: guest"'
                        style={{ textAlign: 'center' }}
                        type="info"
                        // showIcon
                        closable
                        onClose={this.loginAlertOnCloseHandler} />
                </div>
                <div
                    style={{ textAlign: 'center' }}>
                    <Spin
                        tip="Loading..."
                        spinning={this.state.showSpinningLogin}
                        size="large" />
                </div>
                {showSignupAlert ? (
                    <div>
                        <Alert
                            message={this.state.signupAlertMessage}
                            style={{ textAlign: 'center' }}
                            type={this.state.signupAlertType}
                        // showIcon
                            closable
                            onClose={this.signupAlertOnCloseHandler} />
                    </div>

                    ) : (
                        <div />
                )}
                {showLoginAlert ? (
                    <div>
                        <Alert
                            message={this.state.loginAlertMessage}
                            style={{ textAlign: 'center' }}
                            type={this.state.loginAlertType}
                        // showIcon
                            closable
                            onClose={this.loginAlertOnCloseHandler} />
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
