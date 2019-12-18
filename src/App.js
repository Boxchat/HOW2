import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Carousel } from 'antd';
// import { BrowserRouter as Router } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
const { Header, Content, Footer } = Layout;

moment.locale('zh-cn');

const screenHeight = document.body.clientHeight
// const screenWidth = document.body.clientWidth

class HyCarousel extends Component {
  render() {
    return (
      <Carousel className="components-layout-carousel">
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.5}px`,
            }}>1</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.5}px`,
            }}>2</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.5}px`,
            }}>3</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.5}px`,
            }}>4</h3>
        </div>
      </Carousel>
    );
  }
}

class App extends Component {
  // jumpTo(url){
  //   this.props.history.push(url)
  // }
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
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
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <HyCarousel />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Huanying Web ©2019 Created by Mathon</Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
