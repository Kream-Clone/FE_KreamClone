import { useState } from 'react'
import styled from 'styled-components'
import CheckIcon from '../../Icon/check_icon.png'
import SortIcon from '../../Icon/sort_icon.svg'

export default function Sort () {

  const [sortList, setSortList] = useState(false)



return (
  <SearchOption>
  <FilterBtn>
    <ExpressBtn>
      <Btn>
        <img></img>
        <span>빠른배송</span>
      </Btn>
    </ExpressBtn>
    <BrandBtm>
      <Btn>
        <span>브랜드배송</span>
      </Btn>
    </BrandBtm>
  </FilterBtn>
  <Sorting>
    <SortingTitle onClick={()=>setSortList(!sortList)}>
      <span>인기순</span>
      <img src={SortIcon}></img>
    </SortingTitle>
    {sortList &&  
    <SortingList>
      <li>
        <Desc>
          <p>즉시 구매가순</p>
          <p>많이 판매된 순서대로 정렬합니다.</p>
        </Desc>
        <Check src={CheckIcon}></Check>
      </li>
      <li>
        <Desc>
          <p>프리미엄순</p>
          <p>발매가 대비 가격이 높은 순서대로 정렬합니다.</p>
        </Desc>
        <Check src={CheckIcon}></Check>
      </li>
      <li>
        <Desc>
          <p>즉시 구매가순</p>
          <p>즉시 구매가가 낮은 순서대로 정렬합니다.</p>
        </Desc>
        <Check src={CheckIcon}></Check>
      </li>
      <li>
        <Desc>
          <p>즉시 판매가순</p>
          <p>즉시 판매가가 높은 순서대로 정렬합니다.</p>
        </Desc>
        <Check src={CheckIcon}></Check>
      </li>
      <li>
        <Desc>
          <p>발매일순</p>
          <p>최신 상품 순서대로 정렬합니다. 아직 발매 전인 상품이 노출될 수 있습니다.</p>
        </Desc>
        <Check src={CheckIcon}></Check>
      </li>
    </SortingList>}
   
  </Sorting>
</SearchOption>
)
}

const SearchOption =styled.div`
border : solid red 3px;
display: flex;
justify-content:space-between;
align-items: center;
height:68px;
`
const FilterBtn =styled.div`
display: flex;
`
const ExpressBtn = styled.div`
      margin-top: 1px;
`
const Btn =styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    padding: 0 9px;
    border: 1px solid #ebebeb;
    border-radius: 17px;
    img {
      border: solid red 1px;
      width: 10px;
    height: 12px;
    margin-top: 2px;
    }
    span {
      line-height: 20px;
    margin-left: 3px;
    font-size: 13px;
    }
`
const BrandBtm =styled.div`
      margin-left: 6px;
      margin-top: 1px;
`
const Sorting =styled.div`
  position: relative;
`
const SortingTitle =styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: -.21px;
    font-weight: 600;
    img {
      border: solid red 1px;
      margin-left: 2px;
      display: inline-flex;
    width: 24px;
    height: 24px;

    }
`
const SortingList = styled.ul`
    overflow: hidden;
    position: absolute;
    top: 28px;
    right: 0;
    width: 278px;
    background-color: #fff;
    border: 1px solid #ebebeb;
    -webkit-box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    z-index: 10;
    li {
      position: relative;
    display: block;
    padding: 12px 36px 12px 16px;
    }
`

const Desc =styled.div`
  p{
    color: #222;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -.21px;
    &:last-child{
      padding-top: 4px;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
    }
  }
`
const Check =styled.img`
border: solid red 1px;
  position: absolute;
    top: 50%;
    right: 12px;
    margin-top: -12px;
    width: 24px;
    height: 24px;
`