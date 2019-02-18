/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card } from 'antd';
import MicroFbFriendRequestItem from './MicroFbFriendRequestItem';

const RightContainer = () => (
    // <Card
    //     title="Default size card"
    //     extra={<a href={process.env.REACT_APP_DEFAULT_DOMAIN_NAME}>More</a>}
    //     style={{ width: 250 }}>
    //     <p>Card content</p>
    //     <p>Card content</p>
    //     <p>Card content</p>
    // </Card>
    <div className='right-container'>
        <div className='right-container-title'>Friend Requests</div>
        <div>
            <MicroFbFriendRequestItem />
            <MicroFbFriendRequestItem />
            <MicroFbFriendRequestItem />
        </div>
    </div>
      );

export default RightContainer;

/* eslint-enable */
