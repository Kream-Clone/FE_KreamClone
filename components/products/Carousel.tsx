import styled from "styled-components";
import Slider from "react-slick";

export default function Carousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    nextArrow: <DivPre></DivPre>,
    prevArrow: <Div></Div>,
  };
  return (
    <>
      <StyledSlider {...settings}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </StyledSlider>
    </>
  );
}
const StyledSlider = styled(Slider)`
  height: 100%;
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
  .slick-dots {
    position: absolute;
    bottom: 12px;
    left: 0;
    right: 0;
    text-align: center;
    display: table !important;
    width: 100%;
    padding: 0 16px;
    li {
      margin-left: 8px;
      display: table-cell;
      vertical-align: top;
      button {
        font-size: 0;
        color: transparent;
        vertical-align: top;
        cursor: pointer;
        width: 100%;
        &::before {
          content: "";
          width: 100%;
          display: inline-block;
          height: 2px;
          background-color: rgba(34, 34, 34, 0.1);
        }
      }
    }
  }
  .slick-active {
    display: table-cell;
    vertical-align: top;
    button {
      font-size: 0;
      color: transparent;
      vertical-align: top;
      cursor: pointer;
      width: 100%;
      &::before {
        background-color: #222;
        content: "";
        width: 100%;
        display: inline-block;
        height: 2px;
      }
    }
  }
`;
const Div = styled.div`
  left: 0;
  z-index: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0NCA0NCI+PHBhdGggc3Ryb2tlPSIjRDNEM0QzIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTI3LjUgMzNsLTExLTExIDExLTExIi8+PC9zdmc+)
    no-repeat;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  width: 44px;
  height: 44px;
  font-size: 0;
  color: transparent;
  cursor: pointer;
`;
const DivPre = styled.div`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  width: 44px;
  height: 44px;
  font-size: 0;
  color: transparent;
  cursor: pointer;
  right: 0;
  z-index: 1;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0NCA0NCI+PHBhdGggc3Ryb2tlPSIjRDNEM0QzIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE2LjUgMTFsMTEgMTEtMTEgMTEiLz48L3N2Zz4=)
    no-repeat;
`;
