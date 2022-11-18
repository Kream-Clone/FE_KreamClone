import styled from "styled-components";

export default function ProductInfo() {
  return (
    <Info>
      <h3>상품정보</h3>
      <InfoDetail>
        <DetailProduct>
          <ModelNum>
            <div>모델번호</div>
            <p>315122-111/CW2288-111</p>
          </ModelNum>
          <ModelDate>
            <div>출시일</div>
            <p>-</p>
          </ModelDate>
          <ModelColor>
            <div>컬러</div>
            <p> WHITE/WHITE </p>
          </ModelColor>
          <ModelPrice>
            <div> 발매가 </div>
            <p> 129,000원 </p>
          </ModelPrice>
        </DetailProduct>
      </InfoDetail>
    </Info>
  );
}

const Info = styled.div`
  h3 {
    padding-bottom: 13px;
    line-height: 22px;
    padding: 39px 0 20px;
    font-size: 18px;
  }
`;
const InfoDetail = styled.div`
  border-width: 1px 0;
`;
const DetailProduct = styled.div`
  display: flex;
  min-height: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ModelNum = styled.div`
  padding-left: 0;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0 12px 0 0;
  div {
    line-height: 14px;
    font-size: 12px;
    letter-spacing: -0.33px;
    color: rgba(34, 34, 34, 0.5);
  }
  p {
    font-weight: 600;
    margin-top: 4px;
    word-break: break-word;
    line-height: 17px;
    font-size: 14px;
  }
`;
const ModelDate = styled.div`
  border-left: 1px solid #ebebeb;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0 12px;
  div {
    line-height: 14px;
    font-size: 12px;
    letter-spacing: -0.33px;
    color: rgba(34, 34, 34, 0.5);
  }
  p {
    margin-top: 4px;
    word-break: break-word;
    line-height: 17px;
    font-size: 14px;
  }
`;
const ModelColor = styled.div`
  border-left: 1px solid #ebebeb;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0 12px;
  div {
    line-height: 14px;
    font-size: 12px;
    letter-spacing: -0.33px;
    color: rgba(34, 34, 34, 0.5);
  }
  p {
    margin-top: 4px;
    word-break: break-word;
    line-height: 17px;
    font-size: 14px;
  }
`;
const ModelPrice = styled.div`
  border-left: 1px solid #ebebeb;
  padding-right: 0;
  -webkit-box-flex: 1;
  flex: 1;
  padding: 0 12px;
  div {
    line-height: 14px;
    font-size: 12px;
    letter-spacing: -0.33px;
    color: rgba(34, 34, 34, 0.5);
  }
  p {
    margin-top: 4px;
    word-break: break-word;
    line-height: 17px;
    font-size: 14px;
  }
`;
