/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import HomeMainContainer from './HomeMainContainer';
import FriendsMainContainer from './FriendsMainContainer';
import HeaderContainer from './HeaderContainer';

import './index.css';

// const {
//     Content,
//   } = Layout;

const Friends = () => (
    <Layout>
        <HeaderContainer />
        <div className="friend">
            <div className="friend-left-empty" />
            <div className="friend-main-container"><FriendsMainContainer /></div>
            <div className="friend-right-empty" />
        </div>
    </Layout>

      );

export default Friends;
/*eslint-disable*/