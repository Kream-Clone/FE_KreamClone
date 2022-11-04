import styled from 'styled-components';

export default function LeftSide () {

  return (
 
      <Fixed>
        <Box>
          <Slider></Slider>
          <Alert>
            <AlertWrap>
              <AlertContent>
                <Title>
                  <Mark>주의사항</Mark>
                  <span>판매 거래 주의사항</span>
                </Title>
                <Subtext>반드시 보유한 상품만 판매하세요.</Subtext>
              </AlertContent>
              <Arrow></Arrow>
            </AlertWrap>
          </Alert>
        </Box>
      </Fixed>

  )
}

const Fixed =styled.div`
  float: left;
  width: 50%;
    padding-right: 3.334%;
`
const Box =styled.div`
    width: 515px;
    position: fixed;
    top: 130px;
`
const Slider =styled.div`
border: solid red 1px;
width:515px;
height: 515px;
`
const Alert =styled.div`
padding-top: 20px;

`
const AlertWrap =styled.div`
  display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 11px 12px 12px 11px;
    background-color: #fafafa;
    border: 1px solid rgba(34,34,34,.05);
    border-radius: 10px;
    box-shadow: 0 2px 6px rgb(0 0 0 / 12%);


`
const AlertContent =styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    margin-right: 20px;
`
const Title =styled.div`
span {
  overflow: hidden;
    display: block;
    line-height: 15px;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 600;
}
`
const Subtext =styled.div`
  overflow: hidden;
    display: block;
    line-height: 14px;
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
`
const Mark =styled.p`
float: left;
    display: block;
    line-height: 12px;
    padding: 3px 5px 2px;
    margin-right: 4px;
    border-radius: 2px;
    font-size: 12px;
    letter-spacing: -.06px;
    font-weight: 600;
    color: #fff;
    background-color: #ff8824;
`
const Arrow =styled.div`
border: solid red 3px;
line-height: 0;
    margin-left: auto;
    width: 25px;
    height: 21px;
    vertical-align: top;
`