/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col } from 'antd';
import HeaderBrand from './HeaderBrand';
import HeaderSearch from './HeaderSearch';
import HeaderProfile from './HeaderProfile';
import HeaderHome from './HeaderHome';
import HeaderFriendRequest from './HeaderFriendRequest';
import HeaderMessage from './HeaderMessage';
import HeaderNotification from './HeaderNotification';
import HeaderLeftContainer from './HeaderLeftContainer';
import HeaderRightContainer from './HeaderRightContainer';

import './App.css';

const HeaderContainer = () => (
    <div className="header-container">
        <Row>
            <HeaderLeftContainer />
            <HeaderRightContainer />
        </Row>
        {/* <Row>
            <Col span={4}><HeaderBrand /></Col>
            <Col span={6}><HeaderSearch /></Col>
            <Col span={6}><HeaderProfile /></Col>
            <Col span={2}><HeaderHome /></Col>
            <Col span={2}><HeaderFriendRequest /></Col>
            <Col span={2}><HeaderMessage /></Col>
            <Col span={2}><HeaderNotification /></Col>
        </Row> */}
    </div>


      );

export default HeaderContainer;
/* eslint-enable */
