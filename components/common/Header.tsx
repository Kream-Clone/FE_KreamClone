import styled from "styled-components";
import Link from "next/link";

export default function Header() {
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
                <Link href="/shop">
                <MainList>SHOP</MainList>
                </Link>
                <MainList>ABOUT</MainList>
              </MainUl>
            </MainNav>
            <SearchButtonBox>
              <Link href="/shop">
              <SearchIcon />
              </Link>
            </SearchButtonBox>
          </MainTitleContainer>
        </HeaderMain>
      </HeaderContainer>
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
  cursor:pointer;
`;
const MainList = styled.li`
  margin-right: 40px;
  font-size: 15px;
  color: ${(props) => props.theme.color.black};
`;

const SearchButtonBox = styled.div`
  color: ${(props) => props.theme.color.black};
`;
const SearchIcon = styled.div`
  width: 28px;
  height: 28px;
  background: url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/800px-Search_Icon.svg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;
