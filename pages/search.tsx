
import Item from 'components/search/Item';
import Filter from 'components/search/leftFilter';
import Sort from 'components/search/topSort';
import styled from 'styled-components'
import Top from '../components/search/top'
import SearchTrend from '../components/search/trend';

export default function Search () {
  return (
    <Layer>
      <Top />
      <SearchTrend/>
      <BannerSide>
        <Banner></Banner>
      </BannerSide>
      <Content>
        <Filter/>
        <SearchContent>
          <Sort/>
          <Item/>
        </SearchContent>
      </Content>
    </Layer>
    
  )
}

const Layer = styled.div`
   border: solid red 1px;
overflow: hidden;
`
const BannerSide = styled.div`
border: solid red 1px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
`
const Banner =styled.div`
  height:100px;
`
const Content = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 0 40px 80px;
    max-width: 1280px;
`

const SearchContent = styled.div`

      -webkit-box-flex: 1;
    flex: 1;
`