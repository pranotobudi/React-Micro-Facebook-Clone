import React from 'react';
import imgSrc from './world-map_640.png';

const SignupSigninLeftContent = () => (
    <div>
        <div className="signup-signin-left-content-text">
            Facebook helps you connect and share with the people in your life.
        </div>
        <div>
            <img src={imgSrc} alt="word-map" />
        </div>
    </div>
);

export default SignupSigninLeftContent;
