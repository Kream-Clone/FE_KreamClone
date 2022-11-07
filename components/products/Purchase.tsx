import styled from 'styled-components';
import downArrow from '../../Icon/downArrow_icon.png'
import bookmark from '../../Icon/bookmark.png'
import { useRef, useState } from 'react';
import SizeSelectModal from './SizeSelectModal';

export default function Purchase () {

  const modalRef =  useRef<HTMLDivElement>(null);

  const [allSizeModalShow, setAllSizeModalShow] =useState(false)

  const modalOutSideClick = (e:any) => {
    if(modalRef.current === e.target) {
      setAllSizeModalShow(false)
      document.body.style.overflow = "unset"
  }  }

  const closeModal = () => {
    setAllSizeModalShow(false)
    document.body.style.overflow = "unset"
  }

  return (
    <>
    <Top>
      <TopTitle>
        <TitleName>
        Undermycar 
        </TitleName>
        <TitleInfo>
        Undermycar Operation Chromite Kerberos Oversized Varsity Jacket Ox Blood - 22FW 
        </TitleInfo>
        <p>
        언더마이카 오퍼레이션 크로마이트 켈베로스 오버사이즈 바시티 자켓 옥스 블러드 - 22FW
        </p>
      </TopTitle>
      <TopFigure>
        <DetailSize>
          <SizeTitle>
            <span>
              사이즈
            </span>
          </SizeTitle>
          <Size>
            <SizeBtn onClick={()=>{
              setAllSizeModalShow(true);
              document.body.style.overflow = "hidden";}}>
              <span>모든 사이즈</span>
              <img src={downArrow} alt="" />
            </SizeBtn>
          </Size>
        </DetailSize>
        <DetailPrice>
          <PriceTitle>
            <span>최근 거래가</span>
          </PriceTitle>
          <Price>
            <Amount>
              <span>900,000</span>
              <span>원</span>
            </Amount>
            <Increase>
              <div></div>
              <p>50,000원 (+6.7%)</p>
            </Increase>
          </Price>
        </DetailPrice>
      </TopFigure>
      <BtnWrap>
        <BtnBox>
          <BuyBtn>
            <p></p>
            <strong>구매</strong>
            <div>
              <span>
                <em>840,000</em>
                <em>원</em>
              </span>
              <span>즉시 구매가</span>
            </div>
          </BuyBtn>
          <SellBtn>
            <p></p>
              <strong>판매</strong>
              <div>
                <span>
                  <em>840,000</em>
                  <em>원</em>
                </span>
                <span>즉시 판매가</span>
              </div>
          </SellBtn>
        </BtnBox>
        <BtnWish>
            <img src={bookmark} alt="" />
            <WishTitle>관심상품</WishTitle>
            <WishNum>242</WishNum>
        </BtnWish>
      </BtnWrap>
    </Top>
    {allSizeModalShow &&  
    <SizeSelectModal modalRef={modalRef} modalOutSideClick={modalOutSideClick} closeModal={closeModal} />
    }
    </>
  )
}

const Top = styled.div`
  
`
const TopTitle =styled.div`
  position: relative;
p{
  line-height: 17px;
    font-size: 14px;
    letter-spacing: -.15px;
    color: rgba(34,34,34,.5);
}
`
const TitleName = styled.div`
 display: inline-block;
    vertical-align: top;
    line-height: 19px;
    padding-top: 1px;
    margin-bottom: 9px;
    font-size: 18px;
    letter-spacing: -.27px;
    font-weight: 800;
    border-bottom: 2px solid #222;
`
const TitleInfo = styled.div`
      margin-bottom: 4px;
    font-size: 18px;
    letter-spacing: -.09px;
    font-weight: 400;
`

const TopFigure =styled.div`

`
const DetailSize =styled.div`
height: 56px;
  padding-top: 19px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebebeb;
`
const SizeTitle =styled.div`
    float: left;
    span{
      padding-top: 4px;
    display: inline-block;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.8);
    }
`
const Size =styled.div`
  float: right;
`
const SizeBtn = styled.div`
      display: block;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -.21px;
    font-weight: 700;
    span{
      display: inline-block;
    vertical-align: top;
    margin-right: 5px;
    }
    img {
      vertical-align: top;
      width: 24px;
      height: 24px;
      padding: 2px;
    }
`
const DetailPrice =styled.div`
  margin-top: 11px;
  min-height: 44px;
`
const PriceTitle = styled.div`
    float: left;
    span {
      padding-top: 5px;
    display: inline-block;
    font-size: 12px;
    color: rgba(34,34,34,.8);
    }
`


const Price = styled.div`
float: right;
    padding-top: 2px;
    text-align: right;
`
const Amount= styled.div`
font-weight: 700;
    font-size: 0;
    span{
      &:first-child{
        display: inline-block;
    line-height: 26px;
    vertical-align: top;
    font-size: 20px;
    letter-spacing: -.1px;
      }
      &:last-child {
        font-size: 18px;
    letter-spacing: -.27px;
    display: inline-block;
    line-height: 26px;
    vertical-align: top;
      }
    }
`
const Increase =styled.div`
color: #f15746;
position: relative;
    padding-top: 1px;
    padding-left: 17px;
    font-size: 13px;
    div{    
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -6px;
    border: 5px solid transparent;
    border-bottom-color: #f15746;
    }

`
const BtnWrap=styled.div`

`
const BtnBox =styled.div`
      margin-top: 17px;
    display: flex;
    height: 60px;
`
const BuyBtn =styled.div`
background-color: #ef6253;
position: relative;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    p{
      content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 55px;
    width: 1px;
    background-color: rgba(34,34,34,.1);
    }
    strong{
      width: 55px;
    text-align: center;
    font-size: 18px;
    letter-spacing: -.27px;
    }
    div {
      margin-left: 10px;
    line-height: 15px;
      span:first-child {
        display: block;
        em:first-child {
          display: inline-block;
    vertical-align: top;
    font-weight: 700;
    font-style: normal;
    font-size: 15px;
        }
        em:last-child {
          font-size: 14px;
    letter-spacing: -.21px;
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
        }
      }
      span:last-child {
        display: block;
        font-size: 11px;
        font-weight: 600;
        color: hsla(0,0%,100%,.8);
      }
    }
`

const SellBtn = styled.div`
  background-color: #41b979;
  margin-left: 10px;
  position: relative;
  position: relative;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    p{
      content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 55px;
    width: 1px;
    background-color: rgba(34,34,34,.1);
    }
    strong{
      width: 55px;
    text-align: center;
    font-size: 18px;
    letter-spacing: -.27px;
    }
    div {
      margin-left: 10px;
    line-height: 15px;
      span:first-child {
        display: block;
        em:first-child {
          display: inline-block;
    vertical-align: top;
    font-weight: 700;
    font-style: normal;
    font-size: 15px;
        }
        em:last-child {
          font-size: 14px;
    letter-spacing: -.21px;
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
        }
      }
      span:last-child {
        display: block;
        font-size: 11px;
        font-weight: 600;
        color: hsla(0,0%,100%,.8);
      }
    }
`
const BtnWish =styled.div`
    height: 60px;
    line-height: 58px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    color: #333;
    margin-top: 12px;
    img {
      width: 20px;
    height: 20px;
    }

`
const WishTitle =styled.span`
  margin-left: 4px;
  font-size: 15px;
font-weight: 400;
letter-spacing: normal;
`
const WishNum = styled.span`
        margin-left: 4px;
      font-size: 15px;
    font-weight: 600;
    letter-spacing: normal
`