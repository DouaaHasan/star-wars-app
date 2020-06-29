import React, { useContext } from "react";
import "./FilmTitle.scss";
// context
import { AppContext } from "../context/AppContext";

const FilmTitle = ({ film }) => {
  const { setTitleClicked, setFilm } = useContext(AppContext);

  return (
    <h2
      onClick={() => {
        setTitleClicked(true);
        setFilm(film);
      }}
      className="title-child"
    >
      {film.title}
    </h2>
  );
};

export default FilmTitle;
