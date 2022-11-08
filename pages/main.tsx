import styled from "styled-components";
import Slider from "react-slick";

export default function Main() {
  const settings = {
    infinite: true, // 무한반복
    slidesToShow: 5, // 보여지는 슬라이드 개수
    slidesToScroll: 5, // 넘어가는 슬라이드 개수
    dots: true, // 점 네비게이션 표시
    arrows: true, // 화살표 표시
    fade: true, // 페이드 효과
    autoplay: true, // 자동스크롤
    autoplaySpeed: 4000, //자동스크롤 속도
    dotsClass: "slick-dots",
    appendDots: (dots: any) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    draggable: true,
    prevArrow: (
      <DivPre>
        <SlickArrowPrev />
      </DivPre>
    ),
    nextArrow: (
      <DivNext>
        <SlickArrowNext />
      </DivNext>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <MainContainer>
        <Home>
          <HomeCardList>
            <BannerSlide>
              <Slider {...settings}>
                <BannerItem className="banner1">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image1" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner2">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image2" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner3">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image3" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner4">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image4" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner5">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image5" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner6">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image6" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner7">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image7" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner8">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image8" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>

                <BannerItem className="banner9">
                  <ItemInner>
                    <ImgBox>
                      <BannerImage className="banner-image9" />
                    </ImgBox>
                  </ItemInner>
                </BannerItem>
              </Slider>
            </BannerSlide>
          </HomeCardList>

          <ShortcutCollection>
            <ShorcutItemsWrap>
              <ShorcutItems>
                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="top-image1" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>셀럽픽</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="top-image2" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>남성 추천</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="top-image3" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>여성 추천</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="top-image4" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>럭키드로우</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="top-image5" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>브랜드관 오픈</ShortcutItemTitle>
                </ShorcutItem>
              </ShorcutItems>

              <ShorcutItems className="bottom-items">
                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="bottom-image1" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>정가 아래</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="bottom-image2" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>인기 럭셔리</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="bottom-image3" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>집꾸미기</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="bottom-image4" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>데일리코디</ShortcutItemTitle>
                </ShorcutItem>

                <ShorcutItem>
                  <ShorcutItemImgWrap>
                    <ShortcutItemImgBg className="bottom-image5" />
                  </ShorcutItemImgWrap>
                  <ShortcutItemTitle>수수료 할인</ShortcutItemTitle>
                </ShorcutItem>
              </ShorcutItems>
            </ShorcutItemsWrap>
          </ShortcutCollection>

          <HomeProducts>
            <ProductTitleBox>
              <ProductTitle>Just Dropped</ProductTitle>
              <ProductSubTitle>발매 상품</ProductSubTitle>
            </ProductTitleBox>

            <ProductListWrap>
              <ProductList>
                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="product-image1" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Nike</BrandText>
                      </Brand>
                      <Name>Nike LeBorn XX EP White Metalic Gold</Name>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>272,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="product-image2" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Andersson Bell</BrandText>
                      </Brand>
                      <Name>
                        Andersson Bell x Asics Contrast Quilting Bomber Jacket
                        Khaki
                      </Name>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>449,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="product-image3" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Undermycar</BrandText>
                      </Brand>
                      <Name>
                        Undermycar Operation Chromite Kerberos Oversized
                        Barsity...
                      </Name>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>1,150,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="product-image4" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Undermycar</BrandText>
                      </Brand>
                      <Name>
                        Undermycar Kame Multi Zip Turtle Shell Parka
                        Driftwood...
                      </Name>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>1,150,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>
              </ProductList>
            </ProductListWrap>

            <ButtonProduct>
              <a>더보기</a>
            </ButtonProduct>

            <ShortcutCollection>
              <ProductTitleBox>
                <ProductTitle>Brand Focus</ProductTitle>
                <ProductSubTitle>추천 브랜드</ProductSubTitle>
              </ProductTitleBox>

              <ShorcutItemsWrap style={{ marginTop: "20px" }}>
                <ShorcutItems>
                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="top-Brand-image1" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>에르메스</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="top-Brand-image2" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>아크네</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="top-Brand-image3" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>뮤지엄비지터</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="top-Brand-image4" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>우영미</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="top-Brand-image5" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>롤렉스</ShortcutItemTitle>
                  </ShorcutItem>
                </ShorcutItems>

                <ShorcutItems style={{ marginTop: "16px" }}>
                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="middle-Brand-image1" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>애플</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="middle-Brand-image2" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>샤넬</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="middle-Brand-image3" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>몽클레르</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="middle-Brand-image4" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>루이비통</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="middle-Brand-image5" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>아크테릭스</ShortcutItemTitle>
                  </ShorcutItem>
                </ShorcutItems>

                <ShorcutItems style={{ marginTop: "16px" }}>
                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="bottom-Brand-image1" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>프라다</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="bottom-Brand-image2" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>디올</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="bottom-Brand-image3" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>막스마라</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="bottom-Brand-image4" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>렉토</ShortcutItemTitle>
                  </ShorcutItem>

                  <ShorcutItem>
                    <ShorcutItemImgWrap>
                      <ShortcutItemImgBg className="bottom-Brand-image5" />
                    </ShorcutItemImgWrap>
                    <ShortcutItemTitle>셀린느</ShortcutItemTitle>
                  </ShorcutItem>
                </ShorcutItems>
              </ShorcutItemsWrap>
            </ShortcutCollection>
          </HomeProducts>

          <Bannder>
            <BannerItem>
              <ItemInner>
                <ImgBox>
                  <Banner2Img className="banner2" />
                </ImgBox>
              </ItemInner>
            </BannerItem>
          </Bannder>

          <HomeProducts>
            <ProductTitleBox>
              <ProductTitle>Most Popular</ProductTitle>
              <ProductSubTitle>인기 상품</ProductSubTitle>
            </ProductTitleBox>
            <ProductListWrap>
              <ProductList>
                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="popular-product-image1" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>The North Face</BrandText>
                      </Brand>
                      <Name>The North Face 1996 Eco Nuptse Jacket Black</Name>
                      <Badge> 빠른배송</Badge>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>271,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="popular-product-image2" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Nike</BrandText>
                      </Brand>
                      <Name>Nike Air Force 1 '07 Low White</Name>
                      <Badge> 빠른배송</Badge>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>131,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="popular-product-image3" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>The North Face</BrandText>
                      </Brand>
                      <Name>
                        The North Face White Label Novelty Nuptse Down Jacket...
                      </Name>
                      <Badge> 빠른배송</Badge>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>261,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>

                <ProductItem>
                  <ProductItemInner>
                    <ProductThumbBox>
                      <Product>
                        <ProductImg className="popular-product-image4" />
                        <ButtonWish />
                      </Product>
                    </ProductThumbBox>
                    <InfoBox>
                      <Brand>
                        <BrandText>Nike</BrandText>
                      </Brand>
                      <Name>Nike Dunk Low Retro Black</Name>
                      <Badge> 빠른배송</Badge>
                      <Price>
                        <Amount>
                          <DisCountRate></DisCountRate>
                          <Num>184,000원</Num>
                        </Amount>
                        <Desc>
                          <p>즉시 구매가</p>
                        </Desc>
                      </Price>
                    </InfoBox>
                  </ProductItemInner>
                </ProductItem>
              </ProductList>
            </ProductListWrap>
            <ButtonProduct style={{ marginBottom: "40px" }}>
              <a>더보기</a>
            </ButtonProduct>
          </HomeProducts>
        </Home>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  overflow: hidden;
  position: relative;
  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;
const Home = styled.div``;
const HomeCardList = styled.div``;
const BannerSlide = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 480px;
  .banner1 {
    background-color: rgb(255, 232, 24);
  }
  .banner2 {
    background-color: rgb(231, 152, 0);
  }
  .banner3 {
    background-color: rgb(245, 245, 245);
  }
  .banner4 {
    background-color: rgb(68, 88, 120);
  }
  .banner5 {
    background-color: rgb(243, 239, 229);
  }
  .banner6 {
    background-color: rgb(236, 236, 224);
  }
  .banner7 {
    background-color: rgb(220, 237, 232);
  }
  .banner8 {
    background-color: rgb(0, 0, 0);
  }
  .banner9 {
    background-color: rgb(242, 242, 242);
  }
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
  .slick-next {
    position: absolute;
    right: 60px;
    z-index: 2;
  }
  .slick-prev {
    position: absolute;
    left: 0;
    z-index: 2;
  }
  .slick-dots {
    position: absolute;
    bottom: 10px;
    text-align: center;
    color: white;
  }
  .slick-dots li {
    width: 10px;
    height: 8px;
    font-size: 0;
    vertical-align: top;
    cursor: pointer;
  }
  .slick-dots li button {
    cursor: pointer;
  }
  .slick-dots li button::before {
    color: #000;
    &:nth-child(1) {
      color: #fff;
    }
    &:nth-child(2) {
      color: black;
    }
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #ffffff;
  }
`;
const DivPre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99;
  line-height: 30px;
`;
const DivNext = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 99;
  line-height: 30px;
`;
const SlickArrowPrev = styled.button`
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUwIDYwTDMwIDQwbDIwLTIwIi8+PC9zdmc+)
    no-repeat;
  width: 80px;
  height: 80px;
`;
const SlickArrowNext = styled.button`
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMwIDIwbDIwIDIwLTIwIDIwIi8+PC9zdmc+)
    no-repeat;
  width: 80px;
  height: 80px;
`;
const BannerItem = styled.div`
  position: relative;
`;
const ItemInner = styled.div`
  margin: 0 auto;
  width: 45vw;
  max-height: 480px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
const ImgBox = styled.div`
  position: relative;
  padding-top: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .banner-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfOTAg/MDAxNjY2OTQ5MzI0OTcy.wtWZFAk2xWROo5L_Xt1_Fr58mY1W06MN8SomUFl-Kswg.0ul0vU6euaKiBko08qW0E4I6cFoXwx3RqEWEuW62Zcog.JPEG/a_b74657bb57f94aa5b785e429ea5cebee.jpg?type=m_2560);
    width: 525px;
    height: 476px;
  }
  .banner-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDFfMjI0/MDAxNjY3MjY0Mzc0MDMy.WXDrmlo-tMIYJaqQJm48-E8mcwqba2v3xhMdVtk4sRsg.8atih317ZzFHEVpJddD2uyasz8hiul2rKqXTcdJqFTMg.JPEG/a_6363b3edb9a141d3853d82e155f76459.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDJfMTA4/MDAxNjY3MzY1Nzg4NDQz.1hr0TrSk-8lHorkQF7e02qEFHqI-KByBApfTVQ8assMg.935C5IAH4kcq53S4wUlpaqq_XmtUW_VHon2AeyovJBog.JPEG/a_09631650c44e4b969c0d7bf64959212b.jpg?type=m_2560);
    width: 516px;
    height: 468px;
  }
  .banner-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMjQ4/MDAxNjY2OTQ1ODIwMTkz.6yLYh2vFuhkR_8XOzOAjDbj3aud5CyT8iU3ZKKKaWq0g.U68sTnIEIcWJi728e3K6gcJXTP5J6hUiPi6owYvN-FIg.JPEG/a_d18fed90b3d04341a2644b17b7aa5ca9.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDJfNzcg/MDAxNjY3MzgyOTA3NTAx._NDVAkY2CMavQ0r666bkLHCC32_IR8a8a2PKrszGpBEg.wNfGYXxP-qXVa8D2KDuJ9OSxEkNZRAb1ByBdhV6URI0g.JPEG/a_0abf3746a7724018a1b8339e0df368bb.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image6 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfOTUg/MDAxNjY3MTkzNDQ0NTM0.2fy-0Mqi2vCqkz_cCvf8kqKvkGa-at23kKHWoOGnMdQg.oINcko8fYga2Z53sVk-7-ZOCccwJkqO_9MolWImKAe0g.JPEG/a_96f7ada9a4594f89a5ba9723568c71d3.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image7 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfNzYg/MDAxNjY2OTQ0Mjk4MjIw.ODVD0x0mPcZ6X8OuoEsL98De4Bi57mEAIlUj233sDRsg.ygr9B_zRlyx0gonK7gRaD7bqy1zZYfKvqScVx3_5v8og.JPEG/a_5906d8451d9d444ca0f7725773af0a55.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image8 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDNfMTE3/MDAxNjY3NDUxMDA5OTc5.SIePb0hDDqeQROOoL5JzG_EojOdUfi_KygDzwBBkAzcg.iYkrMQVGJUNSDJqVRt6A3lQcF-Y866emxEvgB9rhF6sg.JPEG/a_203b4fae84b7476c9e060740986dede1.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
  .banner-image9 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDFfMjQ0/MDAxNjY3MjMyODE4NDEy.pAoiYiKpIHRxpTwPgtKdCCII71uGCo36VYZBFZDtmDQg.GImqj2ybdUCev-zQaGB5R7vO8CtIH7BJiAMkhSNC1-kg.JPEG/a_6e757c0e09f446ee983fa77fa1124a38.jpg?type=m_2560);
    width: 1245px;
    height: 468px;
  }
`;
const BannerImage = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
`;

const ShortcutCollection = styled.div`
  margin-top: 50px;
  padding-top: 0;
  padding-bottom: 0;
`;
const ShorcutItemsWrap = styled.div`
  margin: 0 auto;
  padding: 0 32.5px;
  max-width: 1280px;
  .bottom-items {
    margin-top: 16px;
  }
  @media (max-width: 768px) {
    padding: 0 17px;
    margin: 0 auto;
    max-width: 1280px;
    height: 100%;
    .bottom-items {
      margin-top: 16px;
    }
  }
`;
const ShorcutItems = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;
const ShorcutItem = styled.div`
  text-align: center;
  width: calc(20% - 15px);
  display: inline-block;
  margin: 0 7.5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: calc(20% - 8.5px);
    margin: 0 4px;
    cursor: pointer;
  }
