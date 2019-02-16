/* eslint-disable */
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Card, Avatar } from 'antd';
import MicroFbCard from './MicroFbCard';
import MicroFbGroupListItem from './MicroFbGroupListItem';
import MicroFbProfileFullName from './MicroFbProfileFullName';
const LeftContainer = () => (
    // <Card
    //     title="My Groups Shortcuts"
    //     extra={<a href="http://localhost">More</a>}
    //     style={{ width: 250 }}>
    //     <p>Django Python Web Framework</p>
    //     <p>React Developers</p>
    //     <p>Python Wordwide Community</p>
    // </Card>
    <div className='left-container'>
        <div className='left-container-profile'>
            <MicroFbProfileFullName />
        </div>
        <div className='left-container-title'>Group List</div>
        <div className='left-container-group-list'>
            
            <div className='left-container-group-list-item'>
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
                <MicroFbGroupListItem />
            </div>
        </div>
    </div>
    // <MicroFbCard />
      );

export default LeftContainer;
/* eslint-enable */
