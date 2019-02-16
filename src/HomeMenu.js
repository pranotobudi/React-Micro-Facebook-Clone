/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button } from 'antd';
import './index.css';
import imgSrc from './autumn.jpg'

const HomeMenu = () => (
    <div className='home-menu'>
        <div className='home-menu-empty'></div>
        <div className='home-menu-filled'>
            <div className="micro-fb-name home-menu-button">Timeline</div>
            <div className="micro-fb-name home-menu-button">About</div>
            <div className="micro-fb-name home-menu-button">
                <Link to='/pranoto.budi/friends'>Friends</Link>
            </div> 
            <div className="micro-fb-name home-menu-button">Photo</div>
            <div className="micro-fb-name home-menu-button">Archive</div>
            <div className="micro-fb-name home-menu-button">More</div>
        </div>
    </div>

      );

export default HomeMenu;
/* eslint-enable */