`;
const ShorcutItemImgWrap = styled.div`
  border-radius: 10px;
  height: 100px;
  position: relative;
  padding: 1px;
  @media (max-width: 768px) {
    padding-top: 100%;
    position: relative;
    padding: 1px;
    border-radius: 50%;
    text-align: center;
  }
  .top-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMDdfMjcy/MDAxNjY1MTM4ODMwODk2.7wp-TrHdYWm2C57ME9NIN585TCb53kLH_70dV64dAJEg.LIzM9u80hVrrz14DG59EpYWUk5ouDEE91GvWeHmj52Ig.JPEG/a_137b762cd09d4a75a76b104191da2491.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMDdfMTEw/MDAxNjY1MTM4ODI4Mjk5.lA_FVYmGxWklb_iQp8yfD_6AuZrDcr2q-ZrSEmIJYywg.FmlrOf228yYKdtkn7m-zw0FgqfRD3iiu1sZWaX-YRSgg.JPEG/a_308c7d17e0c64fa9b79e2c3990c7f7a1.jpg_webp);
    }
  }
  .top-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA3MDZfNDUg/MDAxNjU3MDU5MTcxNTQ2.E3TjdMy69xlhTPTwk0Q1ni8NjwEolZQ7iD_rpq4wJq0g.LcX4kS2TB6wWEJq_v4fgIgjNsTqAkkbhPzQnwbtikKEg.JPEG/a_c6ad36c470b64f93a56afa9871f4cacc.jpg?type=m_webp);
  }
  .top-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA3MDZfMTY1/MDAxNjU3MDU5MjA0NDUy.CV4j0rUpBLasZDDpvGIJk_RJzlFA4e882J2Noq47CNYg.lHuMCov6Xcza7e9fRkWzFM8n5nQ5TC5732vc3V3YNcwg.JPEG/a_ce2e703a1c8c4d7ab506b0b054317d95.jpg?type=m_webp);
  }
  .top-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMTg5/MDAxNjY2OTQzMDAyNDYw.HIYCXF-8SLv9omXcslvwV22a7uSPxvS-nvRIi2AO4jAg.4beIQWsM-23ixj425_CkrwnBBp_T_3rzek5rxS2ytNQg.JPEG/a_c3e5df294e654660b770ae9c7d7998e1.jpg_webp);
  }
  .top-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDFfNTUg/MDAxNjY3MjY1NjQ3OTg3.Cf3bKUU1VjhPxa9GhkfU96tYsaPwZk3lIhbDsAprzAgg.cgP4OAzlUGkLC-NoCqauI9etixG_5U1M_AdWgJdnUaYg.JPEG/a_2586915f42914b92916022f2c8671ef8.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDFfOTIg/MDAxNjY3MjY1NjQ1MzIy.oj7KlRdPhMMFd_fAWKK5rMjyUcHRdWZCtibMv7z2MHUg.6XMunR9WCJX16eIeTWx4G54y0I8e_Mi_MHKI5kwy2I4g.JPEG/a_decd182fa1984fe38bf28fd61c558b96.jpg_webp);
    }
  }
  .bottom-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfMjE5/MDAxNjY3MTk5MzIxOTIx.JYK4FQeVfSbXwWNADzMcsep13cB3T0TZUchl9Z19NNIg.rru_5HOxbK1L3YlEaJolO04YHiPt2mOOkTtm29mt47sg.JPEG/a_4fa0e8b531e34a0083a036929b22a55f.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfMTkx/MDAxNjY3MTk5MzE5MzUz.vRd8IEFf6RARocayLicrheyQ9WjSfS9cEgMIZt-tzbYg.lvx5vjtPJzoM6pBAm-Sq1Q36ETZaHdFTheCBBzk_gSkg.JPEG/a_86fce933810c45b3b486048a184875bf.jpg_webp);
    }
  }
  .bottom-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfNDAg/MDAxNjY3MTk5MzQ2NTQz.URILBpL_P105lOhSphaLc8qmx8sn2-eRahuxWnF22hkg.X54uCFwrIUJaXBeDgLTYS8odbBagoBQgav3uWB1RPbog.JPEG/a_1a3c2e04c86f4656958f6b96f41278ae.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfMzIg/MDAxNjY3MTk5MzQ0MDI1.geMXs_v1JVgQIVr5NG4HwTDka__1wvSmnqBgBLDSsqsg.iTJhZ05yu-XMG8yaWWEMuSlZiF2Edf24HB5z8H7nQ9Mg.JPEG/a_6eb12ad9564c42d68251c3319123e1ca.jpg_webp);
    }
  }
  .bottom-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfNzMg/MDAxNjY3MTk5MzYzNjAx.WKggNpcqeyOaxaYLdhvJQ75bpOO9vQ7kQJrabDqWx_0g.ZoVbGIhXeM6kNs20GAAbrmumsTnqA2dj1bwHhR85n3cg.JPEG/a_a0423979ac6141c589ec9f8fdfdca9d2.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDRfMTM1/MDAxNjY3NTI2MjMxNjkx.kjFOV48UlOPbiGqo0YKiLbF9zYRxP7zyRtL6cSlzwkog.jEX7n_UI9vf2tqGF-gn8rodGzKrb_0wAoHiTNdZH45sg.JPEG/a_34657e55add54725a6a790e2a44aafab.jpg_webp);
    }
  }
  .bottom-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA5MjlfMjM3/MDAxNjY0NDE2NTY0OTgy.2P8enbFDZnz3jkrPCDfO0MAet54Yb1gwbfTIUHV6Ea0g.fKfNXJV-gJ1cyetsHEl-8pckNXZMAqxaqYPBb-ycCU0g.JPEG/a_b5933ca2914a426d8d36ef59f4a7bc80.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjA5MjlfOTgg/MDAxNjY0NDE2NTYxMjA0.i-GRNQu3-DCSXUGnP91u8t11BB2T1osZZArgFOaneyUg.4jtVVRn1wNKFPJ1mZZhMtJN4gclltLUzTdYT6FxAoMwg.JPEG/a_add7ea5309054b6f98133af3f105ac28.jpg_webp);
    }
  }
  .bottom-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzBfNTIg/MDAxNjY3MTMzNDY3NDkw.JPIhJOinJN69uSI2kZ5TamWD6FvmtYdGx_TtJFi1KmIg.BUewZOy0LsgPZcrc8RBu5FbyNqjfDAFRUwFmR2ooEIgg.JPEG/a_41ba623f09d94beaba6ff061cac42e46.jpg?type=m_webp);
    @media (max-width: 768px) {
      background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzBfMTYy/MDAxNjY3MTMzNDY1NDUw.d6wKFVYPXlFdgCbWGuAMp92aGzvALSy-veYJYZ3E-xkg.9DIQUfK0bWD0hSQ6D_KRVIPRkhZ0x4KHExUzBnzvqKgg.JPEG/a_95ddabf7e84a49ec8f2032c00cc5574d.jpg_webp);
    }
  }
  .top-Brand-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTU2/MDAxNjYxMTMyMjc3ODYy.o_bZ8NwB1fDxBycvBadiwSjJ3sJrAfNcgzHXZO3SCskg.U9-45gdxEevSSwnM8xAHqDBdIsBhbR4TCwK3xrBmMaIg.JPEG/a_41ee4f97c403419784fe145cbfe9e950.jpg?type=m_webp);
  }
  .top-Brand-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfNzgg/MDAxNjY2OTU0NTgyNDYw.KLWChG-InQ3i_UOzcInspipH3cbvMiDCHCC9kpBjWUUg.e6vB8zZGmhr6WKUE3GuNaozUhuPnVxeAVSIhiLTH7LYg.JPEG/a_b4564e0bf4f34ea999cd2fe4e737f06c.jpg?type=m_webp);
  }
  .top-Brand-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMTMg/MDAxNjY2OTUzODA3Mzk4.tiJG0xXTv_zIqO7AxGXdyISa3D0iK_bJMegLPZXaxpgg.QmYwDZaIclIzrR7bEDcNdzRaUo2LETW-111owl8PGwog.JPEG/a_bb343fa35a234bf398facffa9b2a7fd8.jpg?type=m_webp);
  }
  .top-Brand-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA4MjJfMjUy/MDAxNjYxMTMyNTE3NDkw.WBGPz7YTPljlTjBVVGNKHY8a0UohliA2ahbwJmqF4rAg.4QYXLQna4D-CHul0MSeru4vP1dcn-qRVkPDuezT3_5sg.JPEG/a_5f636bae775f4b5f8538d969e6916238.jpg?type=m_webp);
  }
  .top-Brand-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMTE0/MDAxNjY2OTU0Mzk2Njcx.QBoVG3rXCsOEBbVULdry1PQyEQmm4xCQz0qR9Lc4MGIg.hXY6WEZK5aCDMG_5BzrrKb2VKVmKuFrbnnFdNOjq2pUg.JPEG/a_88e7edc7e3c54afca88062f7e8dcef6a.jpg?type=m_webp);
  }
  .middle-Brand-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA4MjJfNTMg/MDAxNjYxMTMyMzQ4Njg5.RsvtKwAj6FHj1FDDL5TY1ycECnCPB12EttYPY5M1gBsg.vpRsBYsFuP-GSd4ODRJe2P4TkiVFE9Buu6Yj777Kesog.JPEG/a_d8ca5e787c1a47f086c405177abc9694.jpg?type=m_webp);
  }
  .middle-Brand-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfNDgg/MDAxNjY2OTU0MzgyMjY2.JArq2oFJ-q5lOSizKrsQ5rP_fOMRK8Mv2ZPFF-fYohYg.c_ovVowl3WX3Skr-GNWGBGvSRxeCDIrO-P3-HXk0wSMg.JPEG/a_85b9b21b595548a58c149efbc0cfed18.jpg?type=m_webp);
  }
  .middle-Brand-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfODgg/MDAxNjY2OTU0NzIyNDEz.Tyj3Mlv3y_qMcIQduyYkE872St7VcyqP_-IfcD2So7Qg.5G1ku0ieazsqvjTm6cSe_XFNzs8_EmKyPlWut9ZfPDwg.JPEG/a_41a225143a4c453c9d8017f04cd6a067.jpg?type=m_webp);
  }
  .middle-Brand-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMjE5/MDAxNjY2OTU0NDU1NTk0.XyUypJF6lRR2YZc9K0_tQWDJUhxV1j31zuMluUyev8Ag.OeHDhWT8WVzzdXV3VUYY9Yrs_4q8NTp3lRB5lMd6z0Yg.JPEG/a_a5b0fd60a23f4ee3bf79c4ff3f37570b.jpg?type=m_webp);
  }
  .middle-Brand-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA5MzBfMjMz/MDAxNjY0NTM2NzM2Mzc1.6w2bcZkBccLv112TzFBOvWKzBsx8qE4A4Q4ODq5uz6Ig.qOOuTt5_Ch5khC3ODXUGnh1s1ErTwxg42w4fG2lzzDAg.JPEG/a_54af49e527524cdc98db28d6fb1ffade.jpg?type=m_webp);
  }
  .bottom-Brand-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMjcw/MDAxNjY2OTU0NTE0Nzg1.vwTm8ua7xqJPpxze2FUhlE3zT8PoGnmPmYq4Zxp_yPQg.tiYcYtw2BAho5jXfhbDqdFDfIkEZkSnEqtIu9mBISUYg.JPEG/a_d1d2bb41866948a9a81fd4832e2db5a5.jpg?type=m_webp);
  }
  .bottom-Brand-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA4MjJfMjM2/MDAxNjYxMTMyMzE0NTg5.f8aopPNBfz2TiMXJPHCA4cDSE564M-5m_1CVOqBaMJcg.LP8fIRuj3KwekpzWqPNM1E7udU5MgzCeyeVG5hL8oFog.JPEG/a_dd2fc85edf3b45e18d1c1b83180c004c.jpg?type=m_webp);
  }
  .bottom-Brand-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjhfMTU3/MDAxNjY2OTU0MjUyODE5.fMQ0TMKn0xHN0i8O-I7VbWr2P_mHlDjmdwqXVgZ1ka4g.5Cfg33--YO9gUQm-cgqWBWh5k82PUb1Z797L-_MGMtIg.JPEG/a_a714b23eb7b0458a8f65735b79e430c2.jpg?type=m_webp);
  }
  .bottom-Brand-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMDdfMTEx/MDAxNjY1MTM0ODM4MDMw.HzVvSOi98fjQmP3oroAmNe2sR32FZDFbobzy7tjpIZ4g.reteIbS3HkHf-UxIRYF-BIHFxCpH1JrRcEFSmcJVxfMg.JPEG/a_02632df7a3a049e7b6037802a5a206b4.jpg?type=m_webp);
  }
  .bottom-Brand-image5 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA4MjJfMTEw/MDAxNjYxMTMyNDI3Njg4.gNnZj-Nb_7BNlNaJ0KMwEoxtp1E3O_PYvNFiwz0USPEg.cVgu4uf4pB24POhPepRYihXTIG146a9_iShSKfCPFnsg.JPEG/a_ecbebc5f0f354369bac78d86766ed990.jpg?type=m_webp);
  }
