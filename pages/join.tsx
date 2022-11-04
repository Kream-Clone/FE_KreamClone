import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import styled from "styled-components";

export default function Join() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const handleChange = (ev) => {
    setChecked(!checked);
  };
  return (
    <>
      <JoinContainer>
        <JoinArea>
          <JoinTitle>회원가입</JoinTitle>
          <JoinInputBox>
            <InputTitle>이메일 주소 *</InputTitle>
            <InputItem>
              <InputTxt
                type="text"
                placeholder="예) kream@kream.co.kr"
              ></InputTxt>
            </InputItem>
          </JoinInputBox>

          <JoinInputBox>
            <InputTitle>비밀번호 *</InputTitle>
            <InputItem>
              <InputTxt
                type="password"
                placeholder="영문,숫자,특수문자 조합 8~16자"
                autoComplete="off"
              ></InputTxt>
            </InputItem>
          </JoinInputBox>

          <JoinInputBox>
            <InputTitle>신발 사이즈</InputTitle>
            <InputItem>
              <InputTxt
                type="password"
                placeholder="선택하세요"
                autoComplete="off"
              ></InputTxt>
            </InputItem>
          </JoinInputBox>

          <JoinTerms>
            <TermsBox>
              <CheckMain>
                <CheckboxItem>
                  <GroupCheck1 id="checkbox_1" type="checkbox" defaultChecked />
                  <label htmlFor="checkbox_1">
                    <span>[필수] 만 14세 이상이며 모두 동의합니다.</span>
                  </label>
                  <PlusButton>+</PlusButton>
                </CheckboxItem>
              </CheckMain>

              <CheckMain style={{ marginTop: "25px" }}>
                <CheckboxItem>
                  <GroupCheck1 id="checkbox_1" type="checkbox" />
                  <label htmlFor="checkbox_1">
                    <span>[선택] 광고성 정보 수신에 모두 동의합니다.</span>
                  </label>
                  <PlusButton>+</PlusButton>
                </CheckboxItem>
              </CheckMain>
            </TermsBox>
          </JoinTerms>

          <JoinButtonBox>
            <JoinButton>가입하기</JoinButton>
          </JoinButtonBox>
        </JoinArea>
      </JoinContainer>
    </>
  );
}

const JoinContainer = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;
`;

const JoinArea = styled.div`
  margin: 0 auto;
  padding: 60px 0 160px;
  width: 400px;
`;
const JoinTitle = styled.h2`
  padding-bottom: 42px;
  text-align: center;
  font-size: 32px;
  letter-spacing: -0.48px;
  color: #000;
`;

const JoinInputBox = styled.div`
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

const JoinButtonBox = styled.div``;
const JoinButton = styled.button`
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

const JoinTerms = styled.div`
  padding: 24px 0 40px;
`;
const TermsBox = styled.div``;
const CheckMain = styled.div`
  display: flex;
  height: 24px;
`;
const CheckboxItem = styled.div`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  span {
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    letter-spacing: -0.21px;
    line-height: 24px;
    padding-left: 8px;
  }
`;
const GroupCheck1 = styled.input`
  clip: rect(0, 0, 0, 0) !important;
  width: 24px !important;
  height: 24px !important;
  border: 1px solid black;
`;
const PlusButton = styled.button`
  margin-left: auto;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
  color: rgba(34, 34, 34, 0.8);
  background-color: #fff;
  font-size: 28px;
`;
