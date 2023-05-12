import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

// should go into a utils folder

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  // must start with use keyword
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
