/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';
import imgSrc1 from './fb-640-640-transparent-bg.png'
import imgSrc2 from './autumn.jpg'
import imgSrc3 from './farm.jpeg'

const HomeFriendBox = () => (
    <div className='home-bio-container'>
        <div className="home-bio-container-title">
            <div className='home-bio-container-title-icon'>
                <Icon type="team" />
            </div>
            <div className='home-bio-container-title-text'>
                <Link to='/pranoto.budi/friends'>Friends</Link>
            </div>
            <div className='home-friend-box-total-friend'>
                1,170
            </div>
        </div>
        <div className='home-friend-box-image-wrapper'>
            <div className="home-friend-box-image-item">
                <img src={imgSrc1} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc2} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc3} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc3} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc1} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc2} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc1} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc2} width='85px' height='85px' alt='friend-img' />
            </div>
            <div className="home-friend-box-image-item">
                <img src={imgSrc3} width='85px' height='85px' alt='friend-img' />
            </div>
        </div>


    </div>

      );

export default HomeFriendBox;
/* eslint-enable */
