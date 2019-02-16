import React from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import myImage from './facebook-text-white.jpg';

class SignupSigninHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isAuthenticated: false,
            redirect: false,
        };
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
        console.log(`onChangeEmail: ${e.target.value}`);
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value });
        console.log(`onChangePassword: ${e.target.value}`);
    }

    onClickLogin() {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {
            email: this.state.email,
            password: this.state.password,
        })
            .then((res) => {
                // console.log(res);
                console.log('DATA: ', res.data);
                console.log('USER_ID: ', res.data.user_id);
                console.log('TOKEN: ', res.data.token);
                if (res.data.token !== '') {
                    this.setState({
                        is_authenticated: true,
                        redirect: true });
                }
            })
            .catch(err => console.error(err));
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return <div />;
    }

    render() {
        return (
            <div className="signup-signin-header">
                <div className="signup-signin-header-brand">
                    <img src={myImage} width="250px" height="80px" alt="facebook-text-white" />
                </div>
                <div className="signup-signin-header-login">
                    <div className="signup-signin-header-login-email">
                        <div className="signup-signin-header-login-email-text">Email</div>
                        <div>
                            <Input onChange={this.onChangeEmail} />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span className="signup-signin-header-login-email-text-bottom">Keep Me Logged in</span>
                        </div>
                    </div>
                    <div className="signup-signin-header-login-password">
                        <div className="signup-signin-header-login-password-text">Password</div>
                        <div>
                            <Input onChange={this.onChangePassword} />
                        </div>
                        <div>
                            <input type="checkbox" />
                            <span className="signup-signin-header-login-password-text-bottom">Forget your password?</span>
                        </div>
                    </div>
                    {this.renderRedirect()}
                    <Button
                        type="primary"
                        onClick={this.onClickLogin}>
                    Log in
                    </Button>

                </div>
            </div>
        );
    }
}

export default SignupSigninHeader;
