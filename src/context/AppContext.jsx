import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [titleClicked, setTitleClicked] = useState(false);
  const [film, setFilm] = useState({});

  const value = { titleClicked, setTitleClicked, film, setFilm };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
