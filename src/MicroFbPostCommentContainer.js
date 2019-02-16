/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import MicroFbPostComment from './MicroFbPostComment'
import MicroFbPostCommentInput from './MicroFbPostCommentInput'

const MicroFbPostCommentContainer = () => (
    <div className="micro-fb-post-comment-container">
        <div><MicroFbPostCommentInput /></div>
        <div>
            <MicroFbPostComment />
        </div>
        <div className='micro-fb-post-comment-container-reply'>
            <MicroFbPostComment />
            <MicroFbPostComment />
        </div>
        <div>
            <MicroFbPostComment />
        </div>
        <div className='micro-fb-post-comment-container-reply'>
            <MicroFbPostComment />
            <MicroFbPostComment />
        </div>
    </div>
      );

export default MicroFbPostCommentContainer;
/*eslint-disable*/
