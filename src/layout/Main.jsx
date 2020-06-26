import React, { useContext } from "react";
import "./Main.scss";
// context
import { AppContext } from "../context/AppContext";
// components
import FilmsList from "../components/FilmsList";
import Film from "../components/Film";

const Main = () => {
  const { titleClicked } = useContext(AppContext);

  return (
    <main className="main-wrap">{titleClicked ? <Film /> : <FilmsList />}</main>
  );
};

export default Main;
