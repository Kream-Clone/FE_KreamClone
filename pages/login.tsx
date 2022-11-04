import Link from "next/link";
import styled from "styled-components";

export default function Login() {
  return (
    <>
      <LoginContainer>
        <LoginArea>
          <LoginTitle></LoginTitle>
          <LoginInputBox>
            <InputTitle>이메일 주소</InputTitle>
            <InputItem>
              <InputTxt
                type="text"
                placeholder="예) kream@kream.co.kr"
              ></InputTxt>
            </InputItem>
          </LoginInputBox>

          <LoginInputBox>
            <InputTitle>비밀번호</InputTitle>
            <InputItem>
              <InputTxt type="password" autoComplete="off"></InputTxt>
            </InputItem>
          </LoginInputBox>

          <LoginButtonBox>
            <LoginButton>로그인</LoginButton>
          </LoginButtonBox>

          <LookBox>
            <LookList>
              <Link href="/join">
                <LookLink>이메일 가입</LookLink>
              </Link>
            </LookList>

            <LookList>
              <Link href={""}>
                <LookLink>이메일 찾기</LookLink>
              </Link>
            </LookList>

            <LookList>
              <Link href={""}>
                <LookLink>비밀번호 찾기</LookLink>
              </Link>
            </LookList>
          </LookBox>

          <SocialLogin>
            <NaverLoginButton>
              <NaverLogo />
              네이버로 로그인
            </NaverLoginButton>
            <AppleLoginButton>
              <AppleLogo />
              Apple로 로그인
            </AppleLoginButton>
          </SocialLogin>
        </LoginArea>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;
`;

const LoginArea = styled.div`
  margin: 0 auto;
  padding: 60px 0 160px;
  width: 400px;
`;
const LoginTitle = styled.h2`
  padding-bottom: 50px;
  font-size: 0;
  text-align: center;

  &::before {
    content: "";
    display: inline-block;
    width: 250px;
    height: 56px;
    background: url(https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png)
      no-repeat;
    background-size: 250px 56px;
  }
`;

const LoginInputBox = styled.div`
  position: relative;
  padding: 10px 0 14px;
  color: ${(props) => props.theme.color.black};
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const InputTitle = styled.h3`
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 18px;
`;
const InputItem = styled.div`
  position: relative;
`;
const InputTxt = styled.input`
  padding-right: 30px;
  height: 38px;
  padding: 8px 0;
  width: 100%;
  font-size: 15px;
  letter-spacing: -0.15px;
  line-height: 22px;
  border-bottom: 1px solid #ebebeb;
  ::placeholder {
    color: #bcbcbc;
  }
  &:focus {
    ::placeholder {
      color: transparent;
    }
    border-bottom: 2px solid ${(props) => props.theme.color.black};
  }
`;

const LoginButtonBox = styled.div`
  padding-top: 20px;
`;
const LoginButton = styled.button`
  background-color: #ebebeb;
  color: ${(props) => props.theme.color.white};
  cursor: default;
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
  height: 52px;
  line-height: 50px;
  border-radius: 12px;
`;

const LookBox = styled.ul`
  margin-top: 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: space-evenly;
  justify-content: space-evenly;
`;
const LookList = styled.li`
  display: inline-flex;
  -webkit-box-align: start;
  align-items: flex-start;
  -webkit-box-flex: 1;
  flex: 1;
  &:nth-child(2) {
    border-left: 1px solid #d3d3d3;
  }
  &:nth-child(3) {
    border-left: 1px solid #d3d3d3;
  }
`;
const LookLink = styled.a`
  margin: auto;
  padding: 0 10px;
  display: -webkit-inline-box;
  display: inline-flex;
  font-size: 13px;
  letter-spacing: -0.07px;
`;

const SocialLogin = styled.div`
  margin-top: 40px;
`;
const NaverLoginButton = styled.button`
  margin-bottom: 8px;
  position: relative;
  color: ${(props) => props.theme.color.black};
  border-color: #ebebeb;
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
  height: 52px;
  line-height: 50px;
  border-radius: 12px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
  border: 1px solid #d3d3d3;
  font-weight: bold;
`;
const NaverLogo = styled.div`
  background-image: url(https://cdn.unissu.com/static/media/naver_logo.4f49a305.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 16px;
  height: 16px;
  top: 17px;
  left: 15px;
`;
const AppleLoginButton = styled.button`
  margin-bottom: 8px;
  position: relative;
  color: ${(props) => props.theme.color.black};
  border-color: #ebebeb;
  width: 100%;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
  height: 52px;
  line-height: 50px;
  border-radius: 12px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
  border: 1px solid #d3d3d3;
`;
const AppleLogo = styled.div`
  background-image: url(https://www.logo.wine/a/logo/Apple_Inc./Apple_Inc.-Logo.wine.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 30px;
  height: 30px;
  top: 10px;
  left: 8px;
`;
