import React from 'react';
import { Button } from 'antd';

import imgSrc1 from './autumn.jpg';

const FriendListItem = () => (
    <div className="friend-list-item">
        <div className="friend-list-item-profpic">
            <img src={imgSrc1} width="100px" height="100px" alt="imgSrc" />
        </div>
        <div className="friend-list-item-data">
            <div className="micro-fb-name">Firstname Lastname</div>
            <div className="friend-list-item-data-mutual-friend">101 mutual friends</div>
        </div>
        <div className="friend-list-item-button">
            <Button type="primary" icon="check">Friends</Button>
        </div>
    </div>
);

export default FriendListItem;
