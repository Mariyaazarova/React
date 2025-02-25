import { useState } from "react";
import { AuthContext } from "./auth-context";

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthorized: false });

  const toggleAuth = () => {
    setAuth((prev) => {
      return prev.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            name: "User",
            userId: "a304959a-76c0-4b34-954a-b38dbf310360",
          };
    });
  };

  const getUserName = () => {
    return auth.isAuthorized ? auth.name : null;
  };

  return (
    <AuthContext.Provider value={{ auth, toggleAuth, getUserName }}>
      {children}
    </AuthContext.Provider>
  );
};