`;
const ShortcutItemImgBg = styled.picture`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  height: 100%;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  display: inline-block;
  margin: 0 7.5px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    border-radius: 50%;
    margin: 0px;
  }
`;
const ShortcutItemTitle = styled.p`
  font-size: 15px;
  letter-spacing: -0.15px;
  color: #333;
  margin-top: 8px;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
    display: -webkit-box;
    letter-spacing: -0.7px;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: keep-all;
    margin-top: 6px;
    word-wrap: break-word;
  }
`;

const HomeProducts = styled.div`
  margin-top: 50px;
  padding-top: 0;
  padding-bottom: 0;
`;
const ProductTitleBox = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1280px;
`;
const ProductTitle = styled.div`
  font-size: 20px;
  letter-spacing: -0.1px;
  font-weight: 700;
  color: #000;
`;
const ProductSubTitle = styled.div`
  font-size: 14px;
  letter-spacing: -0.21px;
  color: rgba(34, 34, 34, 0.5);
  margin-top: 5px;
`;
const ProductListWrap = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  overflow-anchor: none;
`;
const ProductList = styled.div`
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  padding: 0 28px;
  width: 100%;
`;
const ProductItem = styled.div`
  clear: left;
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin: 20px 0;
  padding: 0 12px;
  width: 25%;
