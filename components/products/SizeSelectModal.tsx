import styled from 'styled-components';

interface propsType  {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick:(e:any) => void;
  closeModal:() => void;
}

export default function SizeSelectModal ({modalRef, modalOutSideClick,closeModal}:propsType) {
  return (
    <AllSizeModal ref={modalRef} onClick={(e)=>modalOutSideClick(e)}>
    <LayerContainer>
      <LayerHeader>
        <Title>
          <span>사이즈</span>
        </Title>
      </LayerHeader>
      <LayerContent>
        <SelectArea>
          <SelectList>
            <SelectItem>
              <SelectLink>
                <LinkInner>
                  <InnerSize>모든사이즈</InnerSize>
                  <InnerPrice>245,000</InnerPrice>
                </LinkInner>
              </SelectLink>
            </SelectItem>
          </SelectList>
        </SelectArea>
      </LayerContent>
      <CloseBtn onClick={()=>closeModal()}>
        <img src="" alt="" />
      </CloseBtn>
    </LayerContainer>
  </AllSizeModal>
  )
}


const AllSizeModal = styled.div`
      position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(34,34,34,.5);
    z-index: 1010;
`
const LayerContainer = styled.div`
      display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    width: 480px;
    height: 514px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
`
const LayerHeader =styled.div`
  -webkit-box-flex: 0;
    flex: none;
`
const LayerContent =styled.div`
  position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 32px;
    overflow-x: hidden;
    overflow-y: auto;
`
const CloseBtn =styled.div`
      position: absolute;
    top: 18px;
    right: 20px;
    cursor: pointer;
    img{
      border: solid red 1px;
      width: 24px;
    height: 24px;
    }
`
const Title =styled.h2`
      line-height: 22px;
    padding: 18px 50px 20px;
    min-height: 60px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -.15px;
    color: #000;
    text-align: center;
    background-color: #fff;
`
const SelectArea = styled.div`
position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 32px;
    min-height: 488px;

`
const SelectList =styled.ul`
      line-height: 0;
    margin: -4px;
    font-size: 0;
`
const SelectItem =styled.li`
      overflow: hidden;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    width: calc(33.33333% - 8px);
    border: 1px solid #d3d3d3;
    height: 52px;
    border-radius: 10px;
    background-color: #fff;
    box-sizing: border-box;
`
const SelectLink =styled.div`
      width: 100%;
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
`
const LinkInner =styled.div`
      margin: 0 auto;
      width:100%;
`
const InnerSize =styled.span`
  display: block;
    line-height: 17px;
    margin-top: -3px;
    font-size: 14px;
`
const InnerPrice =styled.div`
      color: #f15746;
      display: block;
    line-height: 14px;
    margin-top: 1px;
    font-size: 12px;
`

