
import Item from 'components/search/Item';
import Filter from 'components/search/leftFilter';
import Sort from 'components/search/topSort';
import styled from 'styled-components'
import Top from '../components/search/top'
import SearchTrend from '../components/search/trend';
import SimpleSlider from 'components/search/slick';

export default function Search () {
  return (
    <Layer>
      
      <Top />
      <SearchTrend/>
      <BannerSide>
         <SimpleSlider />

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
  border: solid black 3px;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
`
const Banner =styled.div`
    border: solid black 9px;
    padding-top: 0;
    position: relative;
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
