import { createContext, useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, login: null });

  const setAuthData = (data) => {
    setAuth({login: data});

    setCookie(null, 'login', JSON.stringify(data), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
  };

  const { login } = parseCookies('login');

  useEffect(() => {
    setAuth({ loading: false, login: login });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;