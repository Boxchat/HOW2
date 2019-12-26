import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout } from 'antd';
// import { BrowserRouter as Router } from "react-router-dom";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
// import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';
import './App.css';
import busComonents from './components'
const { Header, Content, Footer } = Layout;
const { HyFeatures, HyContact, HyCarousel, HyNav } = busComonents

moment.locale('zh-cn');

class App extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <HyNav />
        </Header>
        <Content className="Content">
          <HyCarousel />
          <HyFeatures />
          <HyContact />
        </Content>
        <Footer className="Footer">
          Huanying Web ©2019 Created by Mathon Saoshouzi
        </Footer>
      </Layout>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
