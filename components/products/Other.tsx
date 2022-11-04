import styled from 'styled-components';

export default function Other () {
  return (
    <OtherItem>
    <h3>
      <span>Stussy</span>
      <span>의 다른상품</span>
      <MoreBtn>
        <BtnText></BtnText>
        <img></img>
      </MoreBtn>
    </h3>
    <OtherProduct>
      <ProductList>
        <ProductItem>
          <ItemInner>
            <ItemImage></ItemImage>
            <ItemInfo>
              <Brand>Stussy</Brand>
              <Name>Stussy 8 Ball Fade Hoodie Black</Name>
              <Price>
                <p>229,000원</p>
                <div>즉시 구매가</div>
              </Price>
            </ItemInfo>
          </ItemInner>
        </ProductItem>
      </ProductList>
    </OtherProduct>
  </OtherItem>
  )
}


const OtherItem =styled.div`
  margin: 0 auto;
    padding-bottom: 40px;
    max-width: 1280px;
    h3{
      margin: 0 40px;
    padding-top: 40px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 100%;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: -.15px;
    border-top: 1px solid #ebebeb;
    span {
      &:first-child{
        flex-shrink: 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
      }
      &:last-child{
        margin-right: 50px;
        flex-shrink: 0;
        font-weight: 400;
      }
    }
    }
`
const MoreBtn =styled.div`
        margin-top: -2px;
    margin-left: auto;
    padding: 3px 0 3px 5px;
    display: inline-flex;
    flex-shrink: 0;
    img {
      border: solid red 1px;
      width: 20px;
    height: 20px;
    }
`
const BtnText =styled.div`
  line-height: 20px;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 400;
    color: rgba(34,34,34,.5);
`
const OtherProduct =styled.div`
  
`
const ProductList = styled.div`
      padding: 0 30px;
`
const ProductItem =styled.div`
  width: 25%;
  margin: 24px 0 20px;
    padding: 0 10px;
`
const ItemInner =styled.div`
      display: block;
    background-color: #fff;
    border-radius: 12px;
`
const ItemImage =styled.div`
  background-color: #f4f4f4;
  overflow: hidden;
    position: relative;
    padding-top: 100%;
    border-radius: 8px;
`
const ItemInfo = styled.div`
  padding-top: 9px;
`
const Brand =styled.p`
      overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 17px;
    line-height: 17px;
    padding-bottom: 2px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #222;
    width: fit-content;
    max-width: 100%;
`
const Name =styled.div`
      line-height: 17px;
    margin-top: 8.5px;
    max-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 14px;
    color: #222;
`
const Price = styled.div`
  padding-top: 7px;
  p {
    display: inline-block;
    vertical-align: top;
    line-height: 17px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -.04px;
    margin-right: 2px;
  }
  div {
    line-height: 13px;
    font-size: 11px;
    color: rgba(34,34,34,.5);
  }
`