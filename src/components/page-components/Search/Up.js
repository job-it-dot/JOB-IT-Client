import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

class Up extends Component {
  render() {
    return (
      <div style={{ height: '100px', padding: 8 }}>
        <BackTop>
          <div style={style}>UP</div>
        </BackTop>
      </div>
    );
  }
}

export default Up;
