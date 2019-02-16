
import React from 'react';

import FriendListItem from './FriendListItem';

const FriendLists = () => (
    <div className="friend-list">
        <div className="friend-list-row">
            <div className="friend-list-row-left-col">
                <FriendListItem />
            </div>
            <div className="friend-list-row-right-col">
                <FriendListItem />
            </div>
        </div>
        <div className="friend-list-row">
            <div className="friend-list-row-left-col">
                <FriendListItem />
            </div>
            <div className="friend-list-row-right-col">
                <FriendListItem />
            </div>
        </div>
        <div className="friend-list-row">
            <div className="friend-list-row-left-col">
                <FriendListItem />
            </div>
            <div className="friend-list-row-right-col">
                <FriendListItem />
            </div>
        </div>
    </div>
);

export default FriendLists;
