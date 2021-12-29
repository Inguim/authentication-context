import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import randomString from "../utils/randomString";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    console.log(storagedToken, storagedUser)

    if (storagedToken && storagedUser) {
      setSigned(true);
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  function Logout() {
    localStorage.removeItem('@App:user');
    localStorage.removeItem('@App:token');
    setUser(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, setSigned, Login, Logout, setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

async function Login(setUser, setSigned, { email, password }) {
  // // const response = await api.post('/login', {
  // //     email: 'example@gmail.com',
  // //     password: '1234'
  // })
  const valuesTologin = {
    email: "example@gmail.com",
    password: "1234"
  };

  if(valuesTologin.email === email &&  valuesTologin.password ===  password) {
    const response = {
      data: {
        token: randomString(50),
        user: {
          email: valuesTologin.email,
          name: 'Udry'
        }
      }
    };
    setUser(response.data.user);
    setSigned(true);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
    
    localStorage.setItem('@App:user', JSON.stringify(response.data.user));
    localStorage.setItem('@App:token', response.data.token);
  }
}

export default AuthContext;


export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}