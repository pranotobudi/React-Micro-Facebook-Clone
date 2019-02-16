/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Avatar, Button } from 'antd';
const MicroFbFriendRequestItem = () => (

    <div>
        <div className="micro-fb-inline-block micro-fb-friend-request-item-avatar">
            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
        <div className='micro-fb-inline-block micro-fb-friend-request-item-data-wrapper'>
            <div className="micro-fb-name">Friend Request Name</div>
            <div>
                <div className='micro-fb-inline-block micro-fb-friend-request-item-total-mutual-friend'>
                    4
                </div>
                <div className='micro-fb-inline-block '>
                    Mutual Friends
                </div>
            </div>
            <div>   
                <Button type="primary" icon="user">Confirm Friend</Button>
            </div>
        </div>
    </div>
      );

export default MicroFbFriendRequestItem;

/* eslint-enable */
