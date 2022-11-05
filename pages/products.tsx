
import Confirm from 'components/products/Confirm';
import DeliveryInfo from 'components/products/DeliveryInfo';
import Detail from 'components/products/Detail';
import Floating from 'components/products/Floating';
import LeftSide from 'components/products/LeftSide';
import Other from 'components/products/Other';
import ProductInfo from 'components/products/ProductInfo';
import Purchase from 'components/products/Purchase';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function products () {


  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollFixed = () => {
    if (scrollY > 380) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });

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
                <Banner>
                  <img src="https://kream-phinf.pstatic.net/MjAyMjEwMjBfMjA5/MDAxNjY2MjU0Mjg1ODIz.LKarZwdDkvAwrNhfCDbZpoUkQGMtMxA9Tjw74siMzIgg.MhtRTf8nzthOBfwROA_rgyXM22gghqZD-TXpG2RGf6og.JPEG/a_18fddeaeffa04fb6963fb6e50041055c.jpg" alt="" />
                </Banner>
              </BannerWrap>
              <Detail/>
              {scrollActive && <Floating />}
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
border-left: 1px solid #ebebeb;
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
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
  background-color: rgb(0, 0, 0);
  img{
    height: 100%;
    vertical-align: top;
  }
`
