/* import { useContext, useState } from "react";
import { createContext } from "react";

const UserContext = createContext(null);

function ContextProvider({ children }) {
  const [token, setToken] = useState(function () {
    const value = sessionStorage.getItem("token");
    return value || "";
  });

  const [userRole, setUserRole] = useState(function () {
    const value = sessionStorage.getItem("role");
    return value || "";
  });

  console.log(userRole);

  return (
    <UserContext.Provider value={{ token, setToken, userRole, setUserRole }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("Context was used in the wrong place");

  return context;
}

export { ContextProvider, useUser }; */







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
