import Item from "components/shop/Item";
import Filter from "components/shop/leftFilter";
import Sort from "components/shop/topSort";
import styled from "styled-components";
import Top from "../components/shop/top";
import SearchTrend from "../components/shop/trend";
import SimpleSlider from "components/shop/slick";
import Seo from "components/common/Seo";

export default function Shop() {
  return (
    <>
      <Seo title="SHOP | KREAM" />
      <Layer>
        <Top />
        <SearchTrend />
        <BannerSide>
          <SimpleSlider />
        </BannerSide>
        <Content>
          <Filter />
          <SearchContent>
            <Sort />
            <Item />
          </SearchContent>
        </Content>
      </Layer>
    </>
  );
}

const Layer = styled.div`
  overflow: hidden;
`;
const BannerSide = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
`;
const Banner = styled.div`
  border: solid black 9px;
  padding-top: 0;
  position: relative;
`;
const Content = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 0 40px 80px;
  max-width: 1280px;
`;

const SearchContent = styled.div`
  -webkit-box-flex: 1;
  flex: 1;
`;
