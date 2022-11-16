import axios from 'axios';
import { atom, selector, useRecoilState } from 'recoil';

export const dataState = atom({
  key: 'dataState',
  default: [],
})

export const pageData = atom({
  key: 'pageData',
  default: '',
})

export const getData2 = selector({
  key : 'getData2',
  get : async ({get}) => {
    const response = await axios
    .get(`http://kellystorage.shop/search?idx=10`)
    return response.data.data
  },  
  set: ({set}, newValue)=> {
    set(dataState, dataState + newValue)
  }
})