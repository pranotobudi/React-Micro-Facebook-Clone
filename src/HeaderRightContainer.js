/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col } from 'antd';
import HeaderProfile from './HeaderProfile';
import HeaderHome from './HeaderHome';
import HeaderFriendRequest from './HeaderFriendRequest';
import HeaderMessage from './HeaderMessage';
import HeaderNotification from './HeaderNotification';
import './App.css';

const HeaderRightContainer = () => (
    <div className="header-right-container">
        <HeaderProfile />
        <HeaderHome />
        <HeaderFriendRequest />
        <HeaderMessage />
        <HeaderNotification />
        {/* <Row>
            <Col span={6}><HeaderProfile /></Col>
            <Col span={2}><HeaderHome /></Col>
            <Col span={2}><HeaderFriendRequest /></Col>
            <Col span={2}><HeaderMessage /></Col>
            <Col span={2}><HeaderNotification /></Col>
        </Row> */}
    </div>


      );

export default HeaderRightContainer;
/* eslint-enable */
