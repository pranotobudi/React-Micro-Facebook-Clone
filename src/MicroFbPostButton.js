/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Icon } from 'antd'
const MicroFbPostButton = () => (
    <div className="micro-fb-post-button">
        <div className="micro-fb-inline-block micro-fb-post-button-left">
            <div className="micro-fb-inline-block"><Icon type="like" /></div>
            <div className="micro-fb-inline-block">Like</div>
        </div>
        <div className="micro-fb-inline-block micro-fb-post-button-middle">
            <div className="micro-fb-inline-block"><Icon type="message" /></div>
            <div className="micro-fb-inline-block">Comment</div>
        </div>
        <div className="micro-fb-inline-block micro-fb-post-button-right">
            <div className="micro-fb-inline-block"><Icon type="share-alt" /></div>
            <div className="micro-fb-inline-block">Share</div>
        </div>
    </div>
      );

export default MicroFbPostButton;
/*eslint-disable*/
