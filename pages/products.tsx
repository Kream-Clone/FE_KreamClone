
import Confirm from 'components/products/Confirm';
import DeliveryInfo from 'components/products/DeliveryInfo';
import Detail from 'components/products/Detail';
import LeftSide from 'components/products/LeftSide';
import Other from 'components/products/Other';
import ProductInfo from 'components/products/ProductInfo';
import Purchase from 'components/products/Purchase';
import styled from 'styled-components';

export default function products () {
  return (
  <Layer>
    <Content>
        <Bind>
          <LeftSide/>
          <Column>
            <ColumnBox>
              <Purchase/>
              <ProductInfo/>
              <DeliveryInfo/>
              <BannerWrap>
                <Banner>배너넣어야댐</Banner>
              </BannerWrap>
              <Detail/>
              <Confirm/>
            </ColumnBox>
          </Column>
        </Bind>
    </Content>
    <Other/>
  </Layer>
  )

}

const Layer = styled.div`
border: solid red 1px;
`
const Content = styled.div`
   border : solid red 2px;
      overflow: hidden;
    margin: 0 auto;
    padding: 30px 40px 120px;
    max-width: 1280px;
`
const Bind =styled.div`
border: solid black 3px;
display:flex;
`

const Column = styled.div`
position: relative;
    padding-left: 3.334%;
    width: 50%;
` 
const ColumnBox = styled.div`
  border: solid black 2px;
`
const BannerWrap = styled.div`
    position: relative;
    padding-top: 20px;
`
const Banner = styled.div`
  border:solid red 1px;
  height: 80px;
`
const Test =styled.div`
  border: solid green 2px;
`