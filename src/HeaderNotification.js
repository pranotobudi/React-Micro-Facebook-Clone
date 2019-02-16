import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './App.css';

const HeaderNotification = () => (
    <div className="header-notification">
        <Icon type="bell" theme="filled" />
    </div>
      );

export default HeaderNotification;
