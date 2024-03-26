import { createContext, useState } from "react";
export const NavContext = createContext();

export const NavContextProvider = ({ children }) => {
  const [activeLinkId, setActiveLinkId] = useState("");

  const value = {
    activeLinkId,
    setActiveLinkId,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
