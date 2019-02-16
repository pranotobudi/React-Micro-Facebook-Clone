/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card, Icon } from 'antd';
import MicroFbCard from './MicroFbCard';

const MicroFbGroupListItem = () => (
        <div className='micro-fb-group-list-item'>
            <div className='micro-fb-inline-block micro-fb-group-list-item-avatar'>
                <Icon type="team" />
                <Icon type="team" />
            </div>
            <div className='micro-fb-inline-block micro-fb-group-list-item-text'>
                Django Python Web Framework
            </div>            
        </div>
      );

export default MicroFbGroupListItem;
/* eslint-enable */
