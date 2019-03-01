import React, { Component } from 'react';
import { Alert } from 'antd';
import SignupSigninHeader from './SignupSigninHeader';
import SignupSigninLeftContent from './SignupSigninLeftContent';
import SignupSigninRightContent from './SignupSigninRightContent';

class SignupSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignupSuccess: false,
        };

        this.updateIsSignupSuccessState = this.updateIsSignupSuccessState.bind(this);
    }
    updateIsSignupSuccessState(stateValue) {
        this.setState({
            isSignupSuccess: stateValue,
        });
    }
    render() {
        const isSignupSuccess = this.state.isSignupSuccess;
        return (
            <div className="signup-signin">
                <div>
                    <SignupSigninHeader />
                </div>
                {isSignupSuccess ? (
                    <div>
                        <Alert
                            message="Sign Up Success, you can log in now!"
                            style={{ textAlign: 'center' }}
                            type="info"
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
                        <SignupSigninRightContent isSignupSucessStateHandler={this.updateIsSignupSuccessState} />
                    </div>
                </div>
            </div>
        );
    }
}


export default SignupSignin;
