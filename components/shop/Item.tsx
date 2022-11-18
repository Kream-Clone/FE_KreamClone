import styled from "styled-components";
import ExpressIcon from "../../Icon/express_icon.svg";
import Bookmark from "../../Icon/bookmark.png";
import BookmarkRed from "../../Icon/bookmark_red.png";
import Comment from "../../Icon/comment_icon.png";
import { useEffect, useState } from "react";
import axios from "axios";
import useInfiniteScroll from "components/hooks/useInfiniteScroll";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Item() {
  const router = useRouter();
  const [checkMark, setCheckMark] = useState(false);

  const [data, setData] = useState([]);

  const [page, setPage] = useState(10);

  const getData = async () => {
    return await axios
      .get(`http://kellystorage.shop/search?idx=${page}`)
      .then((res) => {
        let reverseData = res.data.data.reverse();
        setData(data.concat(reverseData));
        setPage((pre) => pre + 10);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getDetailItem = async (itemId) => {
    try {
      const res = await axios.get(
        `http://kellystorage.shop/products/${itemId}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const { isEnd } = useInfiniteScroll({ onScrollEnd: getData });

  useEffect(() => {
    getData();
  }, []);

  return (
    <SearchResult>
      <ResultList>
        {data.map((item) => (
          <Link
            as={`/products/${item.id}`}
            href={{
              pathname: `/products`,
              query: {
                itemBrand: item.brand,
                itemName: item.name,
                itemTranslatedName: item.translatedName,
                itemPrice: item.price,
                itemProductImage: item.productImage,
              },
            }}
          >
            <ResultItem
              onClick={() => {
                getDetailItem;
              }}
            >
              <ItemInner>
                <Product>
                  <img src={item.productImage}></img>
                </Product>
                <ProductInfo>
                  <Title>
                    <p>{item.brand}</p>
                    <p>{item.name}</p>
                    <p>{item.translatedName}</p>
                  </Title>
                  <ExpressBtn>
                    <img src={ExpressIcon}></img>
                    <span>빠른배송</span>
                  </ExpressBtn>
                  <Price>
                    <Amount>{item.price}</Amount>
                    <Desc>즉시구매가</Desc>
                  </Price>
                </ProductInfo>
              </ItemInner>
              <Figure>
                <Wish>
                  <img
                    src={checkMark ? BookmarkRed : Bookmark}
                    onClick={() => setCheckMark(!checkMark)}
                    alt=""
                  />
                  <span>13.1만</span>
                </Wish>
                <Wish>
                  <img src={Comment} alt="" />
                  <span>13.1만</span>
                </Wish>
              </Figure>
            </ResultItem>
          </Link>
        ))}

        {/* <Product/> */}
      </ResultList>
    </SearchResult>
  );
}

const SearchResult = styled.div``;
const ResultList = styled.div`
  margin: -20px -10px 0;
`;

const ResultItem = styled.div`
  cursor: pointer;
  width: 25%;
  position: relative;
  float: left;
  margin: 20px 0;
  padding: 0 10px;
  transition: all 0.4s ease-in-out;
  &:nth-child(4n + 1) {
    clear: left;
  }
`;
const ItemInner = styled.div`
  display: block;
`;
const Product = styled.div`
  background-color: rgb(235, 240, 245);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  padding-top: 100%;
  img {
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const ProductInfo = styled.div`
  padding-top: 9px;
`;
const Title = styled.div`
  p {
    &:first-child {
      display: inline-block;
      vertical-align: top;
      line-height: 16px;
      font-size: 14px;
      letter-spacing: -0.21px;
      font-weight: 700;
      color: #333;
      text-decoration: underline;
    }
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    &:last-child {
      line-height: 14px;
      font-size: 12px;
      letter-spacing: -0.06px;
      color: rgba(34, 34, 34, 0.5);
    }
  }
`;
const ExpressBtn = styled.div`
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
  img {
    position: absolute;
    left: 3.5px;
    top: 3px;
    width: 11px;
    height: 13px;
    background-size: 11px 13px;
  }
`;
const Price = styled.div`
  padding-top: 11px;
`;
const Amount = styled.div`
  line-height: 17px;
  font-size: 14px;
  font-weight: 700;
`;
const Desc = styled.div`
  line-height: 13px;
  font-size: 11px;
  color: rgba(34, 34, 34, 0.5);
`;
const Figure = styled.div`
  padding-top: 12px;
  margin: 0 -8px;
`;
const Wish = styled.div`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  vertical-align: top;
  padding: 0 8px;
  height: 20px;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    margin-left: 2px;
    font-size: 13px;
  }
`;
