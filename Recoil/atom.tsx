import { atom, selector, selectorFamily, useRecoilValueLoadable } from "recoil";
import axios from "axios";
import { v1 } from "uuid";

// Join Page
export const joinUserEmail = atom<string>({
  key: `joinUserEmail/${v1()}`,
  default: "",
});

export const joinUserPassword = atom<string>({
  key: `joinUserPassword/${v1()}`,
  default: "",
});

export const joinUserSize = atom<string>({
  key: `joinUserShoeSize/${v1()}`,
  default: "",
});

export const joinUserInfo = selector({
  key: `joinUserInfo/${v1()}`,

  get: async ({ get }) => {
    try {
      const email = get(joinUserEmail);
      const res = await axios.post("http://54.180.134.46/join", {
        email,
        // joinUserPassword,
        // joinUserSize,
      });

      console.log(res);
      return res.data;
    } catch (err) {
      throw err;
    }
  },
  set: ({ set }, newValue) => {
    const email2 = newValue;
    set(email2, newValue);
    // set(joinUserEmail, newValue);
    // set(joinUserSize, newValue);
  },
});

// // 테스트
// export const githubRepo = selectorFamily({
//   key: "github/get",
//   get: (githubId) => async () => {
//     if (!githubId) return "";

//     const { data } = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts`
//     );
//     return data;
//   },
// });

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
