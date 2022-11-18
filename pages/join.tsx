import axios from "axios";
import Seo from "components/common/Seo";
import { useRouter } from "next/dist/client/router";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";

export default function Join() {
  const router = useRouter();
  const [modal, setModal] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [shoeSize, setShoeSize] = useState<string>("");
  const [shoeSizeUpdate, setShoeSizeUpdate] = useState<string>(shoeSize);

  const [checkedButtons, setCheckedButtons] = useState([]);
  const outside = useRef();

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedButtons([...checkedButtons, id]);
    } else {
      setCheckedButtons(checkedButtons.filter((button) => button !== id));
    }
  };

  const isAllChecked = checkedButtons.length === 2;

  const handleClick = (e) => {
    setShoeSize(e.currentTarget.id);
  };

  const handleForm = () => {
    setModal(false);
    setShoeSizeUpdate(shoeSize);
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

  const onClickSubmit = async () => {
    try {
      const res = await axios.post("http://sparta-mysoo.shop/join", {
        email,
        password,
        shoeSize,
      });
      if (res.status === 200) {
        router.push("/login");
        console.log(res);
      }
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Seo title="KREAM | 한정판 거래의 FLEX" />
      <JoinContainer>
        <JoinArea>
          <JoinTitle>회원가입</JoinTitle>
          {email.length > 0 ? (
            <JoinInputBox>
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
            </JoinInputBox>
          ) : (
            <JoinInputBox>
              <InputTitle>이메일 주소 *</InputTitle>
              <InputItem>
                <InputTxt
                  onChange={onChangeEmail}
                  value={email}
                  type="email"
                  placeholder="예) kream@kream.co.kr"
                />
              </InputItem>
            </JoinInputBox>
          )}

          {password.length > 0 ? (
            <JoinInputBox>
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
            </JoinInputBox>
          ) : (
            <JoinInputBox>
              <InputTitle>비밀번호 *</InputTitle>
              <InputItem>
                <InputTxt
                  onChange={onChangePassword}
                  value={password}
                  type="password"
                  placeholder="영문,숫자,특수문자 조합 8~16자"
                  autoComplete="off"
                />
              </InputItem>
            </JoinInputBox>
          )}

          <JoinInputBox>
            <InputTitle>신발 사이즈</InputTitle>
            <InputItem onClick={() => setModal(true)}>
              <InputTxt
                className="size-hover"
                type="text"
                placeholder="선택하세요"
                autoComplete="off"
                onChange={handleClick}
                value={shoeSizeUpdate}
              ></InputTxt>
            </InputItem>
          </JoinInputBox>

          {modal && (
            <Layer
              ref={outside}
              onClick={(e) => {
                if (e.target === outside.current) setModal(false);
              }}
            >
              <LayerContainer>
                <LayerHeader>
                  <LayerTitle>사이즈 선택</LayerTitle>
                </LayerHeader>
                <LayerContent>
                  <SizeListArea>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "220" ? "bold" : null,
                          borderColor: shoeSize === "220" ? "#333" : null,
                        }}
                        id="220"
                        onClick={handleClick}
                      >
                        <InfoTxt>220</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "225" ? "bold" : null,
                          borderColor: shoeSize === "225" ? "#333" : null,
                        }}
                        id="225"
                        onClick={handleClick}
                      >
                        <InfoTxt>225</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "230" ? "bold" : null,
                          borderColor: shoeSize === "230" ? "#333" : null,
                        }}
                        id="230"
                        onClick={handleClick}
                      >
                        <InfoTxt>230</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "235" ? "bold" : null,
                          borderColor: shoeSize === "235" ? "#333" : null,
                        }}
                        id="235"
                        onClick={handleClick}
                      >
                        <InfoTxt>235</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "240" ? "bold" : null,
                          borderColor: shoeSize === "240" ? "#333" : null,
                        }}
                        id="240"
                        onClick={handleClick}
                      >
                        <InfoTxt>240</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "245" ? "bold" : null,
                          borderColor: shoeSize === "245" ? "#333" : null,
                        }}
                        id="245"
                        onClick={handleClick}
                      >
                        <InfoTxt>245</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "250" ? "bold" : null,
                          borderColor: shoeSize === "250" ? "#333" : null,
                        }}
                        id="250"
                        onClick={handleClick}
                      >
                        <InfoTxt>250</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "255" ? "bold" : null,
                          borderColor: shoeSize === "255" ? "#333" : null,
                        }}
                        id="255"
                        onClick={handleClick}
                      >
                        <InfoTxt>255</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "260" ? "bold" : null,
                          borderColor: shoeSize === "260" ? "#333" : null,
                        }}
                        id="260"
                        onClick={handleClick}
                      >
                        <InfoTxt>260</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "265" ? "bold" : null,
                          borderColor: shoeSize === "265" ? "#333" : null,
                        }}
                        id="265"
                        onClick={handleClick}
                      >
                        <InfoTxt>265</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "270" ? "bold" : null,
                          borderColor: shoeSize === "270" ? "#333" : null,
                        }}
                        id="270"
                        onClick={handleClick}
                      >
                        <InfoTxt>270</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "275" ? "bold" : null,
                          borderColor: shoeSize === "275" ? "#333" : null,
                        }}
                        id="275"
                        onClick={handleClick}
                      >
                        <InfoTxt>275</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "280" ? "bold" : null,
                          borderColor: shoeSize === "280" ? "#333" : null,
                        }}
                        id="280"
                        onClick={handleClick}
                      >
                        <InfoTxt>280</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "285" ? "bold" : null,
                          borderColor: shoeSize === "285" ? "#333" : null,
                        }}
                        id="285"
                        onClick={handleClick}
                      >
                        <InfoTxt>285</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "290" ? "bold" : null,
                          borderColor: shoeSize === "290" ? "#333" : null,
                        }}
                        id="290"
                        onClick={handleClick}
                      >
                        <InfoTxt>290</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "295" ? "bold" : null,
                          borderColor: shoeSize === "295" ? "#333" : null,
                        }}
                        id="295"
                        onClick={handleClick}
                      >
                        <InfoTxt>295</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                    <SizeItem>
                      <SizeButton
                        style={{
                          fontWeight: shoeSize === "300" ? "bold" : null,
                          borderColor: shoeSize === "300" ? "#333" : null,
                        }}
                        id="300"
                        onClick={handleClick}
                      >
                        <InfoTxt>300</InfoTxt>
                      </SizeButton>
                    </SizeItem>
                  </SizeListArea>
                </LayerContent>
                <LayerButtonBox>
                  <LayerButton onClick={handleForm}>확인</LayerButton>
                </LayerButtonBox>
              </LayerContainer>
            </Layer>
          )}

          <JoinTerms>
            <TermsBox>
              <CheckMain>
                <CheckboxItem>
                  {checkedButtons.includes("check1") ? (
                    <CheckIcon
                      id="check1"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "check1");
                      }}
                      checked={checkedButtons.includes("check1") ? true : false}
                      type="checkbox"
                    />
                  ) : (
                    <GroupCheck
                      id="check1"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "check1");
                      }}
                      checked={checkedButtons.includes("check1") ? true : false}
                      type="checkbox"
                    />
                  )}

                  <label htmlFor="check1">
                    <span>[필수] 만 14세 이상이며 모두 동의합니다.</span>
                  </label>
                  <PlusButton>+</PlusButton>
                </CheckboxItem>
              </CheckMain>

              <CheckMain style={{ marginTop: "25px" }}>
                <CheckboxItem>
                  {checkedButtons.includes("check2") ? (
                    <CheckIcon
                      id="check2"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "check2");
                      }}
                      checked={checkedButtons.includes("check2") ? true : false}
                      type="checkbox"
                    />
                  ) : (
                    <GroupCheck
                      id="check2"
                      type="checkbox"
                      onChange={(e) => {
                        changeHandler(e.currentTarget.checked, "check2");
                      }}
                      checked={checkedButtons.includes("check2") ? true : false}
                    />
                  )}

                  <label htmlFor="check2">
                    <span>[선택] 광고성 정보 수신에 모두 동의합니다.</span>
                  </label>
                  <PlusButton>+</PlusButton>
                </CheckboxItem>
              </CheckMain>
            </TermsBox>
          </JoinTerms>

          <JoinButtonBox>
            {isAllChecked && isEmail && isPassword ? (
              <JoinButton
                style={{ backgroundColor: "#222", cursor: "pointer" }}
                onClick={onClickSubmit}
              >
                가입하기
              </JoinButton>
            ) : (
              <JoinButton style={{ pointerEvents: "none" }}>
                가입하기
              </JoinButton>
            )}
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
  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 24px;
  }
