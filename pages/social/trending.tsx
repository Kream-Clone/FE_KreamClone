import Seo from "components/common/Seo";
import { useState } from "react";
import styled from "styled-components";

export default function Trending() {
  const [focusFamous, setFocusFamous] = useState(true);
  const [focusNew, setFocusNew] = useState(false);
  const [focusFollowing, setFollowing] = useState(false);

  const onClickFamousTab = () => {
    setFocusFamous(true);
    setFocusNew(false);
    setFollowing(false);
  };
  const onClickNewTab = () => {
    setFocusNew(true);
    setFocusFamous(false);
    setFollowing(false);
  };

  const onClickFollowing = () => {
    setFollowing(true);
    setFocusFamous(false);
    setFocusNew(false);
  };
  return (
    <>
      <TrendingContainer>
        <Seo title="STYLE | KREAM" />
        <SocialHeader>
          <StyleTabList>
            {focusFamous ? (
              <TabItem onClick={onClickFamousTab}>인기</TabItem>
            ) : (
              <TabItem
                style={{ backgroundColor: "white", color: "#222" }}
                onClick={onClickFamousTab}
              >
                인기
              </TabItem>
            )}
            {focusNew ? (
              <TabItem onClick={onClickNewTab}>최신</TabItem>
            ) : (
              <TabItem
                style={{ backgroundColor: "white", color: "#222" }}
                onClick={onClickNewTab}
              >
                최신
              </TabItem>
            )}
            {focusFollowing ? (
              <TabItem onClick={onClickFollowing}>팔로잉</TabItem>
            ) : (
              <TabItem
                style={{ backgroundColor: "white", color: "#222" }}
                onClick={onClickFollowing}
              >
                팔로잉
              </TabItem>
            )}
          </StyleTabList>
        </SocialHeader>

        <SocialContainer>
          <KeywordBind>
            <TrendKeyword># 캐트릿</TrendKeyword>
            <TrendKeyword># 뉴발란스</TrendKeyword>
            <TrendKeyword># 오뭐신</TrendKeyword>
            <TrendKeyword># 반스</TrendKeyword>
            <TrendKeyword># KREAM스타일</TrendKeyword>
            <TrendKeyword># 스투시</TrendKeyword>
            <TrendKeyword># 데일리룩</TrendKeyword>
            <TrendKeyword># 윈디팰린지</TrendKeyword>
          </KeywordBind>
        </SocialContainer>
      </TrendingContainer>
    </>
  );
}

const TrendingContainer = styled.div`
  padding-top: 60px;
  min-height: 100vh;
  position: relative;
`;

const SocialHeader = styled.div`
  position: sticky;
  top: 100px;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-bottom: 16px;
  background-color: #fff;
`;
const StyleTabList = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
const TabItem = styled.a`
  background-color: #222;
  color: #fff;
  font-weight: 700;
  border-radius: 19px;
  padding: 12px 14px;
  min-width: 59px;
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.27px;
  cursor: pointer;
`;

const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const KeywordBind = styled.div`
  padding-bottom: 10px;
  text-align: center;
  @media (max-width: 768px) {
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 8px;
    white-space: nowrap;
    text-align: left;
  }
`;
const TrendKeyword = styled.a`
  display: inline-block;
  padding: 8px 10px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  font-size: 15px;
  margin-left: 8px;
  @media (max-width: 768px) {
    font-size: 13px;
    font-weight: 600;
    display: inline-block;
    padding: 8px 10px;
  }
`;
