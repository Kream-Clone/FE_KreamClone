import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <BannerBottom>
        <BannerLeftBox>
          <BannerInfo>
            <InfoSubtitle>SERVICE GUIDE</InfoSubtitle>
            <InfoTitle>
              KREAM은 처음이지? <br />
              서비스 소개를 확인해보세요.
            </InfoTitle>
            <InfoText>서비스 안내</InfoText>
          </BannerInfo>
        </BannerLeftBox>
        <BannerRightBox>
          <BannerInfo>
            <InfoSubtitle>DOWNLOAD THE APP</InfoSubtitle>
            <InfoTitle>
              KREAM 앱을 설치하여
              <br />
              한정판 스니커즈를 FLEX 하세요!
            </InfoTitle>
            <InfoText>앱 설치하기</InfoText>
          </BannerInfo>
        </BannerRightBox>
      </BannerBottom>

      <FooterContainer>
        <FooterInner>
          <ServiceArea>
            <CustomService>
              <ServiceTitle>고객센터 1588-7813</ServiceTitle>
              <TimeTerm>
                운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) 점심시간 평일
                13:00 - 14:00
              </TimeTerm>
              <ServiceNoti>1:1 문의하기는 앱에서만 가능합니다.</ServiceNoti>
              <ServiceButtonBox>
                <ServiceButton>자주 묻는 질문</ServiceButton>
              </ServiceButtonBox>
            </CustomService>

            <FooterMenu>
              <MenuBox>
                <MenuTitle>이용안내</MenuTitle>
                <MenuList>
                  <MenuItem>검수기준</MenuItem>
                  <MenuItem>이용정책</MenuItem>
                  <MenuItem>패널티 정책</MenuItem>
                  <MenuItem>커뮤니티 가이드라인</MenuItem>
                </MenuList>
              </MenuBox>

              <MenuBox style={{ marginLeft: "80px" }}>
                <MenuTitle>고객지원</MenuTitle>
                <MenuList>
                  <MenuItem>공지사항</MenuItem>
                  <MenuItem>서비스 소개</MenuItem>
                  <MenuItem>쇼룸 안내</MenuItem>
                  <MenuItem>판매자 방문접수</MenuItem>
                </MenuList>
              </MenuBox>
            </FooterMenu>
          </ServiceArea>

          <CopoprationArea>
            <TermList>
              <TermItem>회사소개</TermItem>
              <TermItem>인재채용</TermItem>
              <TermItem>제휴제안</TermItem>
              <TermItem>이용약관</TermItem>
              <TermItem className="privacy">개인정보처리방침</TermItem>
            </TermList>
            <FooterSns>
              <SnsBox>
                <Instar className="sns"></Instar>
                <Facebook className="sns"></Facebook>
                <Chat className="sns"></Chat>
              </SnsBox>
            </FooterSns>
            <InfoList>
              <InfoItem>
                <BusinessTitle>
                  크림 주식회사 · 대표 김창욱
                  <span />
                  사업자등록번호 : 570-88-01618
                  <a href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=5708801618">
                    사업자정보확인
                  </a>
                  <span />
                  통신판매업 : 제 2021-성남분당C-0093호
                  <span />
                  사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원
                  타워1, 8층
                  <span />
                  호스팅 서비스 :네이버 클라우드 ㈜
                </BusinessTitle>
              </InfoItem>
            </InfoList>
          </CopoprationArea>

          <NoticeGuarantee>
            <p className="title">신한은행 채무지급보증 안내</p>
            <p className="description">
              당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증
              계약을 체결하여 안전거래를 보장하고 있습니다.
              <a className="link_guarantee">서비스가입 사실 확인</a>
            </p>
          </NoticeGuarantee>

          <NoticeArea>
            <Notice>
              크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별
              판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
              거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
            </Notice>
            <p className="copyright">© KREAM Corp.</p>
          </NoticeArea>
        </FooterInner>
      </FooterContainer>
    </>
  );
}

