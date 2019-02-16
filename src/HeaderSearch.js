import React from 'react';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Input } from 'antd';

const Search = Input.Search;

const HeaderSearch = () => (
    <div className="header-search">
        <Search
            placeholder="Search"
            // onSearch={value => console.log(value)}
            style={{ width: 400 }} />
    </div>
      );

export default HeaderSearch;
