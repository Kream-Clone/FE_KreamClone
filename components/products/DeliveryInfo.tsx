import styled from "styled-components";
import fast from "../../Icon/fastShip_icon.png";
import normal from "../../Icon/normalShip_icon.png";
import store from "../../Icon/storeShip_icon.png";

export default function DeliveryInfo() {
  return (
    <DeliveryWrap>
      <h3>배송 정보</h3>
      <Fast>
        <WayInfo>
          <Icon src={fast} alt="" />
          <Desc>
            <p>
              <Title>빠른배송 </Title>
              <Price>5,000원</Price>
              <InfoDetailBtn></InfoDetailBtn>
            </p>
            <p>
              지금 결제시
              <span>내일 11/5(토) 도착 예정</span>
            </p>
          </Desc>
        </WayInfo>
      </Fast>
      <Normal>
        <WayInfo>
          <Icon src={normal} alt="" />
          <Desc>
            <p>
              <Title>일반배송 </Title>
              <Price>5,000원</Price>
              <InfoDetailBtn></InfoDetailBtn>
            </p>
            <p>
              지금 결제시
              <span>내일 11/5(토) 도착 예정</span>
            </p>
          </Desc>
        </WayInfo>
      </Normal>
      <Storage>
        <WayInfo>
          <Icon src={store} alt="" />
          <Desc>
            <p>
              <Title>빠른배송 </Title>
              <Price>5,000원</Price>
              <InfoDetailBtn></InfoDetailBtn>
            </p>
            <p>
              지금 결제시
              <span>내일 11/5(토) 도착 예정</span>
            </p>
          </Desc>
        </WayInfo>
      </Storage>
    </DeliveryWrap>
  );
}

const DeliveryWrap = styled.div`
  h3 {
    line-height: 17px;
    padding-bottom: 0;
    font-size: 14px;
    letter-spacing: -0.21px;
    font-weight: 400;
    color: rgba(34, 34, 34, 0.8);
    padding: 39px 0 20px;
  }
  div {
    &:first-child {
      padding-top: 12px;
    }
  }
`;
const Fast = styled.div`
  padding: 12px 0 18px 0;
`;
const Normal = styled.div`
  position: relative;
  padding: 18px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 56px;
    right: 0;
    border-top: 1px solid #f0f0f0;
  }
`;
const Storage = styled.div`
  position: relative;
  padding: 19px 0 10px 0;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 56px;
    right: 0;
    border-top: 1px solid #f0f0f0;
  }
`;
const WayInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  -webkit-box-flex: 0;
  flex: none;
  margin-right: 14px;
`;
const Desc = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
  p {
    &:first-child {
      font-size: 14px;
      letter-spacing: -0.21px;
      line-height: 17px;
    }
    &:last-child {
      line-height: 16px;
      margin-top: 3px;
      font-size: 14px;
      color: rgba(34, 34, 34, 0.5);
      span {
        color: #297dcb;
        margin-left: 5px;
      }
    }
  }
`;
const Title = styled.span`
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.21px;
`;
const Price = styled.span`
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  letter-spacing: -0.21px;
  line-height: 17px;
`;
const InfoDetailBtn = styled.img`
  border: solid red 1px;
  width: 16px;
  height: 16px;
  vertical-align: top;
  margin-top: 1px;
  margin-left: 3px;
`;
