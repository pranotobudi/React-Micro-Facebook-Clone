/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col } from 'antd';
import HeaderBrand from './HeaderBrand';
import HeaderSearch from './HeaderSearch';
import './App.css';

const HeaderLeftContainer = () => (
    <div className="header-left-container">
            <HeaderBrand />
            <HeaderSearch />
        {/* <Row>
            <Col span={4}><HeaderBrand /></Col>
            <Col span={6}><HeaderSearch /></Col>
        </Row> */}
    </div>


      );

export default HeaderLeftContainer;
/* eslint-enable */
