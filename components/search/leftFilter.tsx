import styled from 'styled-components'
import Image from 'next/image'
import Icon from '../../Icon/plus_icon.png'

export default function Filter () {
  return (
    <SearchFilter>
    <FilterStatus>
      <span>
        필터
      </span>
    </FilterStatus>
    <FilterList>
      <FilterTitle>
        <TitleBox>
          <span>카테고리</span>
          <span>모든 카테고리</span>
        </TitleBox>
        <IconBox>
          <img  alt="" />
          {/* <Image src={Icon}></Image> */}
        </IconBox>
      </FilterTitle>
      <FilterMenu>
        <ul>
          <li>
            <div>
              <img></img>
              <span>신발</span>
            </div>
          </li>
        </ul>
      </FilterMenu>
    </FilterList>
  </SearchFilter>
  )
}

const SearchFilter = styled.div`
      width: 210px;
    margin-right: 10px;
    padding-right: 10px;
    overflow-x: hidden;
    overflow-y: auto;
`
const FilterStatus = styled.div`
      display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 23px 0 15px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    span {
      font-size: 14px;
    letter-spacing: -.21px;
    font-weight: 700;
    }
`
const FilterList = styled.div`
  border-bottom: 1px solid #ebebeb;
`
const FilterTitle = styled.div`
display: flex;
padding: 16px 0;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
`
const TitleBox =styled.div`
display: flex;
-webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-width: calc(100% - 30px);
    span{
      position: relative;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 600;
    &:last-child {
      margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: -.15px;
    color: rgba(34,34,34,.5);
    }
    }
`
const IconBox =styled.div`
height: 20px;
img {
  border: solid red 1px;
  width: 20px;
    height: 20px;
}
`

const FilterMenu =styled.div`
    padding-bottom: 24px;
    ul
{
  max-height: 315px;
    overflow-y: auto;
    li {
      div {
        display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    font-size: 14px;
    letter-spacing: -.21px;
    img {
      border:solid red 1px;
      margin-right: 8px;
    flex-shrink: 0;
    width: 16px;
    height: 17px;
    }
    span {
      max-width: 160px;
      font-size: 14px;
    letter-spacing: -.21px;
    }
      }
    }
}`