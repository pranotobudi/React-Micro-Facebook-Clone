/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card, Avatar } from 'antd';
import MicroFbCard from './MicroFbCard';

const MicroFbGroupListItem = () => (
        <div className='micro-fb-group-list-item'>
            <div className='micro-fb-inline-block micro-fb-group-list-item-avatar'>
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </div>
            <div className='micro-fb-inline-block micro-fb-group-list-item-text'>
            <Link to='/pranoto.budi'>
                Pranoto Budi
            </Link>
            </div>
        </div>
      );

export default MicroFbGroupListItem;
/* eslint-enable */
