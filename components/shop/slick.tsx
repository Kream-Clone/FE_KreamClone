import React, { Component,useState } from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import nextArrow from '../../Icon/nextArrow.svg'

export default function SimpleSlider () {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    beforeChange:(slide, newSlide) => setCurrentSlide(newSlide),
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <Next>
        <img src={nextArrow} alt="" />
      </Next>     
    ),
    prevArrow: (
      <Pre>
        <img src={nextArrow} alt="" />
      </Pre>
    ),
  };

  return(
    <Banner>

    <StyledSlider {...settings}>
      <div>
        <Slide>
          <img src="https://kream-phinf.pstatic.net/MjAyMjExMDFfMjk2/MDAxNjY3Mjk0OTE5NjQ3.3FoHaxr3EWLZ-w5ENVNrhJVmoG6NRvm6GE7FIzT0BEAg.mAe7ZFlRGuLpwEBuySGYTuMZNp46ZMq037sRwHVCDEcg.JPEG/a_f5b3aa069edb426f82725f3369e0157d.jpg" alt="" />
        </Slide>
      </div>
      <div>
        <Slide2>
          <img src="https://kream-phinf.pstatic.net/MjAyMjExMDRfMjIx/MDAxNjY3NTQ5OTE3MTgx.wuk1pu7efIc4FXFeBSP9OuCUhfCSAP2IWxOE88SHKHQg.I_4riZIjE8pOulcsRrFGps_kHcGC1CYWkTrzVUk1RQgg.JPEG/a_e587cdcb71a34ea89d9922aafe4b8e7c.jpg" alt="" />
        </Slide2>
      </div>
      <div>
        <Slide3>
          <img src="https://kream-phinf.pstatic.net/MjAyMjExMDNfMTIx/MDAxNjY3NDYwMDc4OTkz.oKA3d3H-sU6886jAuygpbJVu-m3j5xc5PKIDsQyKQLwg.kmeD8eNRj7h9gqf1swyjd5BBliLao9Tv_NkN1HaWxv0g.JPEG/a_d1ef1a4dfae144d1b44e9f789ffc8227.jpg" alt="" />
        </Slide3>
      </div>
      <div>
        <Slide4>
          <img src="https://kream-phinf.pstatic.net/MjAyMjExMDFfMjY0/MDAxNjY3Mjg3Mzc4NDM1.wK9MXZ3KJEHPAxZOFK7WvSSMhhwi783r7JfM3u0EXJ0g.emWXqItAZnHvrQRGiKS1Fgml9zvjMNMj58_0v8UHtoAg.JPEG/a_18ea092700c4499e93825b7aa9feb655.jpg" alt="" />
        </Slide4>
      </div>
      <div>
        <Slide5>
          <img src="https://kream-phinf.pstatic.net/MjAyMjEwMzFfOTUg/MDAxNjY3MjAxODM4ODI5.s55TJySFHVkRuKbzsSkMWvxSu5svWEOtWu9Ewr3I2QEg.nebxQ_NWKS7WBEC_RsWo8yEvoiHO23wGNmpUd66jnS4g.JPEG/a_eff53730d1fa46beb23f1b8d801db3ec.jpg" alt="" />
        </Slide5>
      </div>
    </StyledSlider>
    <Test>
      <p>
        <span>{currentSlide + 1}</span> / 
        <span> 5</span>
      </p>
    </Test>
  </Banner>
  )
}


const StyledSlider = styled(Slider)`
  height: 100px;
  width: 100%;
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-slide div {
    //슬라이더  컨텐츠
    cursor: pointer;
  }
`
const Banner =styled.div`
padding-top: 0;
position: relative; ` 

const Pre = styled.div`
    z-index: 1;
    position: absolute;
    top: 73px;
    transform: translateY(50%);
    width: 6px;
    height: 9px;
    font-size: 0;
    color: transparent;
    cursor: pointer;
    left: calc(100% - 60px);
    img{
      width:100%;
      transform: rotate(180deg);
    }
`;
const Next = styled.div`
position: absolute;
    top: 73px;
    transform: translateY(50%);
    width: 6px;
    height: 9px;
    font-size: 0;
    color: transparent;
    cursor: pointer;
    right: 14px;
    z-index: 1;
    img{
      width:100%;
    }
`;
const Test =styled.div`
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 4px 15px 5px;
    text-align: center;
    background-color: rgba(34,34,34,.8);
    border-radius: 12px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    p{
      width: 31px;
    font-size: 11px;
    color: hsla(0,0%,100%,.8);
    font-weight: 600;
    display: inline-block;
    }
`
const Slide =styled.div`
    height: 100px;
    background-color: rgb(97, 85, 70);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    img {
      height: 100%;
    vertical-align: top;
    }
`
const Slide2 =styled.div`
    height: 100px;
    background-color: rgb(255, 250, 231);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    img {
      height: 100%;
    vertical-align: top;
    }
`
const Slide3 =styled.div`
    height: 100px;
    background-color:rgb(177, 193, 236);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    img {
      height: 100%;
    vertical-align: top;
    }
`
const Slide4 =styled.div`
    height: 100px;
    background-color: rgb(205, 206, 215);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    img {
      height: 100%;
    vertical-align: top;
    }
`
const Slide5 =styled.div`
    height: 100px;
    background-color: rgb(231, 152, 0);
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    img {
      height: 100%;
    vertical-align: top;
    }
`