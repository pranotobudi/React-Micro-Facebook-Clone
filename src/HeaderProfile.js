/* eslint-disable */
import React from 'react';
import { Avatar } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

const HeaderProfile = () => (
    <div className="header-profile">
        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        <Link to='/pranoto.budi'>
        <span className="header-profile-text">Pranoto</span>
        </Link>
    </div>
      );

export default HeaderProfile;
/* eslint-enable */
