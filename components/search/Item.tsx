import styled from 'styled-components'
import ExpressIcon from '../../Icon/express_icon.svg'
import Bookmark from '../../Icon/bookmark.png'
import BookmarkRed from '../../Icon/bookmark_red.png'
import Comment from '../../Icon/comment_icon.png'
import { useState } from 'react'
export default function Item () {

  const [checkMark,setCheckMark] = useState(false);

  return (
    <SearchResult>
    <ResultList>
      <ResultItem>
        <ItemInner>
          <Product>
            <img></img>
          </Product>
          <ProductInfo>
            <Title>
              <p>Nike</p>
              <p>Nike Air Force 1 '07 Low White</p>
              <p>나이키 에어포스 1 '07 로우 화이트</p>
            </Title>
            <ExpressBtn>
              <img src={ExpressIcon}></img>
              <span>빠른배송</span>
            </ExpressBtn>
            <Price>
              <Amount> 131,000원 </Amount>
              <Desc>즉시구매가</Desc>
            </Price>
          </ProductInfo>
        </ItemInner>
        <Figure>
          <Wish>
            <img src={checkMark? BookmarkRed : Bookmark } onClick={()=>setCheckMark(!checkMark)} alt="" />
            <span>13.1만</span>
          </Wish>
          <Wish>
            <img src={Comment} alt="" />
            <span>13.1만</span>
          </Wish>
        </Figure>
      </ResultItem>
    </ResultList>
  </SearchResult>
  )
}


const SearchResult =styled.div`

`
const ResultList =styled.div`
    margin: -20px -10px 0;
`

const ResultItem =styled.div`
border: solid red 1px;
    width: 25%;
    position: relative;
    float: left;
    margin: 20px 0;
    padding: 0 10px;
    transition: all .4s ease-in-out;
    &:nth-child(4n+1) {
      clear: left;
    }
`
const ItemInner= styled.div`
      display: block;
`
const Product =styled.div`
    background-color: rgb(235, 240, 245);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    img {
      border:solid red 1px;
      display: flex;
      width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    }
`
const ProductInfo =styled.div`
      padding-top: 9px;
`
const Title =styled.div`
  p{
    &:first-child{
      display: inline-block;
    vertical-align: top;
    line-height: 16px;
    font-size: 14px;
    letter-spacing: -.21px;
    font-weight: 700;
    color: #333;
    text-decoration: underline;
    }
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child{
      line-height: 14px;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
 
    }
  }
`
const ExpressBtn =styled.div`
position: relative;
    display: inline-block;
    vertical-align: top;
    line-height: 11px;
    padding: 4.5px 5.5px 4.5px 17px;
    color: #31b46e;
    background-color: #f2f9f6;
    border-radius: 2px;
    font-size: 11px;
    letter-spacing: -.33px;
    height: 20px;
    img {
    position: absolute;
    left: 3.5px;
    top: 3px;
    width: 11px;
    height: 13px;
    background-size: 11px 13px;
    }
`
const Price = styled.div`
  padding-top: 11px;
`
const Amount = styled.div`
    line-height: 17px;
    font-size: 14px;
    font-weight: 700;
`
const Desc =styled.div`
line-height: 13px;
    font-size: 11px;
    color: rgba(34,34,34,.5);
`
const Figure = styled.div`
    padding-top: 12px;
    margin: 0 -8px;
`
const Wish = styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    vertical-align: top;
    padding: 0 8px;
    height: 20px;
  img {
    width: 20px;
    height: 20px;
  }
  span{
    margin-left: 2px;
    font-size: 13px;
  }
`