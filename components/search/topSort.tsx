import styled from 'styled-components'

export default function Sort () {

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
    <SortingTitle>
      <span>인기순</span>
      <img></img>
    </SortingTitle>
    {/* hidden */}
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