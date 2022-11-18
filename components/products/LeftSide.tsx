import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import styled from "styled-components";
import rightArrow from "../../Icon/rightArrow.png";

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

export default function LeftSide() {
  const router = useRouter();
  const querys = router.query;

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
  }, [router.isReady]);

  return (
    <Fixed>
      <Box>
        <SlideItem>
          <Picture>
            <Image
              style={{ backgroundImage: `url(${querys.itemProductImage})` }}
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
  float: left;
  width: 50%;
  padding-right: 3.334%;
`;
const Box = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`;

const Alert = styled.div``;
const AlertWrap = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 11px 12px 12px 11px;
  background-color: #fafafa;
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
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
