import React, { Component } from 'react';
import './index.css'


class Carousel extends Component {
  render() {
    return (
      <div className="app">
        <div className='features'>
          <div className='features__introduction'>
           <img src={require('../../assets/images/code.png')} alt="介绍图" />
          </div>
          <div className='features__introduction features__introduction__two'>2</div>
          <div className='features__introduction features__introduction__three'>3</div>
        </div>
      </div>
    );
  }
}
export default Carousel;