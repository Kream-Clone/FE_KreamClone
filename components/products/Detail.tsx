import styled from "styled-components";

export default function Detail() {
  return (
    <DetailWrap>
      <ProductSalePrice>
        <Title>
          <h3>시세</h3>
          <Filter>
            <Unit>
              <SelectBtn>
                <span>모든사이즈</span>
              </SelectBtn>
            </Unit>
          </Filter>
        </Title>
        <WrapSale>
          <TabList>
            <Tab>
              <p>1개월</p>
            </Tab>
            <Tab>
              <p>3개월</p>
            </Tab>
            <Tab>
              <p>6개월</p>
            </Tab>
            <Tab>
              <p>1년</p>
            </Tab>
            <Tab>
              <p>전체</p>
            </Tab>
          </TabList>
          <Graph></Graph>
        </WrapSale>
        <WrapChart>
          <TabList>
            <Tab>
              <p>체결 거래</p>
            </Tab>
            <Tab>
              <p>판매 입찰</p>
            </Tab>
            <Tab>
              <p>구매 입찰</p>
            </Tab>
          </TabList>
          <TabContent>
            <TableWrap>
              <Table>
                <TableTitle>
                  <p>사이즈</p>
                  <p>거래가</p>
                  <p>거래일</p>
                </TableTitle>
                <List>
                  <ListItem>
                    <p>280</p>
                    <p>140,000원</p>
                    <p>22/11/04</p>
                  </ListItem>
                </List>
              </Table>
            </TableWrap>
            <MoreBtn>채결 내역 더보기</MoreBtn>
          </TabContent>
        </WrapChart>
      </ProductSalePrice>
    </DetailWrap>
  );
}
const DetailWrap = styled.div``;
const ProductSalePrice = styled.div`
  position: relative;
`;
const Title = styled.div`
  display: flex;
  h3 {
    line-height: 22px;
    padding: 39px 0 20px;
    font-size: 18px;
    letter-spacing: -0.15px;
  }
`;
const Filter = styled.div`
  position: relative;
  margin-left: auto;
  padding: 40px 0 20px;
  font-size: 0;
`;
const Unit = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
`;
const SelectBtn = styled.button`
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.8);
  span {
    position: relative;
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    &::after {
      content: "";
      display: inline-block;
      vertical-align: top;
      width: 24px;
      height: 24px;
      background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTE4IDlsLTYgNi02LTYiLz48L3N2Zz4=)
        0 0 no-repeat;
      background-size: 24px 24px;
    }
  }
`;
const WrapSale = styled.div`
  position: relative;
`;
const TabList = styled.ul`
  display: flex;
  border-radius: 10px;
  background-color: #f4f4f4;
`;

const Tab = styled.li`
  -webkit-box-flex: 1;
  flex: 1;
  margin: 2px;
  p {
    display: block;
    line-height: 16px;
    padding: 7px 0 9px;
    font-size: 13px;
    letter-spacing: -0.05px;
    text-align: center;
    border-radius: 8px;
    background-color: #f4f4f4;
    color: rgba(34, 34, 34, 0.8);
  }
`;
const Graph = styled.div`
  height: 200px;
`;
const WrapChart = styled.div`
  position: relative;
`;
const TabContent = styled.div`
  display: block;
  height: auto;
  overflow: hidden;
`;
const TableWrap = styled.div`
  padding: 21px 0 20px;
`;
const Table = styled.div`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border: 0;
  border-collapse: collapse;
  color: #222;
`;
const TableTitle = styled.div`
  display: flex;
  p {
    flex: 1;
    line-height: 14px;
    padding-bottom: 9px;
    border-bottom: 1px solid #ebebeb;
    font-size: 12px;
    letter-spacing: -0.06px;
    color: rgba(34, 34, 34, 0.5);
    font-weight: 400;
    text-align: right;
    &:first-child {
      text-align: left;
    }
  }
`;
const List = styled.div``;
const ListItem = styled.div`
  display: flex;
  p {
    &:first-child {
      text-align: left;
    }
    flex: 1;
    line-height: 17px;
    padding-top: 9px;
    font-size: 14px;
    text-align: right;
  }
`;
const MoreBtn = styled.div`
  font-weight: 400;
  color: rgba(34, 34, 34, 0.8);
  padding: 0 18px;
  height: 42px;
  line-height: 40px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.14px;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  background-color: #fff;
`;
