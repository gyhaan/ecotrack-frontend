import { useContext, useState } from "react";
import { createContext } from "react";

const UserContext = createContext(null);
function ContextProvider({ children }) {
  const [token, setToken] = useState("");
  return (
    <UserContext.Provider value={{ token, setToken }}>
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