/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Layout } from 'antd';
import HeaderContainer from './HeaderContainer'
import HomeMainContainer from './HomeMainContainer'
import './index.css';

// const {
//     Content,
//   } = Layout;

const Home = () => (
    <Layout>
        <HeaderContainer />
        <div className="home">
            <div className='home-left-empty'></div>
            <div className='home-main-container'><HomeMainContainer /></div>
            <div className='home-right-empty'></div>
        </div>
    </Layout>

      );

export default Home;
/* eslint-enable */
