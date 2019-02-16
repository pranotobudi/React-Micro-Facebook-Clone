/*eslint-disable*/
import React from 'react';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css'

const MicroFbPostHeader = () => (
    <div className="micro-fb-post-header">
        <div className="micro-fb-inline-block micro-fb-post-header-avatar">
            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </div>
        <div className="micro-fb-inline-block micro-fb-post-header-text">
            <div className="micro-fb-post-header-name">Firstname Lastname</div>
            <div className="micro-fb-post-header-time">09:54</div>
        </div>
    </div>
      );

export default MicroFbPostHeader;
/*eslint-disable*/
