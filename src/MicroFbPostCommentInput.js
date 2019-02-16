/*eslint-disable*/
import React from 'react';
import { Input, Icon } from 'antd';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

const MicroFbPostCommentInput = () => (
    <div>
        <Input
        placeholder="Write a comment..."
        suffix={<Icon type="caret-right" />}
        style={{
            borderRadius: '10px', backgroundColor: '#ccc',
          }}
      />
        {/* // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        // value={userName}
        // onChange={this.onChangeUserName}
        // ref={node => this.userNameInput = node} */}
    </div>
      );

export default MicroFbPostCommentInput;
/*eslint-disable*/
