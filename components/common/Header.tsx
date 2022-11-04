import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuBar, setMenuBar] = useState(false);

  const onClickMenu = () => {
    setMenuBar(!menuBar);
    console.log("click");
  };
  return (
    <>
      <HeaderContainer>
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
                <MainList>SHOP</MainList>
                <MainList>ABOUT</MainList>
              </MainUl>
            </MainNav>
            <SearchButtonBox>
              <SearchIcon />
              <HambergerIcon onClick={onClickMenu} />
            </SearchButtonBox>
          </MainTitleContainer>
        </HeaderMain>
      </HeaderContainer>
      {menuBar && (
        <SideContainer>
          <HambergerCloseBox>
            <HambergerCloseButton></HambergerCloseButton>
          </HambergerCloseBox>
        </SideContainer>
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
  width: 100%;
  height: 68px;
  min-width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
`;

const MainInner = styled.div`
  display: flex;
  align-items: center;
`;

const MainLogo = styled.h1`
  color: ${(props) => props.theme.color.black};
  box-sizing: border-box;
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
const SideContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 75%;
    height: 100vh;
    z-index: 120;
    background-color: white;
    display: flex;
    justify-content: flex-end;
  }
`;
const HambergerCloseBox = styled.div`
  display: block;
  position: fixed;
  z-index: 1010;
  top: 0;
  bottom: 0;
  width: 79.4%;
  background-color: #fff;
  padding-top: 60px;
  overflow-y: auto;
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
    padding: 18px 11px;
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
