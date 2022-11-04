import styled from 'styled-components'

export default function SearchTrend () {
  return (
    <SearchTrendContainer>
        <BrandList>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
          <BrandItem>
            <BrandBox>
              <img src="" alt="" />
              <p>패딩</p>
            </BrandBox>
          </BrandItem>
        </BrandList>
      </SearchTrendContainer> 
  )
}
const SearchTrendContainer = styled.div`
      max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
`
const BrandList = styled.ul`
  display: flex;
    overflow-x: auto;
    padding: 0 0 16px;
`
const BrandItem = styled.li`
    display: inline-block;
    vertical-align: top;
    border-radius: 8px;
    background-color: transparent!important;
    margin-left: 40px;
    &:first-child {
      margin-left:0;
    }
`
const BrandBox = styled.div`
      width: 84px;
    height: 82px;
    text-align: center;
    cursor: pointer;
    img{
      border: solid red 1px;
      width: 70px;
    height: 70px;
    }
    p{
      margin-top: -2px;
    font-size: 13px;
    font-weight: 600;
    }
`
