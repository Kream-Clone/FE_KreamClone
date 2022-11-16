import axios from "axios";
import Seo from "components/common/Seo";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const accessToken = window.localStorage.getItem;

  const onClickLogin = async () => {
    try {
      const res = await axios.get("http://54.180.134.46/join", {
        headers: {
          authorization: accessToken,
        },
      });

      if (res.status === 200) {
        router.push("/");
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  // 유효성 검사 이메일
  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEmail(emailCurrent);

      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 주소를 정확히 입력해주세요");
        setIsEmail(false);
      } else {
        setEmailMessage("");
        setIsEmail(true);
      }
    },
    []
  );

  // 유효성 검사 비밀번호
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "영문, 숫자, 특수문자를 조합하여 입력해주세요. (8-16자)"
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("");
        setIsPassword(true);
      }
    },
    []
  );

  return (
    <>
      <Seo title="KREAM | 한정판 거래의 FLEX" />
      <LoginContainer>
        <LoginArea>
          <LoginTitle />
          {email.length > 0 ? (
            <LoginInputBox>
              {isEmail ? (
                <InputTitle>이메일 주소 *</InputTitle>
              ) : (
                <InputTitle style={{ color: "#f15746" }}>
                  이메일 주소 *
                </InputTitle>
              )}
              <InputItem>
                {isEmail ? (
                  <InputTxt
                    onChange={onChangeEmail}
                    value={email}
                    type="email"
                    placeholder="예) kream@kream.co.kr"
                  />
                ) : (
                  <InputTxt
                    style={{ borderBottom: "1px solid #f15746" }}
                    onChange={onChangeEmail}
                    value={email}
                    type="email"
                    placeholder="예) kream@kream.co.kr"
                  />
                )}

                <InputError
                  className={`message ${isEmail ? "success" : "error"}`}
                >
                  {emailMessage}
                </InputError>
              </InputItem>
            </LoginInputBox>
          ) : (
            <LoginInputBox>
              <InputTitle>이메일 주소</InputTitle>
              <InputItem>
                <InputTxt
                  onChange={onChangeEmail}
                  value={email}
                  type="email"
                  placeholder="예) kream@kream.co.kr"
                />
              </InputItem>
            </LoginInputBox>
          )}

          {password.length > 0 ? (
            <LoginInputBox>
              {isPassword ? (
                <InputTitle>비밀번호 *</InputTitle>
              ) : (
                <InputTitle style={{ color: "#f15746" }}>비밀번호 *</InputTitle>
              )}
              <InputItem>
                {isPassword ? (
                  <InputTxt
                    onChange={onChangePassword}
                    value={password}
                    type="password"
                    placeholder="영문,숫자,특수문자 조합 8~16자"
                    autoComplete="off"
                  />
                ) : (
                  <InputTxt
                    style={{ borderBottom: "1px solid #f15746" }}
                    onChange={onChangePassword}
                    value={password}
                    type="password"
                    placeholder="영문,숫자,특수문자 조합 8~16자"
                    autoComplete="off"
                  />
                )}

                <InputError
                  className={`message ${isPassword ? "success" : "error"}`}
                >
                  {passwordMessage}
                </InputError>
              </InputItem>
            </LoginInputBox>
          ) : (
            <LoginInputBox>
              <InputTitle>비밀번호</InputTitle>
              <InputItem>
                <InputTxt
                  onChange={onChangePassword}
                  value={password}
                  type="password"
                  placeholder="영문,숫자,특수문자 조합 8~16자"
                  autoComplete="off"
                />
              </InputItem>
            </LoginInputBox>
          )}

          <LoginButtonBox onClick={onClickLogin}>
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
  @media (max-width: 768px) {
    padding: 50px 0 87px;
    width: 100%;
  }
`;
const LoginTitle = styled.h2`
  padding-bottom: 50px;
  font-size: 0;
  text-align: center;
  @media (max-width: 768px) {
    padding-bottom: 58px;
  }

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
const InputError = styled.p`
  display: block;
  position: absolute;
  line-height: 16px;
  font-size: 11px;
  color: #f15746;
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
  cursor: pointer;
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
