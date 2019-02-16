/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import HomeCoverPhoto from './HomeCoverPhoto';
import HomeMenu from './HomeMenu';
import MicroFbPost from './MicroFbPost'
import MicroFbCreatePost from './MicroFbCreatePost'
import HomeBioBox from './HomeBioBox'
import HomeFriendBox from './HomeFriendBox'

const HomeMainContainer = () => (
    <div>
        <div>
            <HomeCoverPhoto />
            </div>
        <div>
            <HomeMenu />
        </div>
        <div className='home-body'>
            <div className='home-body-left'>
                <div><HomeBioBox /> </div>
                <div><HomeFriendBox /></div>
            </div>
            <div className='home-body-right'>
                <div>
                    <MicroFbCreatePost />
                </div>
                <div>
                    <MicroFbPost />
                </div>
                <div>
                    <MicroFbPost />
                </div>
            </div>
        </div>
    </div>

      );

export default HomeMainContainer;
/* eslint-enable */