`;

const JoinArea = styled.div`
  margin: 0 auto;
  padding: 60px 0 160px;
  width: 400px;
  @media (max-width: 768px) {
    padding: 23px 0 40px;
    width: 100%;
  }
`;
const JoinTitle = styled.h2`
  padding-bottom: 42px;
  text-align: center;
  font-size: 32px;
  letter-spacing: -0.48px;
  color: #000;
  @media (max-width: 768px) {
    padding-bottom: 28px;
    text-align: left;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.12px;
  }
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
  @media (max-width: 768px) {
    position: relative;
    padding: 10px 0 14px;
  }
`;
const InputTitle = styled.h3`
  font-size: 13px;
  letter-spacing: -0.07px;
  line-height: 18px;
`;
const InputItem = styled.div`
  position: relative;
  .size-hover {
    cursor: pointer;
  }
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
  &:active {
    background-color: #222;
    opacity: 0.8;
  }
`;

const JoinTerms = styled.div`
  padding: 24px 0 40px;
  cursor: pointer;
`;
const TermsBox = styled.div``;
const CheckMain = styled.div`
  display: flex;
  height: 24px;
  cursor: pointer;
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
    cursor: pointer;
  }
`;
const GroupCheck = styled.input`
  clip: rect(0, 0, 0, 0) !important;
  width: 24px !important;
  height: 24px !important;
  border: 1px solid black;
  cursor: pointer;
