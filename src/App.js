/*eslint-disable*/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContainer from './MainContainer';
import Home from './Home';
import Friends from './Friends'
import SignupSignin from './SignupSignin'
import './App.css';

class App extends Component {
    state = { loading: false };

    componentDidMount() {
        // 测试 devServer 的代理功能
        // fetch('/api/category')
        //     .then(resp => resp.json())
        //     .then(res => console.log('here here', res));
    }

    render() {
        return (
            <Router>
                <div>
                    {/* <div>Bismillah</div> */}
                    <Route exact path="/pranoto.budi/friends" component={Friends} />
                    <Route exact path="/signup" component={SignupSignin} />
                    <Route exact path="/" component={MainContainer} />
                    <Route exact path="/pranoto.budi" component={Home} />
                </div>
            </Router>
            /* Newsfeed */
            // <MainContainer />
            /* Home */
            //  <Home />
            /*Friends*/
            // <Friends />
        );
    }
}

export default App;

/*eslint-enable*/
