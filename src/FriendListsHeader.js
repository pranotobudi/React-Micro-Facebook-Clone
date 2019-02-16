import React from 'react';
import { Icon } from 'antd';

const FriendListsHeader = () => (
    <div className="friend-lists-header">
        <div className="friend-lists-header-icon"><Icon type="team" /></div>
        <div className="friend-lists-header-text">Friends</div>
    </div>
);

export default FriendListsHeader;
