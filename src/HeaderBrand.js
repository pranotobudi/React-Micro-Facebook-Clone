/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// import { Row } from 'antd';
import myImage from './fb-640-640-white-bg.png';
// import myImage from './fb-640-640-transparent-bg.png';

// const imageName = require('../images/fb-640-640-white-bg.png');

const HeaderBrand = () => (
    <div className="header-brand">
        <Link to="/">
            <img src={myImage} width="50" height="30" alt="brandLogo" />
        </Link>
    </div>
      );

export default HeaderBrand;
/*eslint-enable*/
