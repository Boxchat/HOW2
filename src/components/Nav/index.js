import React, { Component } from 'react';
import { Menu } from 'antd';

import './index.css'


class Nav extends Component {
  render() {
    return (
      <div className="app">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="0">
            <a href="https://hypin.cn">幻影官网</a>
          </Menu.Item>
          <Menu.Item key="1">主页</Menu.Item>
          <Menu.Item key="2">软件介绍</Menu.Item>
          <Menu.Item key="3">技术支持</Menu.Item>
          <Menu.Item key="4">幻影论坛</Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default Nav;