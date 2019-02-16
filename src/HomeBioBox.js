/* eslint-disable */
import React from 'react';
import { Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import './index.css';

const HomeBioBox = () => (
    <div className='home-bio-container'>
        <div className="home-bio-container-title">
            <div className='home-bio-container-title-icon'>
                <Icon type="global" />
            </div>
            <div className='home-bio-container-title-text'>
                Intro
            </div>
        </div>
        <div className="home-bio-container-bio">
            <div className='home-bio-container-bio-icon'>
                <Icon type="read" />
            </div>
            <div className='home-bio-container-bio-text'>
                Studied Computer Science at <a>Bandung Institute of Technology</a> 
            </div>
        </div>
        <div className="home-bio-container-bio">
            <div className='home-bio-container-bio-icon'>
                <Icon type="read" />
            </div>
            <div className='home-bio-container-bio-text'>
                Studied at <a>Bandung Institute of Technology</a> 
            </div>
        </div>
        <div className="home-bio-container-bio">
            <div className='home-bio-container-bio-icon'>
                <Icon type="home" />
            </div>
            <div className='home-bio-container-bio-text'>
                Lives in <a>Jakarta</a> 
            </div>
        </div>
        <div className="home-bio-container-bio">
            <div className='home-bio-container-bio-icon'>
                <Icon type="home" />
            </div>
            <div className='home-bio-container-bio-text'>
                From <a>Bandar Lampung</a> 
            </div>
        </div>


    </div>

      );

export default HomeBioBox;
/* eslint-enable */