const BannerBottom = styled.div`
  height: 200px;
  position: relative;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, Roboto,
    AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕, Segoe UI,
    Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
  cursor: pointer;
`;
const BannerLeftBox = styled.div`
  background-color: #565656;
  width: 100%;
  height: 100%;
  background-image: url(https://kream.co.kr/_nuxt/img/home_banner_bottom1.79549cb.png);
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 350px 200px;
  padding: 36px 32px 0;
  box-sizing: border-box;
`;
const BannerRightBox = styled.div`
  background-color: #3b3a3c;
  width: 100%;
  height: 100%;
  background-image: url(https://kream.co.kr/_nuxt/img/home_banner_bottom2.0077547.png);
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: 350px 200px;
  padding: 36px 32px 0;
  box-sizing: border-box;
`;
const BannerInfo = styled.div`
  max-width: 300px;
  color: ${(props) => props.theme.color.white};
`;
const InfoSubtitle = styled.strong`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bolder;
`;
const InfoTitle = styled.p`
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.16px;
  text-shadow: -1px 0 #565656, 0 1px #565656, 1px 0 #565656, 0 -1px #565656;
  padding-top: 12px;
`;
const InfoText = styled.span`
  margin-top: 16px;
  padding: 0 7px;
  display: inline-block;
  font-size: 12px;
  letter-spacing: -0.06px;
  height: 29px;
  line-height: 27px;
  border-radius: 6px;
  border: 1px solid hsla(0, 0%, 100%, 0.8);
  color: ${(props) => props.theme.color.white};
`;

const FooterContainer = styled.div`
  box-sizing: border-box;
  padding: 50px 40px;
`;
const FooterInner = styled.div``;
const ServiceArea = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-bottom: 56px;
  flex-direction: row-reverse;
  border-bottom: 1px solid #ebebeb;
`;
const FooterMenu = styled.div`
  display: flex;
`;
const MenuBox = styled.div`
  width: 160px;
`;
const MenuTitle = styled.strong`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.color.black};
`;
const MenuList = styled.ul`
  padding-top: 16px;
  display: block;
`;
const MenuItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  color: rgba(34, 34, 34, 0.5);
  font-size: 14px;
  margin: 12px 0 0;
  padding-top: 4px;
  letter-spacing: -0.21px;
`;

const CustomService = styled.div`
  display: flex;
  flex-direction: column;
`;
const ServiceTitle = styled.strong`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
`;
const TimeTerm = styled.dt`
  max-width: 263px;
  margin-right: 4px;
  float: left;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  line-height: 20px;
  padding: 8px 0 0;
`;
const ServiceNoti = styled.p`
  padding-top: 8px;
  font-size: 13px;
  letter-spacing: -0.07px;
`;
const ServiceButtonBox = styled.div`
  padding-top: 17px;
`;
const ServiceButton = styled.a`
  font-weight: 600;
  color: ${(props) => props.theme.color.white};
  background-color: #222;
  font-size: 12px;
  letter-spacing: -0.06px;
  padding: 0 14px;
  height: 34px;
  line-height: 32px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
`;

const CopoprationArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;
const TermList = styled.ul`
  padding-bottom: 16px;
  display: inline-flex;
  .privacy {
    font-weight: 700;
  }
`;
const TermItem = styled.li`
  margin-right: 20px;
  display: block;
  font-size: 14px;
  letter-spacing: -0.21px;
  color: #000;
`;

const FooterSns = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const SnsBox = styled.div`
  font-size: 0;
  align-items: center;
  display: flex;
  .sns {
    margin-left: 20px;
  }
`;
const Instar = styled.div`
  background-image: url(https://cdn-icons-png.flaticon.com/512/1077/1077042.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Facebook = styled.div`
  background-image: url(https://i.pinimg.com/474x/16/b8/22/16b82240a640db6fb6c18297fc1dcfd3.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const Chat = styled.div`
  background-image: url(http://ftp.dailylike.jpg3.kr/hgodo/mm/m_benefit_icon1.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
const InfoList = styled.div``;
const InfoItem = styled.div`
  margin-right: 0;
`;
const BusinessTitle = styled.dt`
  max-width: 653px;
  margin-right: 4px;
  float: left;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  a {
    text-decoration: underline;
    cursor: pointer;
    color: rgba(34, 34, 34, 0.5);
  }
  span {
    margin-right: 17px;
  }
`;

const NoticeGuarantee = styled.div`
  padding: 40px 0 8px;
  font-size: 12px;
  letter-spacing: -0.06px;
  .title {
    font-weight: 700;
  }
  .description,
  .link_guarantee {
    margin-top: 4px;
    color: rgba(34, 34, 34, 0.5);
  }
`;

const NoticeArea = styled.div`
  display: flex;
  -webkit-box-align: end;
  align-items: flex-end;
  line-height: 18px;

  .copyright {
    margin-left: auto;
    flex-shrink: 0;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.3);
  }
`;
const Notice = styled.p`
  max-width: 605px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.4);
`;
