import { atom, selector } from "recoil";
import axios from "axios";
import { v1 } from "uuid";

export const userEmail = atom({
  key: `userEmail/${v1()}`,
  default: "",
});

export const joinUserInfo = selector({
  key: `joinUserInfo/${v1()}`,
  get: async ({ get }) => {
    // const response = await axios.post("kellystorage.shop/join");
    // return response.data;
  },
});
