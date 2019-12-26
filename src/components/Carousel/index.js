import React, { Component } from 'react';
import { Carousel } from 'antd';
import './index.css'

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
              height: `${screenHeight * 0.7}px`,
            }}>1</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.7}px`,
            }}>2</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.7}px`,
            }}>3</h3>
        </div>
        <div>
          <h3
            className="carousel-item"
            style={{
              height: `${screenHeight * 0.7}px`,
            }}>4</h3>
        </div>
      </Carousel>
    );
  }
}
export default HyCarousel;