/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import {Icon} from 'antd'
const MicroFbPostStatistics = () => (
    <div>
        <div className="micro-fb-inline-block micro-fb-post-statistics-left">
            <div className="micro-fb-inline-block"><Icon type="like" /></div>
            <div className="micro-fb-inline-block micro-fb-post-statistics-total-like">45</div>
        </div>
        <div className="micro-fb-inline-block micro-fb-post-statistics-right">
            <div className="micro-fb-inline-block micro-fb-post-statistics-total-comment">15</div>
            <div className="micro-fb-inline-block micro-fb-post-statistics-comment-text">Comments</div>
            <div className="micro-fb-inline-block micro-fb-post-statistics-total-share">5</div>
            <div className="micro-fb-inline-block micro-fb-post-statistics-share-text">Shares</div>
        </div>
    </div>
      );

export default MicroFbPostStatistics;
/*eslint-disable*/
