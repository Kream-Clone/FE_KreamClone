import styled from "styled-components";
import bookmark from "../../Icon/bookmark.png";

export default function Floating() {
  return (
    <FloatingPrice>
      <InnerBox>
        <ProductArea>
          <ProductThumb></ProductThumb>
          <Info>
            <Name>Nike Air Force 1 '07 Low White</Name>
            <TranslatedName>나이키 에어포스 1 '07 로우 화이트</TranslatedName>
          </Info>
        </ProductArea>
        <BtnArea>
          <BookmarkBtn>
            <BookmarkIcon src={bookmark}></BookmarkIcon>
            <span>555</span>
          </BookmarkBtn>
          <DivisionBtnBox>
            <BuyBtn>
              <Strong>구매</Strong>
              <Price>
                <Amount>
                  <em>250,000</em>
                  <span>원</span>
                </Amount>
                <Desc>즉시구매가</Desc>
              </Price>
            </BuyBtn>
            <SellBtn>
              <Strong>구매</Strong>
              <Price>
                <Amount>
                  <em>250,000</em>
                  <span>원</span>
                </Amount>
                <Desc>즉시구매가</Desc>
              </Price>
            </SellBtn>
          </DivisionBtnBox>
        </BtnArea>
      </InnerBox>
    </FloatingPrice>
  );
}

const FloatingPrice = styled.div`
  display: block;
  top: 98px;
  position: fixed;
  left: 0;
  right: 0;
  padding: 0 40px 20px;
  background-color: #fff;
  box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
  z-index: 1;
`;
const InnerBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-top: 10px;
`;
const ProductArea = styled.div`
  padding-right: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const ProductThumb = styled.div`
  background-color: rgb(235, 240, 245);
  overflow: hidden;
  -webkit-box-flex: 0;
  flex: none;
  margin-right: 12px;
  width: 64px;
  height: 64px;
  border-radius: 12px;
`;
const Info = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
`;
const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 18px;
  font-size: 15px;
`;
const TranslatedName = styled.p`
  line-height: 14px;
  margin-top: 4px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.5);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const BtnArea = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 560px;
  height: 50px;
`;

const BookmarkBtn = styled.div`
  width: 160px;
  -webkit-box-flex: 0;
  flex: none;
  height: inherit;
  line-height: 48px;
  margin-right: 8px;
  border-radius: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid #ebebeb;
  color: #333;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  background-color: #fff;
  span {
    margin-left: 4px;
    font-size: 15px;
    font-weight: 600;
    line-height: 48px;
  }
`;
const BookmarkIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const DivisionBtnBox = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
  width: 100%;
  height: inherit;
  margin-top: 0;
`;
const BuyBtn = styled.div`
  border-radius: 10px;
  background-color: #ef6253;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  height: 100%;
  width: 48%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 44px;
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;
const SellBtn = styled.div`
  height: 100%;
  width: 48%;
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 8px;
  border-radius: 10px;
  background-color: #41b979;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 44px;
    width: 1px;
    background-color: rgba(34, 34, 34, 0.1);
  }
`;
const Strong = styled.strong`
  width: 44px;
  font-size: 15px;
  letter-spacing: -0.15px;
  text-align: center;
  font-weight: bold;
`;
const Price = styled.div`
  margin-left: 10px;
  line-height: 15px;
`;
const Amount = styled.div`
  display: block;
  font-size: 0;
  em {
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
    font-size: 15px;
  }
  span {
    font-size: 14px;
    letter-spacing: -0.21px;
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
  }
`;
const Desc = styled.div`
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 0.8);
`;
