import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function ContextProvider({ children }) {
  const [token, setToken] = useState(() => sessionStorage.getItem("token") || "");
  const [userRole, setUserRole] = useState(() => sessionStorage.getItem("role") || "");

  const updateToken = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const updateUserRole = (newRole) => {
    setUserRole(newRole);
    sessionStorage.setItem("role", newRole);
  };

  return (
    <UserContext.Provider value={{ token, setToken: updateToken, userRole, setUserRole: updateUserRole }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) throw new Error("Context was used in the wrong place");
  return context;
}

export { ContextProvider, useUser };
