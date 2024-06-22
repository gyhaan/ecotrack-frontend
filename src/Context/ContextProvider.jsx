import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

function ContextProvider({ children }) {
  const [token, setToken] = useState(
    () => sessionStorage.getItem("token") || ""
  );
  const [userRole, setUserRole] = useState(
    () => sessionStorage.getItem("role") || ""
  );
  const [userName, setUserName] = useState(
    () => sessionStorage.getItem("name") || ""
  ); // Added state for user's name

  const updateToken = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const updateUserRole = (newRole) => {
    setUserRole(newRole);
    sessionStorage.setItem("role", newRole);
  };

  const updateUserName = (newName) => {
    // Function to update user's name
    setUserName(newName);
    sessionStorage.setItem("name", newName);
  };

  const logout = async () => {
    setToken("");
    setUserRole("");
    setUserName(""); // Clear user's name on logout
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("name"); // Remove name from session storage
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken: updateToken,
        userRole,
        setUserRole: updateUserRole,
        userName,
        setUserName: updateUserName,
        logout,
      }}
    >
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

export { ContextProvider, useUser };
