import styled, { keyframes } from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuBar, setMenuBar] = useState(false);
  const [style, setStyle] = useState(true);

  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollFixed = () => {
    if (scrollY > 1) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  const onClickMenu = () => {
    setMenuBar(!menuBar);
  };

  const onClickClose = () => {
    setStyle(false);
  };

  return (
    <>
      <HeaderContainer>
        {style && (
          <DownloadBanner>
            <BannerBox>
              <Thumb>
                <ThumbImg />
              </Thumb>
            </BannerBox>
            <BannerInfo>
              <p>
                한정판 거래 플랫폼, KREAM
                <br />앱 설치 후 사용해보세요 &nbsp;
                <AppDown>앱 다운로드</AppDown>
              </p>
            </BannerInfo>
            <BtnClose>
              <Close onClick={onClickClose} />
            </BtnClose>
          </DownloadBanner>
        )}

        <HeaderTop>
          <TopInner>
            <TopList>고객센터</TopList>
          </TopInner>
          <TopInner>
            <TopList>관심상품</TopList>
          </TopInner>
          <TopInner>
            <TopList>마이페이지</TopList>
          </TopInner>
          <TopInner>
            <Link href="/login">
              <TopList>로그인</TopList>
            </Link>
          </TopInner>
        </HeaderTop>

        {scrollActive ? (
          <HeaderMain style={{ borderBottom: "2px solid #eee" }}>
            <MainInner>
              <MainLogo>
                <Link href="/">
                  <Logo />
                </Link>
              </MainLogo>
            </MainInner>
            <MainTitleContainer>
              <MainNav>
                <MainUl>
                  <MainList>STYLE</MainList>
                  <Link href="/products">
                    <MainList>SHOP</MainList>
                  </Link>
                  <MainList>ABOUT</MainList>
                </MainUl>
              </MainNav>
              <SearchButtonBox>
                <Link href="/shop">
                  <SearchIcon />
                </Link>
                <HambergerIcon onClick={onClickMenu} />
              </SearchButtonBox>
            </MainTitleContainer>
          </HeaderMain>
        ) : (
          <HeaderMain>
            <MainInner>
              <MainLogo>
                <Link href="/">
                  <Logo />
                </Link>
              </MainLogo>
            </MainInner>
            <MainTitleContainer>
              <MainNav>
                <MainUl>
                  <MainList>STYLE</MainList>
                  <Link href="/products">
                    <MainList>SHOP</MainList>
                  </Link>
                  <MainList>ABOUT</MainList>
                </MainUl>
              </MainNav>
              <SearchButtonBox>
                <Link href="/shop">
                  <SearchIcon />
                </Link>
                <HambergerIcon onClick={onClickMenu} />
              </SearchButtonBox>
            </MainTitleContainer>
          </HeaderMain>
        )}
        {/* <HeaderMain>
          <MainInner>
            <MainLogo>
              <Link href="/">
                <Logo />
              </Link>
            </MainLogo>
          </MainInner>
          <MainTitleContainer>
            <MainNav>
              <MainUl>
                <MainList>STYLE</MainList>
                <Link href="/products">
                  <MainList>SHOP</MainList>
                </Link>
                <MainList>ABOUT</MainList>
              </MainUl>
            </MainNav>
            <SearchButtonBox>
              <Link href="/shop">
                <SearchIcon />
              </Link>
              <HambergerIcon onClick={onClickMenu} />
            </SearchButtonBox>
          </MainTitleContainer>
        </HeaderMain> */}
      </HeaderContainer>
      {menuBar && (
        <NavigationWrap>
          <Navigation>
            <HambergerCloseButton onClick={onClickMenu} />
            <NavigationInner>
              <NavList>
                <NavItem>
                  <NavLink>STYLE</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>SHOP</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>자주 묻는 질문</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>공지사항</NavLink>
                </NavItem>
                <NavItem>
                  <Link href="/login">
                    <NavLink>로그인</NavLink>
                  </Link>
                </NavItem>
              </NavList>
              <NavDownload>
                <DownloadTxt>KREAM 앱 설치 후 사용해 보세요!</DownloadTxt>
                <DownloadButtonBox>
                  <DownloadButton>앱 다운로드</DownloadButton>
                </DownloadButtonBox>
              </NavDownload>
            </NavigationInner>
          </Navigation>
        </NavigationWrap>
      )}
    </>
  );
}

const HeaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.color.white};
  z-index: 99;
`;
const DownloadBanner = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    padding: 0 24px;
    height: 70px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    background-color: #f4f4f4;
  }
`;
const BannerBox = styled.div`
  height: 70px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const Thumb = styled.div`
  margin-top: 2px;
  margin-right: 8px;
