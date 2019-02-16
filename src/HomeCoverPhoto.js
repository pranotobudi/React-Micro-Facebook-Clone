/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button } from 'antd';
import './index.css';
import imgSrc from './autumn.jpg'
const HomeCoverPhoto = () => (
    <div className='home-cover-photo'>
        <div className='home-cover-photo-button-wrapper'>
            <div className='home-cover-photo-button-add-cover'>
                <Button type="primary" icon="camera">Add Cover Photo</Button>
            </div>
            <div>
                <a href="http://localhost">
                <img className="home-cover-photo-profpic" src={imgSrc} alt="imgSrc" />
                </a>
            </div>
        </div>
        <div className='home-cover-photo-profile-name'>
        <Link to='/pranoto.budi'>
        Pranoto Budi
        </Link>
        </div>
    </div>

      );

export default HomeCoverPhoto;
/* eslint-enable */
