import React, { Component } from 'react';
import './index.css'


class Carousel extends Component {
  render() {
    return (
      <div className="app">
        <div className='features'>
          <div className='features__introduction'>
           <img src={require('../../assets/images/code.png')} alt="介绍图" />
           <h1>兼容性强</h1>
           <span>幻影系列软件在多次版本更新迭代和改良后，保证了大部分机型可以正常使用，并且突破网卡限制，省去再花费一份网卡的钱。</span>
          </div>
          <div className='features__introduction features__introduction__two'>
            <img src={require('../../assets/images/easy.png')} alt="介绍图" />
          </div>
          <div className='features__introduction features__introduction__three'>3</div>
        </div>
      </div>
    );
  }
}
export default Carousel;