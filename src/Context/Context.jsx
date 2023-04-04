import React, { createContext } from "react";

export const context = createContext();
export const Context = ({ children }) => {
  const items = ["Food", "Drinks", "Fruits"];
  return <context.Provider value={{ items }}>{children}</context.Provider>;
};
