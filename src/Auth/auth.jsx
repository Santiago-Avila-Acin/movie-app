import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import usuarios from "../Usuarios"

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  

  const [user, setUser] = React.useState(null);
  const [password, setPassword] = React.useState(null)

  const login = ({ user, password }) => {
    setUser({ user });
    setPassword({ password })
    
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    setPassword(null)
    navigate('/');
  };

  const auth = { user, password, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const auth = React.useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  useAuth,
};