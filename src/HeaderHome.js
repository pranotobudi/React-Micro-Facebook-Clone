/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';
// import { Row } from 'antd';

const HeaderHome = () => (
    <div className="header-home-text">
        <Link to="/">Home</Link>
    </div>
      );

export default HeaderHome;
/*eslint-enable*/
