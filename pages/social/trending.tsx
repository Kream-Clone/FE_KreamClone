import axios from "axios";
import Seo from "components/common/Seo";
import useInfiniteScroll from "components/hooks/useInfiniteScroll";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Trending() {
  const [focusFamous, setFocusFamous] = useState(true);
  const [focusNew, setFocusNew] = useState(false);
  const [focusFollowing, setFollowing] = useState(false);

  const [page, setPage] = useState(10);
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

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

  const getData = async () => {
    return await axios
      .get(`http://kellystorage.shop/social/trending?idx=${page}`)
      .then((res) => {
        let reverseData = res.data.data.reverse();
        setData(data.concat(reverseData));
        setPage((pre) => pre + 10);
        console.log(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const { isEnd } = useInfiniteScroll({ onScrollEnd: getData });

  return (
    <>
      <TrendingContainer>
        <Seo title="STYLE | KREAM" />
        <SocialHeader>
          <StyleTabList>
            {focusFamous ? (
              <TabItem
                style={{ fontWeight: "bold" }}
                onClick={onClickFamousTab}
              >
                인기
              </TabItem>
            ) : (
              <TabItem
                style={{
                  backgroundColor: "white",
                  color: "#222",
                }}
                onClick={onClickFamousTab}
              >
                인기
              </TabItem>
            )}
            {focusNew ? (
              <TabItem style={{ fontWeight: "bold" }} onClick={onClickNewTab}>
                최신
              </TabItem>
            ) : (
              <TabItem
                style={{ backgroundColor: "white", color: "#222" }}
                onClick={onClickNewTab}
              >
                최신
              </TabItem>
            )}
            {focusFollowing ? (
              <TabItem
                style={{ fontWeight: "bold" }}
                onClick={onClickFollowing}
              >
                팔로잉
              </TabItem>
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

          <SocialFeeds>
            <MasonryPosts>
              {data.map((item) => (
                <FeedCardItem key={item.id}>
                  <CardBox>
                    <SocialImgBox>
                      <SocilaImg
                        style={{
                          backgroundImage: `url(${item.styleImage})`,
                        }}
                      />
                    </SocialImgBox>
                    <CardDetail>
                      <UserBox>
                        <ProfileImg
                          style={{
                            backgroundImage: `url(${item.profileImageUrl})`,
                          }}
                        />
                        <UserName>{item.nickname}</UserName>
                      </UserBox>
                      <TextBox>{item.content}</TextBox>
                    </CardDetail>
                  </CardBox>
                </FeedCardItem>
              ))}
            </MasonryPosts>
          </SocialFeeds>
        </SocialContainer>
      </TrendingContainer>
    </>
  );
}

const TrendingContainer = styled.div`
  min-height: 100vh;
  position: relative;
`;

const SocialHeader = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  width: 100%;
  z-index: 999;
  padding-bottom: 16px;
  background-color: #fff;
  @media (max-width: 768px) {
    margin-top: -40px;
  }
`;
const StyleTabList = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
const TabItem = styled.a`
  background-color: #222;
  color: #fff;
  border-radius: 19px;
  padding: 10px 14px;
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
    margin-top: 60px;
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

const SocialFeeds = styled.div`
  padding: 0px 120px;
  @media (max-width: 768px) {
    padding: 0px;
  }
`;
const MasonryPosts = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, auto));
    padding: 0;
  }
`;
const FeedCardItem = styled.div``;
const CardBox = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
    border-radius: 10px;
  }
`;
const SocialImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 134.77%;
  overflow: hidden;
  border-radius: 10px;
`;
const SocilaImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const CardDetail = styled.div`
  padding: 8px 4px 0;
`;
const UserBox = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;
const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  border: 1px solid rgba(34, 34, 34, 0.1);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const UserName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 4px;
  white-space: nowrap;
  font-size: 15px;
  letter-spacing: -0.15px;
  color: rgba(34, 34, 34, 0.8);
`;
const TextBox = styled.p`
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: -0.21px;
  max-height: 40px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;