`;
const ProductItemInner = styled.a`
  display: block;
  background-color: #fff;
  border-radius: 12px;
`;
const ProductThumbBox = styled.div`
  background-color: #ebf0f5;
  border-radius: 8px;
`;
const Product = styled.div`
  overflow: hidden;
  position: relative;

  .product-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDNfMTYx/MDAxNjY3NDM5NzIyNzUx.KSqw_mgZNKuTaVS6YolFzDLvMcdku9o88chqUpTbD2Eg.Cp4R2ZXedJqxM7MgtijL5Tq5gAlTIPC-8WzrVOS-8Dgg.PNG/a_3e9890ac8a524405a24906df2346995c.png?type=m_webp);
  }
  .product-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDNfODYg/MDAxNjY3NDY2MTU2ODM0.SUevcMaXST-4lwdjEIoWcKh9JSCCAgJ8RvHprM4w-3wg.BrPgUrOGH3IJRG1z6yZSzCTSGnyc_GPuwymx3Ce7lhog.JPEG/a_48573346799043a4b8fbff65117ebb06.jpg?type=m_webp);
  }
  .product-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjZfNjUg/MDAxNjY2NzQ4NjU5OTUy.oeil0ZaKJeWw0Kx-MdBMcGJPJR8UAiv_xQCNWNxirwog.eescX5k51YkV56bUsA9Sfwh7TTXQp40KvBjs9GGCY-Ug.JPEG/a_6a418f1dd878403fa12345cef47e918e.jpg?type=m_webp);
  }
  .product-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMjRfMjUx/MDAxNjY2NTk2ODYxMTYy.eYxZWG1RyQiM4_ZW6PkMKpFiCnfhCCcw9Vd_co56wy4g.i1vcv6SSyE6rnA5UNLdNsA0uGaSw2M_xriWLv6xNqr0g.JPEG/a_176b76b5e0b14d9da56a730d96feb1f4.jpg?type=m_webp);
  }
  .popular-product-image1 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDNfMTIg/MDAxNjY3NDQwNTA1NjM2.hgXEdLeuPgWMh8try3a6MQdLfSgaS2JNQdkAOCdhoXIg.ytA9Iy64y2Yo8OiH6I13mwlOS6hVdzCk8dsqqWLFWoUg.JPEG/a_e13d8ccda9064571ba8e5075b533c160.jpg?type=m_webp);
  }
  .popular-product-image2 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjA2MTVfMjYw/MDAxNjU1MjgzNjk2Mzk3.gh8n5rs7p-pWVqzIhNh7yj_KdyjLFBeJr9QbsDumoFEg.KdvPfvgBYmjm7MKKhcbIEQIP6FGeuof_GnmcDUgrvyAg.PNG/a_baa1ccea3726495badba419dfede63f9.png?type=m_webp);
  }
  .popular-product-image3 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMjExMDNfNiAg/MDAxNjY3NDQwODA5MDQ1.j3HqtgMAfiuVh5X2jS4fPZqhgZ-o3O0f6DAf6GEKChMg.zR3iWaSb7AYbIQonwGm695xux05ljW2PE0xL1i9UUMwg.JPEG/a_662421331b3947ffbd804a0d35eae619.jpg?type=m_webp);
  }
  .popular-product-image4 {
    background-image: url(https://kream-phinf.pstatic.net/MjAyMTA3MjhfMjIg/MDAxNjI3NDQxMDA1NjE5.HOgIYywGZaaBJDqUzx2OnX9HAxoOWPvuWHqUn_LZGcgg.VYIuOfA5_GgjBGRowv6dmQuAOPtUvmAxbGpOyUCOCtYg.PNG/p_9d8ed1a74d2540ab9842e63363607bf4.png?type=m_webp);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
  }
`;
const ProductImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  height: 208px;
  border-radius: 8px;
  image-rendering: -webkit-optimize-contrast;
`;
const ButtonWish = styled.div`
  position: absolute;
  top: 12px;
  right: 17px;
  padding: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;
  background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrma0SwUE8LzaehB52rMCSoCtXwc53ILjmQ&usqp=CAU);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: transparent;
`;
const InfoBox = styled.div`
  padding-top: 9px;
`;
const Brand = styled.div``;
const BrandText = styled.span`
  overflow: hidden;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  color: #333;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  border-bottom: 1px solid #222;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  max-width: 100%;
`;
const Name = styled.p`
  max-height: 44px;
  margin-bottom: 2px;
  font-size: 14px;
  line-height: 17px;
  margin-top: 8.5px;
  max-height: 34px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  font-size: 14px;
  color: #222;
`;
const Price = styled.div`
  padding-top: 7px;
`;
const Amount = styled.div`
  font-size: 0;
  line-height: 0;
`;
const DisCountRate = styled.span`
  color: #f15746;
  margin-right: 2px;
  display: inline-block;
  vertical-align: top;
  line-height: 17px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.04px;
`;
const Num = styled.em`
  display: inline-block;
  vertical-align: top;
  line-height: 17px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.04px;
`;
const Desc = styled.div`
  line-height: 5px;
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
`;

const ButtonProduct = styled.div`
  padding: 0 32px;
  text-align: center;
  a {
    padding: 0 30px;
    margin-top: 20px;
    height: 42px;
    line-height: 40px;
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
  }
`;

const Bannder = styled.div`
  margin-top: 50px;
  padding-top: 0;
  padding-bottom: 0;
`;
const Banner2Img = styled.div`
  background-image: url(https://kream-phinf.pstatic.net/MjAyMjEwMzFfNDYg/MDAxNjY3MTg1NDYyNjc0.2Vb7XJhsAeUUSbree2v99RMAcAG99BHoRpqtUMSxpKAg.VNOsl5UYTwzEu20AKVgdiwDuXhZYFli6dCg9St7GrbYg.JPEG/a_9a770fc5d86143a49dd2cb8b1fab7b72.jpg?type=m_2560);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  width: 1224px;
  left: 50%;
  height: 460px;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  max-height: 480px;
`;
const Badge = styled.div`
  margin-top: 4px;
  position: relative;
  display: inline-block;
  vertical-align: top;
  line-height: 11px;
  padding: 4.5px 5.5px 4.5px 17px;
  color: #31b46e;
  background-color: #f2f9f6;
  border-radius: 2px;
  font-size: 11px;
  letter-spacing: -0.33px;
  height: 20px;
  &::before {
    content: "";
    position: absolute;
    left: 3.5px;
    top: 3px;
    width: 11px;
    height: 13px;
    background: url(https://kream.co.kr/_nuxt/img/ico-express.8dac9dc.svg) 0 0
      no-repeat;
    background-size: 11px 13px;
  }
`;
