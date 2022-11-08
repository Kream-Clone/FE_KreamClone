import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import rightArrow from "../../Icon/rightArrow.png";
export default function LeftSide() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const containersRef = useRef(null);
  const boxRef = useRef(null);

  const scrollFixed = () => {
    if (
      scrollY >
      containersRef.current?.offsetHeight - boxRef.current?.offsetHeight
    ) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  return (
    <Fixed ref={containersRef}>
      <Box
        ref={boxRef}
        style={{
          position: scrollActive ? "absolute" : "fixed",
          top: scrollActive ? null : "130px",
          bottom: scrollActive ? "0" : null,
        }}
      >
        <SlideItem>
          <Picture>
            <img
              src="https://kream-phinf.pstatic.net/MjAyMjEwMzFfMTA0/MDAxNjY3MjA2Nzc3Mjk1.hixW_zJkAnQxBBNdIO33K79yI0O1LVzcnZg6EAXKt8Qg.1CPSYppKphdP8bJJ3pRaS0swJr9Z-ToLxla04YnW288g.PNG/a_2103286cbde846c6aaf4858b990a7a01.png?type=l"
              alt=""
            />
          </Picture>
        </SlideItem>
        <Alert>
          <AlertWrap>
            <AlertContent>
              <Title>
                <Mark>주의사항</Mark>
                <span>판매 거래 주의사항</span>
              </Title>
              <Subtext>반드시 보유한 상품만 판매하세요.</Subtext>
            </AlertContent>
            <Arrow src={rightArrow}></Arrow>
          </AlertWrap>
        </Alert>
      </Box>
    </Fixed>
  );
}

const Fixed = styled.div`
  position: relative;
  float: left;
  width: 50%;
  padding-right: 3.334%;
`;
const Box = styled.div`
  border: solid #40ba78 5px;
  width: 380px;
  height: 500px;
`;

const Alert = styled.div`
  padding-top: 20px;
`;
const AlertWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 11px 12px 12px 11px;
  background-color: #fafafa;
  border: 1px solid rgba(34, 34, 34, 0.05);
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
`;
const AlertContent = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
  margin-right: 20px;
`;
const Title = styled.div`
  span {
    overflow: hidden;
    display: block;
    line-height: 15px;
    font-size: 13px;
    letter-spacing: -0.07px;
    font-weight: 600;
  }
`;
const Subtext = styled.div`
  overflow: hidden;
  display: block;
  line-height: 14px;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.5);
`;
const Mark = styled.p`
  float: left;
  display: block;
  line-height: 12px;
  padding: 3px 5px 2px;
  margin-right: 4px;
  border-radius: 2px;
  font-size: 12px;
  letter-spacing: -0.06px;
  font-weight: 600;
  color: #fff;
  background-color: #ff8824;
`;
const Arrow = styled.img`
  line-height: 0;
  margin-left: auto;
  width: 25px;
  height: 21px;
  vertical-align: top;
`;
const SlideItem = styled.div`
  background-color: rgb(235, 240, 245);
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  width: 100%;
`;
const Picture = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
