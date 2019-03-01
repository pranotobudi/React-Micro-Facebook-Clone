import React, { Component } from 'react';
import { Alert } from 'antd';
import SignupSigninHeader from './SignupSigninHeader';
import SignupSigninLeftContent from './SignupSigninLeftContent';
import SignupSigninRightContent from './SignupSigninRightContent';

class SignupSignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignupSucess: false,
        };
    }
    render() {
        const isSignupSucess = this.state.isSignupSucess;
        return (
            <div className="signup-signin">
                <div>
                    <SignupSigninHeader />
                </div>
                {isSignupSucess ? (
                    <div>
                        <Alert
                            message="Sign Up Success, you can log in now!"
                            style={{ textAlign: 'center' }}
                            type="success"
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
                        <SignupSigninRightContent />
                    </div>
                </div>
            </div>
        );
    }
}


export default SignupSignin;
