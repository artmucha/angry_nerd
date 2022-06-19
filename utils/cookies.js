import { parseCookies, setCookie, destroyCookie } from 'nookies';

export const getUserCookie = () => {
  const cookies = parseCookies();
  return cookies?.token;
};

export const setUserCookie = (currentUser) => {
  setCookie(null, 'token', currentUser.token, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};

export const removeUserCookie = () => destroyCookie(null, 'token');