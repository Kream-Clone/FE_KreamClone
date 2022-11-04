import React, { Component } from "react";
import Slider from "react-slick";
import styled from 'styled-components';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows :false,
      autoplay:true,
      autoplaySpeed: 2000
    };
    return (
      <Banner>

        <StyledSlider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </StyledSlider>
      </Banner>
    );
  }
}


const StyledSlider = styled(Slider)`
  .slick-slide div {
    height: 100px;
    position: relative;
    outline: none;
  }
`
const Banner =styled.div`
border: solid black 1px;
padding-top: 0;
position: relative; ` 