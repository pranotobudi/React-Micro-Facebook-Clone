/*eslint-disable*/
import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Icon, Avatar, Input } from 'antd';

const { TextArea } = Input;
const MicroFbCreatePost = () => (
    <div className='micro-fb-create-post'>
        <div className='micro-fb-create-post-content'>
            <div className='micro-fb-create-post-content-avatar'>
                <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </div>
            <div className='micro-fb-create-post-content-text'>
                <TextArea rows={2}  placeholder="What's on your mind?"/>
            </div>
        </div>
        <div className='micro-fb-create-post-footer'>
            <div className='micro-fb-create-post-footer-photo-video'>
                <div className='micro-fb-inline-block micro-fb-create-post-footer-photo-video-icon'>
                    <Icon type="picture" theme="twoTone" />
                </div>
                <div className='micro-fb-inline-block'>Photo/Video</div>
            </div>
            <div className='micro-fb-create-post-footer-tag-friend'>
                <div className='micro-fb-inline-block micro-fb-create-post-footer-tag-friend-icon'>
                    <Icon type="user" />
                </div>
                <div className='micro-fb-inline-block'>Tag Friends</div>
            </div>
            <div className='micro-fb-create-post-footer-feeling'>
                <div className='micro-fb-inline-block micro-fb-create-post-footer-feeling-icon'>
                    <Icon type="smile" theme="twoTone" />
                </div>
                <div className='micro-fb-inline-block'>Feeling</div>
            </div>
        </div>
    </div>
      );

export default MicroFbCreatePost;
/*eslint-disable*/
