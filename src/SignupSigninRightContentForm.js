import React from 'react';
import axios from 'axios';
import { Input, Select, DatePicker } from 'antd';
import { Redirect } from 'react-router-dom';

const Option = Select.Option;

class SignupSigninRightContentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            reEmail: '',
            password: '',
            gender: '',
            birthday: '',
            is_authenticated: false,
            redirect: false,
        };

        this.onChangeFirstname = this.onChangeFirstname.bind(this);
        this.onChangeLastname = this.onChangeLastname.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeReEmail = this.onChangeReEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeBirthday = this.onChangeBirthday.bind(this);
        this.onClickForm = this.onClickForm.bind(this);
    }
    onChangeFirstname(e) {
        this.setState({ firstname: e.target.value });
        console.log(`onChangeFirstname: ${e.target.value}`);
    }
    onChangeLastname(e) {
        this.setState({ lastname: e.target.value });
        console.log(`onChangeLastname: ${e.target.value}`);
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
        console.log(`onChangeEmail: ${e.target.value}`);
    }
    onChangeReEmail(e) {
        this.setState({ reEmail: e.target.value });
        console.log(`onChangeReEmail: ${e.target.value}`);
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
        console.log(`onChangePassword: ${e.target.value}`);
    }
    onChangeGender(value) {
        this.setState({ gender: value });
        console.log(`onChangeGender: ${value}`);
    }
    onChangeBirthday(dateMoment, dateString) {
        this.setState({ birthday: dateString });
        console.log(`onChangeBirthday: ${dateString}`);
    }
    onClickForm() {
        console.log('onClickForm');
        console.log(`firstname: ${this.state.firstname}`);
        console.log(`lastname: ${this.state.lastname}`);
        console.log(`email: ${this.state.email}`);
        console.log(`reEmail: ${this.state.reEmail}`);
        console.log(`password: ${this.state.password}`);
        console.log(`gender: ${this.state.gender}`);
        console.log(`birthday: ${this.state.birthday}`);
        axios.post('http://127.0.0.1:8000/api/', {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            gender: this.state.gender,
            birthday: this.state.birthday,
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
        // axios.post('http://127.0.0.1:8000/api-token-auth/', {
        //     email: this.state.email,
        //     password: this.state.password,
        // })
        //     .then((res) => {
        //         // console.log(res);
        //         console.log('DATA: ', res.data);
        //         console.log('USER_ID: ', res.data.user_id);
        //         console.log('TOKEN: ', res.data.token);
        //         if (res.data.token !== '') {
        //             this.setState({
        //                 is_authenticated: true,
        //                 redirect: true });
        //             console.log('IS_AUTHENTICATED:', this.state.is_authenticated);
        //             // axios.get('http://127.0.0.1:9000/')
        //             //     .then(res => console.log(res));
        //         }
        //     })
        //     .catch(err => console.error(err));


        // axios.put('http://127.0.0.1:8000/api/1/', {
        //     firstname: this.state.firstname,
        //     lastname: this.state.lastname,
        //     email: this.state.email,
        //     password: this.state.password,
        //     gender: this.state.gender,
        //     birthday: this.state.birthday,
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err));


        // axios.get('http://127.0.0.1:8000/api/')
        //     .then(res => console.log(res));
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
        return <div />;
    }

    render() {
        return (
            <div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">First name:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeFirstname} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Last name:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeLastname} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Your email:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            type="email"
                            onChange={this.onChangeEmail} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Re-enter email:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangeReEmail} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">New Password:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Input
                            onChange={this.onChangePassword} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">I am:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <Select
                            defaultValue="Gender"
                            style={{ width: 120 }}
                            onChange={this.onChangeGender}>
                            <Option value="Men">Men</Option>
                            <Option value="Woman">Woman</Option>
                        </Select>
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text">Birthday:</div>
                    <div className="signup-signin-right-content-form-row-input">
                        <DatePicker
                            onChange={this.onChangeBirthday} />
                    </div>
                </div>
                <div className="signup-signin-right-content-form-row">
                    <div className="signup-signin-right-content-form-row-text" />
                    <div className="signup-signin-right-content-form-row-input">
                        {/* {this.renderRedirect()} */}
                        <input
                            className="signup-signin-right-content-form-row-input-submit-btn"
                            type="button"
                            value="Sign Up"
                            onClick={this.onClickForm} />
                        {/* style={{ backgroundColor: '#6BA74E', color: 'white', width: 100 }} */}
                    </div>
                </div>
            </div>
        );
    }
}


export default SignupSigninRightContentForm;
