import React from 'react';
import SignupSigninHeader from './SignupSigninHeader';
import SignupSigninLeftContent from './SignupSigninLeftContent';
import SignupSigninRightContent from './SignupSigninRightContent';

const SignupSignin = () => (
    <div className="signup-signin">
        <div>
            <SignupSigninHeader />
        </div>
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


export default SignupSignin;