`;
const CheckIcon = styled.input`
  background-image: url(https://thumbs.dreamstime.com/b/white-check-mark-icon-black-background-tick-symbol-tick-icon-vector-illustration-white-check-mark-icon-black-background-tick-144258971.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 24px;
  height: 24px;
  cursor: pointer;
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

const Layer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(34, 34, 34, 0.5);
  z-index: 1010;
`;
const LayerContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 448px;
  border-radius: 16px;
  -webkit-box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
  box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
`;
const LayerHeader = styled.div``;
const LayerTitle = styled.h2`
  line-height: 22px;
  padding: 18px 50px 20px;
  min-height: 60px;
  font-size: 18px;
  letter-spacing: -0.27px;
  font-weight: 700;
  letter-spacing: -0.15px;
  color: #000;
  text-align: center;
  background-color: #fff;
  margin-block-start: 0;
`;
const LayerContent = styled.div``;
const SizeListArea = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  padding: 6px 28px 0;
  height: 270px;
`;
const SizeItem = styled.div`
  float: left;
  display: table;
  margin: 4px;
  width: calc(33.33333% - 8px);
  height: 52px;
`;
const SizeButton = styled.a`
  display: table-cell;
  height: 100%;
  border: 1px solid #d3d3d3;
  text-align: center;
  background-color: #fff;
  color: rgba(34, 34, 34, 0.8);
  padding: 0 18px;
  height: 42px;
  line-height: 50px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.14px;
  cursor: pointer;
  &:active {
    background-color: #f0f0f0;
  }
`;
const InfoTxt = styled.span`
  display: inline-block;
  font-size: 14px;
  color: #000;
`;
const LayerButtonBox = styled.div`
  padding: 24px 32px 32px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
const LayerButton = styled.a`
  width: 120px;
  font-weight: 600;
  color: #fff;
  background-color: #222;
  padding: 0 18px;
  height: 42px;
  line-height: 40px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: -0.14px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  text-align: center;
`;