`;
const ThumbImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(https://play-lh.googleusercontent.com/Gh73JjkOE27zN6F8l4tWqlzgpHMEyEZJLOOg8-RQfYtPBAwsSCWNcqvdhgTaqGSOLA);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;
const BannerInfo = styled.div`
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.8);
  p {
    line-height: 15px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
const AppDown = styled.a`
  text-decoration: underline;
`;
const BtnClose = styled.div`
  margin-top: 2px;
  margin-left: auto;
`;
const Close = styled.div`
  width: 18px;
  height: 18px;
  background: url(https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const HeaderTop = styled.ul`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 40px;
  border-bottom: 2px solid #eee;
  @media (max-width: 768px) {
    display: none;
  }
`;
const TopInner = styled.li`
  list-style: none;
  margin-left: 24px;
`;
const TopList = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34 0.8);
  text-decoration: none;
`;

const HeaderMain = styled.div`
  display: flex;
  padding: 0 40px;
  height: 68px;
  min-width: 320px;
  -webkit-box-align: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 60px;
    padding: 0 24px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const MainInner = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = styled.h1`
  box-sizing: border-box;
  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100px;
    height: 20px;
  }
`;
const Logo = styled.div`
  display: flex;
  width: 120px;
  height: 20px;
  box-sizing: border-box;
  background: url(https://pds.saramin.co.kr/company/logo/202109/02/qyse95_u387-xpqfsv_logo.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100px;
    height: 20px;
    box-sizing: border-box;
    background: url(https://pds.saramin.co.kr/company/logo/202109/02/qyse95_u387-xpqfsv_logo.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const MainTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MainNav = styled.nav`
  box-sizing: border-box;
`;
const MainUl = styled.ul`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  cursor: pointer;
`;
const MainList = styled.li`
  margin-right: 40px;
  font-size: 15px;
  color: ${(props) => props.theme.color.black};
`;

const SearchButtonBox = styled.div`
  color: ${(props) => props.theme.color.black};
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SlideInAnimation = keyframes`
  from{
    right: -100%;
  }
  to{
      right: 0%;
  }
`;

const NavigationWrap = styled.div`
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 1010;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(34, 34, 34, 0.5);
  }
`;
const Navigation = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    z-index: 1010;
    right: 0;
    top: 0;
    bottom: 0;
    width: 79.4%;
    background-color: #fff;
    padding-top: 60px;
    animation: ${SlideInAnimation} 0.3s linear backwards;
  }
`;
const NavigationInner = styled.div`
  position: relative;
  padding-bottom: 55px;
  min-height: 100%;
`;
const NavList = styled.ul``;
const NavItem = styled.li`
  border-bottom: 1px solid #ebebeb;
`;
const NavLink = styled.a`
  display: block;
  padding: 19px 20px 18px;
  height: 100%;
  font-size: 15px;
  letter-spacing: -0.15px;
  font-weight: 700;
`;
const NavDownload = styled.div`
  margin-top: 53px;
  margin-left: 20px;
`;
const DownloadTxt = styled.span`
  font-size: 12px;
  color: rgba(34, 34, 34, 0.8);
`;
const DownloadButtonBox = styled.div`
  margin-top: 12px;
`;
const DownloadButton = styled.a`
  padding: 0 11px;
  height: 40px;
  line-height: 38px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.14px;
  border: 1px solid #d3d3d3;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
`;
const HambergerCloseButton = styled.div`
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    background: url(https://cdn.icon-icons.com/icons2/1674/PNG/512/close_111152.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    margin: 18px 11px;
    line-height: 0;
  }
`;
const SearchIcon = styled.div`
  width: 28px;
  height: 28px;
  background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  @media (max-width: 768px) {
    cursor: auto;
    margin-right: 20px;
  }
`;
const HambergerIcon = styled.div`
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAAwMDA6Ojr7+/sODg7h4eHp6enR0dGbm5u7u7tYWFjm5ubj4+NQUFDy8vJXV1dLS0t2dnYgICBiYmJFRUVqamoJCQkSEhKVlZX19fVvb2+dnZ3Mq88xAAABp0lEQVR4nO3dW3LiMBAFUE8GQwhgyAsmIftf50DIAtTioyP5nBXcLmNZTVVLwwAAAAAAAPDLbdfTQzum9TZY3/74pzXHfaTA5Sk7b4VxWV7gqsUCLyWuiit8zs5a6bm0wKfspNWeCivcZAettikrcJGd8w6LogqX2THvULacPmbHvMOjZ/it//ew/7V0Bt/D/vc0wyo7aqXyfemw+5cdtsK4Ky/w0h++ZOcNewn1h8O1x9+8jq143YR7fAAAAAAAAAAAAAAAgBqLVlRVt/t4e//bive3j9BI0MXnOXvIJ+z8GSmwzUHZwKkR2+yslcpnn6bsqJWm0gL7n5I9ZAet5tSIH20upDdOjZjLM+z/PXRqxC9WfGpE93uaGexLG11OA73FDPrDof8e/yb775diVdUBAAAAAAAAAAAAAADEbNeHhu4hPYTvIe3+LtnlmJ23wikwGNT/nc7d38vd/5Rs95PO/U+rtzkie+PUiLk8w/7fw/7X0hl8D/vf0wyrU3bWKmP5vrTN3mIMnRqxP2bnDTuH+sPrL/VremjH9BX4hQIAAAAAAOT4D3cEP4KpEEG9AAAAAElFTkSuQmCC);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: auto;
  }
`;
