import React, { Component } from 'react';
import './index.css'


class Carousel extends Component {
  render() {
    return (
      <div className="app">
        <div className='features'>
          <div className='features__introduction'>
           <img src={require('../../assets/images/code.png')} alt="介绍图" width="200px" height="200px"/>
           <h1>兼容性强</h1>
           <span>幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。</span>
          </div>
          <div className='features__introduction features__introduction__two'>
            <img src={require('../../assets/images/easy.png')} alt="介绍图" width="200px" height="200px"/>
            <h1>操作简单</h1>
            <span>幻影系列软件上手简单且轻松，软件自带常见问题的解答，之后的破解操作全部由软件自动化运行。这时你只需冲上一杯咖啡，静待结果出现。</span>
          </div>
          <div className='features__introduction features__introduction__three'>
            <img src={require('../../assets/images/safe.png')} alt="介绍图" width="200px" height="200px"/>
            <h1>绿色安全</h1>
            <span>幻影系列软件无任何恶意的强制性广告，我们本着Google提出的《开发者计划政策》开发该系列软件，故无需担心软件会对您的手机造成威胁。软件安全贴心才是硬道理。</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Carousel;