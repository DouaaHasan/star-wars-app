import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [titleClicked, setTitleClicked] = useState(false);
  const [film, setFilm] = useState({});
  const [chars, setChars] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);
  const [starshipsNames, setStarshipsNames] = useState([]);

  const value = {
    titleClicked,
    setTitleClicked,
    film,
    setFilm,
    chars,
    setChars,
    planets,
    setPlanets,
    starships,
    setStarships,
    starshipsNames,
    setStarshipsNames,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
