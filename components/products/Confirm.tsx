import { useState } from 'react';
import styled from 'styled-components';
import cir from '../../Icon/3x.svg'
import box from '../../Icon/box.svg'
import ov from '../../Icon/ov.svg'
import simpleDownArrow from '../../Icon/simpleDownArrow.png'

export default function Confirm () {
  const [shippingInfo,setShippingInfo] = useState(false)
  const [confirmInfo,setConfirmInfo] = useState(false)
  const [returnInfo,setReturnInfo] = useState(false)

  return (
  <>
    <ConfirmWrap>
    <h3>구매 전 꼭 확인해주세요!</h3>
    <ConfirmContent>
      <DropdownList>
        <li>
          <Dropdown>
            <DropdownHead onClick={()=>setShippingInfo(!shippingInfo)}>
              <p>배송 기간 안내</p>
              <img src={simpleDownArrow} alt="" />
            </DropdownHead>
            <DropdownContent style={{display: shippingInfo ? 'block' : 'none' }}>
              <ContentBox>
                <EmphasisBox>
                  <strong>KREAM은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.</strong>
                </EmphasisBox>
                <ContentList>
                  <ListTitle>
                    <p>빠른배송 구매</p>
                  </ListTitle>
                  <ListText>
                    <p> - 판매자가 보관 신청한 상품 중 검수에 합격한 상품을 KREAM의 전용 창고에 보관합니다. 보관 상품에 한하여 바로 구매와 95점 구매가 가능합니다. </p>
                  </ListText>
                  <ListText>
                    <p> - 오늘(오후 11:59까지) 결제하면 내일 바로 출고되어 빠른 배송이 가능합니다. (연휴 및 공휴일, 천재지변, 택배사 사유 등 예외적으로 출고일이 변경될 수 있습니다. </p>
                  </ListText>
                  <ListTitle>
                    <p>일반 구매</p>
                  </ListTitle>
                  <ListText>
                    <p> - 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 KREAM 검수센터에 도착합니다. </p>
                  </ListText>
                  <ListText>
                    <p> - 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다. <br/> * 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.</p>
                  </ListText>
                  <ListText>
                    <p> - 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다. </p>
                  </ListText>
                </ContentList>
              </ContentBox>
            </DropdownContent>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <DropdownHead onClick={()=>setConfirmInfo(!confirmInfo)}>
              <p>검수 안내</p>
              <img src={simpleDownArrow} alt="" />
            </DropdownHead>
            <DropdownContent style={{display: confirmInfo ? 'block' : 'none' }}>
              <ContentBox>
                <EmphasisBox>
                  <strong>판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.</strong>
                </EmphasisBox>
                <ContentList>
                  <ListText>
                    <p> - 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다. </p>
                  </ListText>
                  <ListText>
                    <p> - 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다. </p>
                  </ListText>
                </ContentList>
                <EmphasisBox style={{ marginTop:'20px'}}>
                  <strong>검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.</strong>
                </EmphasisBox>
                <ContentList>
                  <ListText>
                    <p> * 검수 합격: KREAM 검수택(Tag)이 부착되어 배송을 준비함
                      <br/> * 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)
                      <br/> * 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)
                    </p>
                  </ListText>
                </ContentList>
              </ContentBox>
            </DropdownContent>
          </Dropdown>
        </li>
        <li>
          <Dropdown>
            <DropdownHead onClick={()=>setReturnInfo(!returnInfo)}>
              <p>구매 환불/취소/교환 안내</p>
              <img src={simpleDownArrow} alt="" />
            </DropdownHead>
            <DropdownContent style={{display: returnInfo ? 'block' : 'none' }}>
              <ContentBox>
                <EmphasisBox>
                  <strong>KREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.</strong>
                </EmphasisBox>
                <ContentList>
                  <ListText>
                    <p> - 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 KREAM에서 재판매를 하실 수 있습니다.</p>
                  </ListText>
                  <ListText>
                    <p> - 상품 수령 후, 이상이 있는 경우 KREAM 고객센터로 문의해주시기 바랍니다. </p>
                  </ListText>
                </ContentList>
              </ContentBox>
            </DropdownContent>
          </Dropdown>
        </li>
      </DropdownList>
    </ConfirmContent>
    
    </ConfirmWrap>
    <PointGuide>
      <ul>
        <li>
          <Thumb>
            <img src={cir} alt="" />
          </Thumb>
          <Text>
            <strong>100% 정품 보증</strong>
            <p>KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.</p>
          </Text>
        </li>
        <li>
          <Thumb>
            <img src={ov} alt="" />
          </Thumb>
          <Text>
            <strong>엄격한 다중 검수</strong>
            <p>모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</p>
          </Text>
        </li>
        <li>
          <Thumb>
            <img src={box} alt="" />
          </Thumb>
          <Text>
            <strong>정품 인증 패키지</strong>
            <p>검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</p>
          </Text>
        </li>
      </ul>
    </PointGuide>
    <Notice> 크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다. </Notice>
  </>

  )
}


const ConfirmWrap = styled.div`
      padding-top: 39px;
      h3 {
        line-height: 22px;
        padding-bottom: 12px;
        font-size: 18px;
        letter-spacing: -.27px;
      }
`
const ConfirmContent =styled.div`
  border-top: 1px solid #ebebeb;
`
const DropdownList=styled.ul`
`
const Dropdown =styled.div`
`
const DropdownHead =styled.div`
      padding: 18px 0 17px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
    p{
      max-width: 320px;
      font-size: 15px;
      letter-spacing: -.15px;
    }
    img{
      margin-left: auto;
    flex-shrink: 0;
    width: 24px;
    height: 24px;
    }
`
const DropdownContent =styled.div`
      display: block;
      padding: 20px 0;
    border-bottom: 1px solid #ebebeb;
`
const ContentBox =styled.div`
  font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.8);
`
const EmphasisBox =styled.div`
  strong {
    font-weight: bold;
  }
`
const ContentList = styled.ul`
`
const ListTitle=styled.li`
  p{
    margin-top: 20px;
  }
`
const ListText =styled.li`
  p{
    margin-top: 10px;
  }
`
const PointGuide =styled.div`
  padding-top: 40px;
  ul {
    li{
      &:first-child{
        margin : 0;
      }
      overflow: hidden;
      margin-top: 20px;
    }
  }
`

const Thumb =styled.div`
  float: left;
    width: 40px;
    margin-right: 14px;
    img{
      width: 100%;
      vertical-align: top;
    }
`
const Text = styled.div`
  overflow: hidden;
  strong{
    display: block;
    line-height: 16px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: normal;
  }
  p {
    margin-top: 1px;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: normal;
    color: rgba(34,34,34,.5);
  }
`
const Notice = styled.p`
    padding-top: 40px;
    margin-top: 20px;
    line-height: 16px;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    letter-spacing: -.05px;
    color: rgba(34,34,34,.5);
`