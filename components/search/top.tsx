import styled from 'styled-components'
import FilterIcon from '../../Icon/filter_icon.png'
export default function Top () {
  return(
    <SearchTop>
        <TopBox>
          <SearchTitle>
            <h2>SHOP</h2>
          </SearchTitle>
          <QuickFilter>
            <QuickFilterBox>
              <QuickFilterBtn>
                <img src={FilterIcon} alt="" />
              </QuickFilterBtn>  
            </QuickFilterBox>
            <Lux>럭셔리</Lux>
            <Line></Line>
            <Lux>신발</Lux>
            <Clo>의류</Clo>
            <Clo>패션 잡화</Clo>
            <Clo>라이프</Clo>
            <Clo>테크</Clo>
          </QuickFilter>
        </TopBox>
      </SearchTop>
  )
}
const SearchTop = styled.div`
    padding: 8px 40px 0;
    background-color: #fff;
    z-index: 100;
`
const TopBox = styled.div`
    border: solid red 1px;
    margin: 0 auto;
    max-width: 1200px;
`
const SearchTitle =styled.div`
  border: solid red 1px;
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0 10% 24px;
    position: relative;
    h2{
      border: solid red 1px;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 28px;
    font-weight: 600;
    color: #000;
    letter-spacing: -.14px;
    cursor: pointer;
    margin: 0;
    }
`
const QuickFilter = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 16px;
    white-space: nowrap;
`
const QuickFilterBox =styled.div`
      margin-right: 8px;
    display: inline-block;
    vertical-align: top;

`
const QuickFilterBtn =styled.div`
        padding: 10px;
      display: inline-block;
    height: 38px;
    background-color: #f4f4f4;
    border-radius: 12px;
    font-size: 15px;
    letter-spacing: -.15px;
    vertical-align: top;
    img{

      width: 20px;
    height: 20px;
    }
`
const Lux =styled.div`
    border:solid red 1px;
    display: inline-block;
    padding: 10px 12px;
    height: 38px;
    background-color: #f4f4f4;
    border-radius: 12px;
    font-size: 15px;
    letter-spacing: -.15px;
    vertical-align: top;
`
const Clo =styled.div`
  border:solid red 1px;
      display: inline-block;
    padding: 10px 12px;
    height: 38px;
    background-color: #f4f4f4;
    border-radius: 12px;
    font-size: 15px;
    letter-spacing: -.15px;
    vertical-align: top;
    margin-left:8px;
`
const Line = styled.div`
display: inline-block;
    margin: 0 8px;
    width: 1px;
    height: 38px;
    background-color: #ebebeb;
`