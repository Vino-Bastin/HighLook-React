import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  cookies.set(name, value, { path: "/", secure: true });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removerCookie = (name) => {
  cookies.remove(name, { path: "/" });
};

export const cookie = cookies;
