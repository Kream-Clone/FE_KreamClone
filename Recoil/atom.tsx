import { atom, selector } from "recoil";
import axios from "axios";
import { v1 } from "uuid";

// Join Page
export const joinUserEmail = atom({
  key: `joinUserEmail/${v1()}`,
  default: "",
});

export const joinUserPassword = atom({
  key: `joinUserPassword/${v1()}`,
  default: "",
});

export const joinUserSize = atom({
  key: `joinUserSize/${v1()}`,
  default: "",
});

export const joinUserInfo = selector({
  key: `joinUserInfo/${v1()}`,
  get: async () => {
    const res = await axios.post("kellystorage.shop/join", {
      joinUserEmail,
      joinUserPassword,
      joinUserSize,
    });
    console.log(res.data);
    return res.data;
  },
});

// Login Page
export const loginUserEmail = atom({
  key: `loginUserEmail/${v1()}`,
  default: "",
});

export const loginUserPassword = atom({
  key: `loginUserPassword/${v1()}`,
  default: "",
});

export const LoginUserInfo = selector({
  key: `loginUserInfo/${v1()}`,
  get: async () => {
    const res = await axios.post("kellystorage.shop/login", {
      loginUserEmail,
      loginUserPassword,
    });
    console.log(res.data);
    return res.data;
  },
});
